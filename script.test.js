const { showContacts } = require('./src/script.js');

test('showContacts uses dynamic data', () => {
  const testName = 'Random Name';
  const testPhone = '123-4567890';
  const testGroup = 'Random Group';

  const contactBook = {
      contacts: [
          { name: testName, phone: testPhone, group: testGroup }
      ]
  };

  const result = showContacts(contactBook, testGroup);
  expect(result).toContain(testName);
  expect(result).toContain(testPhone);
});