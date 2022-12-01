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
        feature: 'Twitter',
        value: '',
      },
      {
        type: 'SOCIAL_MEDIA',
        feature: 'Instagram',
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
    ]);
  },

  async down(queryInterface) {
    return queryInterface.bulkDelete('settings', null, {});
  },
};
