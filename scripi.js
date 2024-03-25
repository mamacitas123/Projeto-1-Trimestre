function addGoal() {
    var newGoalInput = document.getElementById("new-goal");
    var newGoalText = newGoalInput.value;
    if (newGoalText !== "") {
        var goalList = document.getElementById("goal-list");
        var newGoalItem = document.createElement("li");
        newGoalItem.textContent = newGoalText;
        goalList.appendChild(newGoalItem);
        newGoalInput.value = "";
    } else {
        alert("Por favor, insira um objetivo válido.");
    }
}