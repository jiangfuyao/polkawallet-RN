/*
 * @Description: COPYRIGHT © 2018 POLKAWALLET (HK) LIMITED
 * This file is part of Polkawallet.

 It under the terms of the GNU General Public License as published by
 the Free Software Foundation, either version 3 of the License.
 You should have received a copy of the GNU General Public License
 along with Polkawallet. If not, see <http://www.gnu.org/licenses/>.

 * @Autor: POLKAWALLET LIMITED
 * @Date: 2019-06-18 21:08:00
 */
export default {
  // Staking.js
  stakingOverview: 'Staking Overview',
  AccountActions: 'Account Actions',
  // Staking Overview 版块
  validatorsNum: 'validators',
  intentions: 'intentions',
  session: 'session',
  era: 'era',
  validators: 'Validators',
  nextUp: 'Next up',
  NoValidator: '- Not have Validator.',
  NoNextUp: 'Not have Next up',
  //   Account Actions 版块
  stakingOption: 'Staking slash record, Unit(xxx)',
  stakingOption_new: 'Staking slash record, Unit',
  controller: 'controller',
  stash: 'stash',
  balance: 'balance',
  locked: 'locked',
  eraLeft: 'era left',
  BondAdditional: 'Bond Additional',
  BondFunds: 'Bond Funds',
  validate: 'validate',
  Nominate: 'Nominate',
  Unvalidate: 'Unvalidate',
  Unnominate: 'Unnominate',
  SlashRecords: 'Slash Records',
  Nominating: 'Nominating',
  MyNominators: 'MyNominators',
  noNominating: '-You are not nominating.',
  noNominee: "-You don't have nominee",
  SetSessionKey: 'SetSessionKey',
  Unbond: 'Unbond',
  PleaseChoose: 'Please choose',
  //   Validator_Info.js
  Nominators: 'Nominators',
  ValidatorInfo: 'Validator Info',
  V_no_Nominator: '- Not have Nominator.',
  V_no_SR: '- Not have Slash Record.',
  //   BondAdditional.js
  BondExtraFailed: 'Bond Extra Failed',
  BondExtraSuccess: 'Bond Extra success',
  BondExtra: 'Bond Extra',
  BondingPreferences: 'Bonding Preferences',
  calling: 'calling',
  additionalValue: 'max additional value',
  //   BondFunds.js
  BondSuccess: 'Bond success',
  BondFailed: 'Bond Failed',
  Bonding: 'Bonding',
  Controller: 'Controller',
  payee: 'payee',
  valueBonded: 'value bonded',
  //   nominate.js
  NominateSuccess: 'Nominate success',
  NominateFailed: 'Nominate Failed',
  NominateValidator: 'Nominate Validator',
  // Nominate: 'Nominate',
  multipleAddresses: 'If there are multiple addresses, separate them with a ","',
  nominateAddress: 'nominate the following address (validator or intention) ',
  //   setSessionKey.js
  SessionKeyFailed: 'Set SessionKey Failed',
  SessionKeySuccess: 'Set SessionKey success',
  setSessionKey: 'Set SessionKey',
  SessionKey: 'SessionKey',
  Set: 'Set',
  //   stake.js
  ValidateSuccess: 'Validate success',
  ValidateFailed: 'Validate Failed',
  Validate: 'Validate',
  unstakeThreshold: 'unstake Threshold',
  validatorPayment: 'validator Payment',
  // Unbond.js
  UnbondFailed: 'Unbond Failed',
  UnbondSuccess: 'Unbond success',
  unbondAmount: 'unbond amount',
  UnBond: 'UnBond',
  //   unniminate.js
  UnnominateFailed: 'Unnominate Failed',
  UnnominateSuccess: 'Unnominate success',
  // Unnominate: 'Unnominate',
  nominateTip:
    "Will panic if called when source isn't currently nominating target. Updates Nominating, NominatorsFor and NominationBalance.",
  //   unstake.js
  UnvalidateSuccess: 'Unvalidate success',
  UnvalidateFailed: 'Unvalidate Failed',
  // Unvalidate: 'Unvalidate',
  UnvalidateTip:
    'Retract the desire to stake for the transactor. Effects will be felt at the beginning of the next era.'
}
