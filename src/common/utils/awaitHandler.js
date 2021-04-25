export function on(promise, errorProps) {
  return promise
    .then(data => {
      return [null, data];
    })
    .catch(err => {
      if (errorProps) Object.assign(err, errorProps);
      return [err, undefined];
    });
}
