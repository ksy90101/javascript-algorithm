function solution(skill, skill_trees) {
  let answer = skill_trees.length;
  for (const skillTree of skill_trees) {
    let beforeIndex = skillTree.indexOf(skill.charAt(0));
    for (let i = 1; i < skill.length; i++) {
      let currentIndex = skillTree.indexOf(skill.charAt(i));
      if (
        (beforeIndex > currentIndex && currentIndex !== -1) ||
        (beforeIndex === -1 && currentIndex !== -1)
      ) {
        answer--;
        break;
      }
      beforeIndex = currentIndex;
    }
  }

  return answer;
}

console.log(solution("CBD", ["BACDE", "CBADF", "AECB", "BDA"]));
