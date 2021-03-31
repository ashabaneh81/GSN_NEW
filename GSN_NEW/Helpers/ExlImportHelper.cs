using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using System.Text;
using System.Web;

namespace GSN_NEW.Helpers
{
    public class ExlImportHelper
    {
        #region Private Properties

        private readonly string _model;

        private string _fields;

        #endregion // Private Properties

        #region Public Properties

        public List<string> ModelFields { get; private set; } 

        public Dictionary<string, string> ModelDbFieldsMap { get; private set; }

        public string Table { get; private set; }

        #endregion // Public Properties

        #region Constructor

        public ExlImportHelper(string model, string fields)
        {
            if (string.IsNullOrEmpty(model)) throw new Exception("Model is Null or Empty");
            if (string.IsNullOrEmpty(fields)) throw new Exception("Fields is Null or Empty");
         
            _model = model;
            _fields = fields;

            ModelFields = fields.Split(',').ToList();
            ModelDbFieldsMap = new Dictionary<string, string>();

            Init();
        }

        #endregion // Constructor

        #region Private Methods

        private void Init()
        {
            var modelFullName = string.Format("{0}.Models.{1}",
                                              Assembly.GetExecutingAssembly().GetName().Name,
                                              _model);

            var modelType = Assembly.GetExecutingAssembly()
                                    .GetTypes()
                                    .ToList()
                                    .FirstOrDefault(x => x.FullName == modelFullName);

            if (modelType == null) throw new Exception(string.Format("Model \'{0}\' was not found", modelFullName));

            var attr = modelType.GetCustomAttributes()
                                .FirstOrDefault(x => x.TypeId.ToString().EndsWith("EntityNameAttribute"));

            if (attr == null) throw new Exception(string.Format("\'EntityNameAttribute\' was not found on Model \'{0}\'.", modelFullName));

            Table = ((EntityNameAttribute)attr).Name;

            ModelFields.ForEach(x =>
            {
                var p = modelType.GetProperty(x);

                if (p == null) 
                    throw new Exception(string.Format("Property \'{0}\' was not found in Model \'{1}\'", x, modelType.Name));

                if (!p.GetCustomAttributes().Any(a => a.TypeId.ToString().EndsWith("EntityNameAttribute")))
                    throw new Exception(string.Format("Property \'{0}\' does not have an \'EntityNameAttribute\' Attribute", x));

                var dbField = ((EntityNameAttribute)p.GetCustomAttributes()
                                                       .Single(a =>
                                                               a.TypeId.ToString()
                                                                .EndsWith("EntityNameAttribute"))).Name;

                ModelDbFieldsMap.Add(p.Name, dbField);
            });
        }

        #endregion // Private Methods

        #region Public Methods


        #endregion // Public Methods
    }
}