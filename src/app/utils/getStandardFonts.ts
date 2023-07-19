type StandardFont = {
  id: string;
  fullName: string;
};

type StandardFonts = ReadonlyArray<StandardFont>;

export const getStandardFonts = (): StandardFonts => {
  return [
    {
      id: "arial",
      fullName: "Arial",
    },
    {
      id: "verdana",
      fullName: "Verdana",
    },
    {
      id: "tahoma",
      fullName: "Tahoma",
    },
    {
      id: "trebuchet",
      fullName: "Trebuchet MS",
    },
    {
      id: "times",
      fullName: "Times New Roman",
    },
    {
      id: "georgia",
      fullName: "Georgia",
    },
    {
      id: "garamond",
      fullName: "Garamond",
    },
    {
      id: "courier",
      fullName: "Courier New",
    },
    {
      id: "brush",
      fullName: "Brush Script MT",
    },
  ];
};
