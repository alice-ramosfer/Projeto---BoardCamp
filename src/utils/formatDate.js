export function formatDate(date) {
  if (!date) return null; // caso seja null no banco
  const d = new Date(date);

  const ano = d.getFullYear();
  const mes = String(d.getMonth() + 1).padStart(2, "0"); // meses começam do 0
  const dia = String(d.getDate()).padStart(2, "0");

  return `${ano}-${mes}-${dia}`;
}