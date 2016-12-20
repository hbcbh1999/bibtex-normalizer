class TitleValidator {
  constructor() {
    this.properNames = ['Android', 'GitHub', 'YouTube', 'Twitter', 'Facebook'];
  }

  validate(value) {
    let isValid = true;
    let words = _.split(value, ' ');
    // test camel case words
    _.each(this.properNames, (word) => {
      const found = _.findIndex(words, w => (_.toLower(w) === _.toLower(word)));
      if (found >= 0) { isValid = false; }
    });

    return {
      isValid,
      message: 'Proper names must be between brackets.',
      alternative: this.fix(value)
    };
  }

  fix(value) {
    let words = _.words(value);
    let formatted = false;

    _.each(this.properNames, (word) => {
      const found = _.findIndex(words, w => (_.toLower(w) === _.toLower(word)));
      if (found >= 0) { words[found] = `{${word}}`; formatted = true; }
    });

    return formatted ? _.join(words, ' ') : null;
  }
}

export default (new TitleValidator());
