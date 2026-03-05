function initFooterLinks() {
  const base = "https://www.linkedin.com/in/";
  const profile = "carlosmcano/";
  document.getElementById("linkedin-link").href = base + profile;

  const user = "carlosmcano99";
  const domain = "gmail.com";
  document.getElementById("email-link").href = "mailto:" + user + "@" + domain;

  const ghBase = "https://github.com/";
  const ghUser = "CarlosM-Cano";
  document.getElementById("github-link").href = ghBase + ghUser;

  const phone = "9144519475";
  document.getElementById("phone-link").href = "tel:" + phone;
}
