export class Validator {
  validateUsername(username) {
    if (
      /\d{4,}/.test(username)
      || /^[\d_-]/.test(username)
      || /[\d_-]$/.test(username)
    ) {
      return false;
    }
    return /[\w_-]*/.test(username);
  }
}
