var microHues = {};

microHues.colorArray = [
    {name: "Mahogany",              value: "#CD4A4A"},
    {name: "Banana Mania",          value: "#FAE7B5"},
    {name: "Beaver",                value: "#9F8170"},
    //{name: "Black",                 value: "#232323"},
    {name: "Chestnut",              value: "#BC5D58"},
    {name: "Copper",                value: "#DD9475"},
    {name: "Cornflower",            value: "#9ACEEB"},
    {name: "Denim",                 value: "#2B6CC4"},
    {name: "Desert Sand",           value: "#EFCDB8"},
    {name: "Eggplant",              value: "#6E5160"},
    {name: "Electric Lime",         value: "#1DF914"},
    {name: "Fern",                  value: "#71BC78"},
    {name: "Goldenrod",             value: "#FCD975"},
    {name: "Granny Smith Apple",    value: "#A8E4A0"},
    {name: "Gray",                  value: "#95918C"},
    {name: "Green",                 value: "#1CAC78"},
    {name: "Hot Magenta",           value: "#FF1DCE"},
    {name: "Inch Worm",             value: "#B2EC5D"},
    {name: "Indigo",                value: "#5D76CB"},
    {name: "Laser Lemon",           value: "#FDFC74"},
    {name: "Lavender",              value: "#FCB4D5"},
    {name: "Macaroni and Cheese",   value: "#FFBD88"},
    {name: "Manatee",               value: "#979AAA"},
    {name: "Mango Tango",           value: "#FF8243"},
    {name: "Melon",                 value: "#FDBCB4"},
    {name: "Midnight Blue",         value: "#1A4876"},
    {name: "Neon Carrot",           value: "#FFA343"},
    {name: "Olive Green",           value: "#BAB86C"},
    {name: "Orange",                value: "#FF7538"},
    {name: "Orchid",                value: "#E6A8D7"},
    {name: "Outer Space",           value: "#414A4C"},
    {name: "Outrageous Orange",     value: "#FF6E4A"},
    {name: "Pacific Blue",          value: "#1CA9C9"},
    {name: "Periwinkle",            value: "#C5D0E6"},
    {name: "Plum",                  value: "#8E4585"},
    {name: "Purple Heart",          value: "#7442C8"},
    {name: "Raw Sienna",            value: "#D68A59"},
    {name: "Razzmatazz",            value: "#E3256B"},
    {name: "Red",                   value: "#EE204D"},
    {name: "Robin Egg Blue",        value: "#1FCECB"},
    {name: "Royal Purple",          value: "#7851A9"},
    {name: "Salmon",                value: "#FF9BAA"},
    {name: "Scarlet",               value: "#FC2847"},
    {name: "Sea Green",             value: "#9FE2BF"},
    {name: "Sepia",                 value: "#A5694F"},
    {name: "Shadow",                value: "#8A795D"},
    {name: "Shamrock",              value: "#45CEA2"},
    {name: "Shocking Pink",         value: "#FB7EFD"},
    {name: "Spring Green",          value: "#ECEABE"},
    {name: "Sunset Orange",         value: "#FD5E53"},
    {name: "Tan",                   value: "#FAA76C"},
    {name: "Tickle Me Pink",        value: "#FC89AC"},
    {name: "Timberwolf",            value: "#DBD7D2"},
    {name: "Tropical Rain Forest",  value: "#17806D"},
    {name: "Turquoise Blue",        value: "#77DDE7"},
    {name: "Vivid Tangerine",       value: "#FFA089"},
    {name: "Vivid Violet",          value: "#8F509D"},
    {name: "White",                 value: "#EDEDED"},
    {name: "Wild Strawberry",       value: "#FF43A4"},
    {name: "Wild Watermelon",       value: "#FC6C85"},
    {name: "Wisteria",              value: "#CDA4DE"},
    {name: "Yellow",                value: "#FCE883"},
    {name: "Yellow Green",          value: "#C5E384"},
    {name: "Yellow Orange",         value: "#FFB653"}
];

microHues.init = function(){
    var ca = microHues.colorArray;
    var selectedColor = ca[Math.floor(Math.random()*ca.length)];
    document.body.style.backgroundColor = selectedColor.value;
}