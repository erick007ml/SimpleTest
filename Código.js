// Method
function doPost(e) {
  const data = JSON.parse(e.postData.contents)

  const nombre = data.nombre
  const email = data.email

  const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet()

  if (sheet.getLastRow() === 0) {
    sheet.appendRow(['Nombre', 'Email', 'Fecha'])
  }

  sheet.appendRow([nombre, email, new Date()])

  return ContentService.createTextOutput(
    'Cambios guardado correctamente',
  ).setMimeType(ContentService.MimeType.TEXT)
}
