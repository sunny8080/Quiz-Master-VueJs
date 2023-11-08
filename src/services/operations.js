import { read, utils, writeFileXLSX } from 'xlsx'

// login user
export const login = async (empId, name) => {
  // Do some check and login task
  const token = Math.floor(Math.random() * 100000)
  const auth = {
    empId: empId,
    user: name,
    token
  }
  localStorage.setItem('token', token)
  return auth;
}

export const fetchQuestions = async (excelSheetLink) => {
  let res = [];
  try {
    // Read excel files which is hosted
    // Download File
    const f = await fetch(excelSheetLink);
    const ab = await f.arrayBuffer();

    // Parse file
    const wb = read(ab);

    // Generate array of objects from first worksheet
    const ws = wb.Sheets[wb.SheetNames[0]]; // get the first worksheet
    const data = utils.sheet_to_json(ws); // generate objects


    let n = data[0]['B'];
    let start = data[1]['B']
    res = data.slice(start + 1, start + n + 1);
  } catch (error) {
    console.log(error);
    console.log("Error occurred");
  }
  return res;
}

export const saveTestDetails = async () => {
  console.log("in saveTest start ________________");
  const data = [[4, 8.9, 78], [8, 7, 897], [9, 8989, 45]];

  /* generate worksheet from state */
  const ws = utils.json_to_sheet(data);

  /* create workbook and append worksheet */
  const wb = utils.book_new();
  utils.book_append_sheet(wb, ws, "Data");

  /* export to XLSX */
  writeFileXLSX(wb, "SheetJSVueAoO.xlsx");

  console.log("in saveTest end ________________");
}


