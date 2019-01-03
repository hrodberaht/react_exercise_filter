export const getPeople = state => {
  const { people, filterQuery } = state.people;

  if (filterQuery) {
    const regexp = new RegExp(filterQuery, 'i');
    return people.filter(person => regexp.test(person.name));
  }
  return people;
};
