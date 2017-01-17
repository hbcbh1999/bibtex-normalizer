import Ember from 'ember';

export default Ember.Route.extend({
  formatter: Ember.inject.service(),

  beforeModel() {
    if (!this.get('formatter').get('bibtex').bibtex) { this.transitionTo('index'); }
  },

  model() {
    const bibtex = this.get('formatter').get('bibtex');

    const alerts = [
      bibtex.invalidFields.length ? {
        icon: 'exclamation-triangle',
        text: `${bibtex.invalidFields.length} invalid fields found.`,
        class: 'danger'
      } : null,
      bibtex.missingFields.length ? {
        icon: 'plus',
        text: `${bibtex.missingFields.length} missing fields added.`,
        class: 'danger'
      } : null,
      bibtex.formattedFields.length ? {
        icon: 'pencil-square-o',
        text: `${bibtex.formattedFields.length} fields auto-formatted`,
        class: 'warning',
      } : null,
    ];

    bibtex.set('alerts', _.compact(alerts));

    return bibtex;
  },

  actions: {
    willTransition() {
      Ember.$('.app-header').removeClass('border-bottom');
    },
    didTransition() {
      Ember.run.schedule("afterRender", this, function() {
        const $ = Ember.$;
        const subHeader = Ember.$('.sub-header');
        $('.app-header, .sub-header').addClass('border-bottom');
        $(window).scroll(function() {
          if ($(window).scrollTop() > 100) {
            subHeader.addClass('fixed-top');
          } else {
            subHeader.removeClass('fixed-top');
          }
        });

        if (this.currentModel.invalidFields.length || this.currentModel.missingFields.length) {
          swal({
          	title: 'We found errors in your bibtex file. Please, check that out before use it!',
          });
        } else if (this.currentModel.formattedFields.length) {
          swal({
          	title: 'We automatically fixed some fields of your bibtex file. Check it out before download!',
          });
        } else {
          swal({
          	title: 'Congratulations! We didn\'t find errors in your bibtex file.',
          });
        }
      });
    },
  }
});