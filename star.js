window.onload = async function() {

	var info = await (await fetch("https://api.github.com/repos/cuprate/cuprate")).json();
	document.getElementById("stargazer").textContent = info["stargazers_count"];
}