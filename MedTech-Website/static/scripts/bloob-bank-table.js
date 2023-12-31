function addTableRow(rowIndex, id, amount) {
    /*
    How a table row will look like for the blood bank data
        <tr>
            <th scope="row">rowIndex</th>
            <td>id</td>
            <td>amount</td>
        </tr>
    */
    const tr = document.createElement("tr");
    const th = document.createElement("th");
    th.scope = "row";
    th.innerHTML = rowIndex;
    tr.appendChild(th);

    let td01 = document.createElement("td");
    td01.innerHTML = id;
    tr.appendChild(td01);
    let td02 = document.createElement("td");
    td02.innerHTML = amount;
    tr.appendChild(td02);
    return tr;
}

window.onload = () => {
    //on load we build the table dynamically by using 
    // the data the json-server 
    // const blood = [
    //     {"A+":0},{"B+":0},{"AB+":0},{"O+":0},
    //     {"A-":0},{"B-":0},{"AB-":0},{"O-":0},


    // ]
     const blood = {
        "A+":0, "B+":0, "AB+":0, "O+":0,
        "A-":0, "B-":0, "AB-":0, "O-":0,
     }
    const tbody = document.getElementById("table-body");
    let bloodTypesData = getObjectFromLocalStorage("donors");
    if (bloodTypesData) {
        bloodTypesData = bloodTypesData.sort((a, b) => b.amount - a.amount);
        let tableRow = {};
        for (let i = 0; i < bloodTypesData.length; i++) {
            // tableRow = addTableRow(i + 1, bloodTypesData[i].bloodType, bloodTypesData[i].amount);
            // tbody.appendChild(tableRow);
            blood[bloodTypesData[i].bloodType] += 1
        }
        let i = 0
        for(type in blood){
            tableRow = addTableRow(i + 1, type, blood[type]);
            tbody.appendChild(tableRow);
            i++;
        }
    }
}