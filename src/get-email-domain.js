const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain(email) {
  let res = [];
  const emailLikeArr = email.split('');

  emailLikeArr.forEach((item, index) => {
    if (item === '@') {
      res = emailLikeArr.slice(index + 1)
    }
  })

return res.join('');
}

module.exports = {
  getEmailDomain
};
