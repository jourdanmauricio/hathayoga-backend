'use strict';

module.exports = {
  async up(queryInterface) {
    return queryInterface.bulkInsert('settings', [
      {
        type: 'SOCIAL_MEDIA',
        feature: 'Facebook',
        value: '',
      },
      {
        type: 'SOCIAL_MEDIA',
        feature: 'Instagram',
        value: '',
      },
      {
        type: 'SOCIAL_MEDIA',
        feature: 'Twitter',
        value: '',
      },
      {
        type: 'SOCIAL_MEDIA',
        feature: 'Whatsapp',
        value: '',
      },
      {
        type: 'CONTACT',
        feature: 'email',
        value: '',
      },
      {
        type: 'CONTACT',
        feature: 'phone',
        value: '',
      },
      {
        type: 'STYLE',
        feature: 'logo',
        value: '',
      },
      {
        type: 'STYLE',
        feature: 'title_color',
        value: '',
      },
      {
        type: 'STYLE',
        feature: 'paragraph_color',
        value: '',
      },

      {
        type: 'STYLE',
        feature: 'button_color',
        value: '',
      },
      {
        type: 'STYLE',
        feature: 'divisor_color',
        value: '',
      },
      {
        type: 'STYLE',
        feature: 'effect_color',
        value: '',
      },
      {
        type: 'STYLE',
        feature: 'error_color',
        value: '',
      },
      {
        type: 'STYLE',
        feature: 'h1_color',
        value: '',
      },
      {
        type: 'STYLE',
        feature: 'paragraph_header_color',
        value: '',
      },
      {
        type: 'STYLE',
        feature: 'h1_font_size',
        value: '',
      },
      {
        type: 'STYLE',
        feature: 'h1_font_weight',
        value: '',
      },
      {
        type: 'STYLE',
        feature: 'paragraph_font_size',
        value: '',
      },
      {
        type: 'STYLE',
        feature: 'paragraph_font_weight',
        value: '',
      },
      {
        type: 'STYLE',
        feature: 'paragraph_header_size',
        value: '',
      },
      {
        type: 'STYLE',
        feature: 'paragraph_header_weight',
        value: '',
      },
      {
        type: 'STYLE',
        feature: 'title_font_size',
        value: '',
      },
      {
        type: 'STYLE',
        feature: 'title_font_weight',
        value: '',
      },
    ]);
  },

  async down(queryInterface) {
    return queryInterface.bulkDelete('settings', null, {});
  },
};
