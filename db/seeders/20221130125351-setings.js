'use strict';

module.exports = {
  async up(queryInterface) {
    return queryInterface.bulkInsert('settings', [
      {
        type: 'SOCIAL_MEDIA',
        feture: 'Facebook',
        value: '',
      },
      {
        type: 'SOCIAL_MEDIA',
        feture: 'Twitter',
        value: '',
      },
      {
        type: 'SOCIAL_MEDIA',
        feture: 'Instagram',
        value: '',
      },
      {
        type: 'CONTACT',
        feture: 'email',
        value: '',
      },
      {
        type: 'CONTACT',
        feture: 'phone',
        value: '',
      },
      {
        type: 'STYLE',
        feture: 'logo',
        value: '',
      },
      {
        type: 'STYLE',
        feture: 'title_color',
        value: '',
      },
      {
        type: 'STYLE',
        feture: 'paragraph_color',
        value: '',
      },
    ]);
  },

  async down(queryInterface) {
    return queryInterface.bulkDelete('settings', null, {});
  },
};
