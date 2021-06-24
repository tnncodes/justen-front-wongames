/// <reference path="../support/index.d.ts" />

import { createUser } from '../support/generate'

describe('User', () => {
  it('should sign up', () => {
    const user = createUser()

    cy.visit('/sign-up')
    cy.signUp(user)
  });
});
