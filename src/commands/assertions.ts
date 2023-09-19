/**
 * Assert that an array is sorted in the correct order, ignoring case.
 * Internally, it relies on `cy.should` and deep equality assertion.
 *
 * @example `cy.assertSort(['Z', 'Y', 'X'], true)`
 * @see https://docs.cypress.io/api/commands/should
 */
Cypress.Commands.add('assertSort', (strArray: string[], descending?: boolean) => {
  const actual = strArray.slice();
  const expected = strArray.sort((a, b) => a.toLocaleLowerCase().localeCompare(b.toLocaleLowerCase()));
  if (descending) {
    expected.reverse();
  }

  return cy.wrap(actual).should('deep.equal', expected);
});

/**
 * Assert that the inner text of an element matches the expected text after trimming.
 *
 * @param dataTestAttributeName - The data-test attribute name to locate the element.
 * @param expectedText - The expected inner text to compare against.
 *
 * @example `cy.assertInnerTextEquals('data-test-button', 'Click me')`
 * @see https://docs.cypress.io/api/commands/should
 */
Cypress.Commands.add('assertInnerTextEquals', (dataTestAttributeName: string, expectedText: string) => {
  return cy.getByTestAttr(dataTestAttributeName).should((elements) => {
    expect(elements.get(0).innerText.trim()).to.equal(expectedText.trim());
  });
});

export {};
