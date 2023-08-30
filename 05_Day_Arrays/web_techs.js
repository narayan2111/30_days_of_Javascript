const web_techs = [`Html`, `CSS`,`Javascript`, `AI`, `Machine Learning`, `Blockchain`,`Cloud Computing`];
module.exports = web_techs;

//In the webTechs array check if Sass exists in the array and if it exists print 'Sass is a CSS preprocess'. If it does not exist add Sass to the array and print the array.

if(!web_techs.includes(`Sass`))
{
    web_techs.push(`Sass`);
  //  console.log(`Sass is a CSS preprocess`);
}
//
//Concatenate the following two variables and store it in a fullStack variable.

const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
const backEnd = ['Node','Express', 'MongoDB']
const fullStack = frontEnd.concat(backEnd);
console.log(fullStack)