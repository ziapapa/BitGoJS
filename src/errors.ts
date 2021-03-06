// Descriptive error types for common issues which may arise
// during the operation of BitGoJS or BitGoExpress

// Each subclass needs the explicit Object.setPrototypeOf() so that instanceof will work correctly.
// See https://github.com/Microsoft/TypeScript-wiki/blob/master/Breaking-Changes.md#extending-built-ins-like-error-array-and-map-may-no-longer-work

export class BitGoJsError extends Error {
  public constructor(message) {
    super(message);
    Error.captureStackTrace(this, this.constructor);
    Object.setPrototypeOf(this, BitGoJsError.prototype);
  }
}

export class TlsConfigurationError extends BitGoJsError {
  public constructor(message?) {
    super(message || 'TLS is configuration is invalid');
    Object.setPrototypeOf(this, TlsConfigurationError.prototype);
  }
}

export class NodeEnvironmentError extends BitGoJsError {
  public constructor(message?) {
    super(message || 'NODE_ENV is invalid for the current bitgo environment');
    Object.setPrototypeOf(this, NodeEnvironmentError.prototype);
  }
}

export class UnsupportedCoinError extends BitGoJsError {
  public constructor(coin) {
    super(`Coin or token type ${coin} not supported or not compiled`);
    Object.setPrototypeOf(this, UnsupportedCoinError.prototype);
  }
}

export class AddressTypeChainMismatchError extends BitGoJsError {
  constructor(addressType, chain) {
    super(`address type ${addressType} does not correspond to chain ${chain}`);
    Object.setPrototypeOf(this, AddressTypeChainMismatchError.prototype);
  }
}

export class P2shP2wshUnsupportedError extends BitGoJsError {
  constructor(message) {
    super(message || 'p2shP2wsh not supported by this coin');
    Object.setPrototypeOf(this, P2shP2wshUnsupportedError.prototype);
  }
}

export class P2wshUnsupportedError extends BitGoJsError {
  public constructor(message?) {
    super(message || 'p2wsh not supported by this coin');
    Object.setPrototypeOf(this, P2wshUnsupportedError.prototype);
  }
}

export class UnsupportedAddressTypeError extends BitGoJsError {
  public constructor(message?) {
    super(message || 'invalid address type');
    Object.setPrototypeOf(this, UnsupportedAddressTypeError.prototype);
  }
}

export class InvalidAddressError extends BitGoJsError {
  public constructor(message?) {
    super(message || 'invalid address');
    Object.setPrototypeOf(this, InvalidAddressError.prototype);
  }
}

export class InvalidAddressVerificationObjectPropertyError extends BitGoJsError {
  public constructor(message?) {
    super(message || 'address validation failure');
    Object.setPrototypeOf(this, InvalidAddressVerificationObjectPropertyError.prototype);
  }
}

export class UnexpectedAddressError extends BitGoJsError {
  public constructor(message?) {
    super(message || 'address validation failure');
    Object.setPrototypeOf(this, UnexpectedAddressError.prototype);
  }
}

export class InvalidAddressDerivationPropertyError extends BitGoJsError {
  public constructor(message?) {
    super(message || 'address chain and/or index are invalid');
    Object.setPrototypeOf(this, InvalidAddressDerivationPropertyError.prototype);
  }
}

export class WalletRecoveryUnsupported extends BitGoJsError {
  public constructor(message?) {
    super(message || 'wallet recovery is not supported by this coin');
    Object.setPrototypeOf(this, WalletRecoveryUnsupported.prototype);
  }
}


export class MethodNotImplementedError extends BitGoJsError {
  public constructor(message?) {
    super(message || 'method not implemented');
    Object.setPrototypeOf(this, MethodNotImplementedError.prototype);
  }
}
