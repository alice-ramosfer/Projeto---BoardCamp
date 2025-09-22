export function formatDate(date) {
<<<<<<< HEAD
  if (!date) return null; // caso seja null no banco
  const d = new Date(date);

  const ano = d.getFullYear();
  const mes = String(d.getMonth() + 1).padStart(2, "0"); // meses começam do 0
=======
  if (!date) return null;
  const d = new Date(date);

  const ano = d.getFullYear();
  const mes = String(d.getMonth() + 1).padStart(2, "0"); 
>>>>>>> 2a6b02f (arrumado a importacao da funcao formatDate do arquivo rental.controllers.js)
  const dia = String(d.getDate()).padStart(2, "0");

  return `${ano}-${mes}-${dia}`;
}