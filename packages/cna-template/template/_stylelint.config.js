module.exports = {
  <%_ if (plsrSass) { _%>
  plugins: ['stylelint-scss'],
  <%_ } _%>
  extends: [
    'stylelint-config-standard',
    <%_ if (prettier) { _%>
    'stylelint-config-prettier'
    <%_ } _%>
  ],
  // add your custom config here
  // https://stylelint.io/user-guide/configuration
  rules: {
    'no-empty-source': null,
    'at-rule-no-unknown': null,
    'selector-pseudo-element-no-unknown': [
      true, { ignorePseudoElements: ['v-deep'] }
    ]
  }
}
