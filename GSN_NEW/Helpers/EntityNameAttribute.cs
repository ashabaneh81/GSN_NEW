using System;

namespace GSN_NEW.Helpers
{
    public class EntityNameAttribute: Attribute
    {
        public string Name { get; set; }

        public EntityNameAttribute(string name)
        {
            Name = name;
        }
    }
}