export const cancelablePromise = promise => {
  let _hasCanceled = false;

  const cancelablePromise = new Promise((resolve, reject) => {
    promise.then(
      success => _hasCanceled ? reject({ isCancelled: true }) : resolve(success),
      error => _hasCanceled ? reject({ isCancelled: true }) : reject(error)
    );
  });

  return {
    promise: cancelablePromise,
    cancel() {
      _hasCanceled = true;
    }
  };
};
