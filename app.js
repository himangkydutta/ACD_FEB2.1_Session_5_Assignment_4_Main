var FirstEmployee =	{
					name:'Himu',
					age :23,
					salary:44444,
					address :{
									city:'Asam',
									state :'Aui',
									pin:233322
					}
				};
	
var SecondEmployee =	{
					name:'Himu2',
					age :25,
					salary:23400,
					address :{
									city:'nag',
									state :'manip',
									pin:123456
					}
				};
				
var ThirdEmployee =	{
					name:'Himu3',
					age :12,
					salary:12112,
					address :{
									city:'villai',
									state :'dim',
									pin:98766
					}
				};
		
var multipleEmparray = [FirstEmployee,SecondEmployee,ThirdEmployee];

console.log(multipleEmparray[0].name);
console.log(multipleEmparray[0].age);
console.log(multipleEmparray[0].salary);
console.log(multipleEmparray[0].address.city);
console.log(multipleEmparray[0].address.state);
console.log(multipleEmparray[0].address.pin);