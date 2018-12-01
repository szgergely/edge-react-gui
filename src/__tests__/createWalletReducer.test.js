// @flow

/* globals test expect */

import { createWallet as createWalletReducer } from '../reducers/scenes/CreateWalletReducer.js'

const dummyAction = { type: 'DUMMY_ACTION_PLEASE_IGNORE' }

test('initialState', () => {
  const expected = {
    isCreatingWallet: false,
    walletAccountActivationPaymentInfo: {},
    isCheckingHandleAvailability: false,
    isHandleAvailable: false,
    handleActivationInfo: {}
  }
  const actual = createWalletReducer(undefined, dummyAction)

  expect(actual).toEqual(expected)
})
