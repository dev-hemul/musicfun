const persons = [
	{name: 'John', age: 25},
	{name: 'Pete', age: 30},
	{name: 'Mary', age: 16}
]

const adults = persons.find(person => {
	console.log(person);
	return person.age > 18
	}
)


console.log(adults);