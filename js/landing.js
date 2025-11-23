document.getElementById("leadForm").addEventListener("submit", function(e){
  e.preventDefault();

  const name = document.getElementById("lead-name").value.trim();
  const email = document.getElementById("lead-email").value.trim();
  const phone = document.getElementById("lead-phone").value.trim();

  const lead = { name, email, phone };

  // Guardar en localStorage simulando "base de datos"
  const allLeads = JSON.parse(localStorage.getItem("tm_leads") || "[]");
  allLeads.push(lead);
  localStorage.setItem("tm_leads", JSON.stringify(allLeads));

  document.getElementById("msg").textContent = "✔ Gracias. Te contactaremos pronto.";

  document.getElementById("leadForm").reset();
});
