import { read, utils, writeFileXLSX } from 'xlsx'
import testMcqOptions from '../data/testMcqOptions'

// login user
export const login = async (empId, name) => {
  // Do some check and login task
  const token = Math.floor(Math.random() * 100000)
  const auth = {
    empId: empId,
    user: name,
    token
  }
  sessionStorage.setItem('token', token);
  // localStorage.setItem('token', token)
  return auth;
}

export const fetchQuestions = async function (excelSheetLink) {
  let res = [];
  const currentMcq = testMcqOptions[this.$store.state.mcqInd];

  if (!currentMcq) {
    return res;
  }

  try {
    // Download File - Read excel files which is hosted
    const f = await fetch(currentMcq.link);
    const ab = await f.arrayBuffer();

    // Parse file
    const wb = read(ab);

    // Generate array of objects from first worksheet
    const ws = wb.Sheets[wb.SheetNames[currentMcq.sheetNo - 1]]; // get the first worksheet

    // console.log(wb.SheetNames[1]);
    const data = utils.sheet_to_json(ws); // generate objects

    let n = data[0]['B'];
    let start = data[1]['B']
    res = data.slice(start, start + n);
  } catch (error) {
    console.log("Error occurred");
    // console.log(error);
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

