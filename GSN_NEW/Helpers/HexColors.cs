using System;
using System.Collections.Generic;

namespace GSN_NEW.Helpers
{
    public class HexColors
    {
        private List<string> HexColorList { get; set; }
        private int LastColorIndex { get; set; }
        private Random Random { get; set; }

        public HexColors()
        {
            HexColorList = new List<string>
                {
                    "#ac725e",
                    "#d06b64",
                    "#f83a22",
                    "#fa573c",
                    "#ff7537",
                    "#ffad46",
                    "#42d692",
                    "#16a765",
                    "#7bd148",
                    "#b3dc6c",
                    "#fbe983",
                    "#fad165",
                    "#92e1c0",
                    "#9fe1e7",
                    "#9fc6e7",
                    "#4986e7",
                    "#9a9cff",
                    "#b99aff",
                    "#c2c2c2",
                    "#cabdbf",
                    "#cca6ac",
                    "#f691b2",
                    "#cd74e6",
                    "#a47ae2",
                    "#555"
                };

            LastColorIndex = 0;

            Random = new Random();
        }

        public string GetNextColor()
        {
            if (LastColorIndex == HexColorList.Count - 1) LastColorIndex = 0;
            return HexColorList[LastColorIndex++];
        }

        public string GetRandom()
        {
            return String.Format("#{0:X6}", Random.Next(0x1000000));
        }
    }
}