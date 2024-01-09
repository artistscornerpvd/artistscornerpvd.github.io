import {
  __commonJS,
  __toESM
} from "./chunk-UXIASGQL.js";

// node_modules/long/src/long.js
var require_long = __commonJS({
  "node_modules/long/src/long.js"(exports, module) {
    module.exports = Long3;
    var wasm = null;
    try {
      wasm = new WebAssembly.Instance(new WebAssembly.Module(new Uint8Array([
        0,
        97,
        115,
        109,
        1,
        0,
        0,
        0,
        1,
        13,
        2,
        96,
        0,
        1,
        127,
        96,
        4,
        127,
        127,
        127,
        127,
        1,
        127,
        3,
        7,
        6,
        0,
        1,
        1,
        1,
        1,
        1,
        6,
        6,
        1,
        127,
        1,
        65,
        0,
        11,
        7,
        50,
        6,
        3,
        109,
        117,
        108,
        0,
        1,
        5,
        100,
        105,
        118,
        95,
        115,
        0,
        2,
        5,
        100,
        105,
        118,
        95,
        117,
        0,
        3,
        5,
        114,
        101,
        109,
        95,
        115,
        0,
        4,
        5,
        114,
        101,
        109,
        95,
        117,
        0,
        5,
        8,
        103,
        101,
        116,
        95,
        104,
        105,
        103,
        104,
        0,
        0,
        10,
        191,
        1,
        6,
        4,
        0,
        35,
        0,
        11,
        36,
        1,
        1,
        126,
        32,
        0,
        173,
        32,
        1,
        173,
        66,
        32,
        134,
        132,
        32,
        2,
        173,
        32,
        3,
        173,
        66,
        32,
        134,
        132,
        126,
        34,
        4,
        66,
        32,
        135,
        167,
        36,
        0,
        32,
        4,
        167,
        11,
        36,
        1,
        1,
        126,
        32,
        0,
        173,
        32,
        1,
        173,
        66,
        32,
        134,
        132,
        32,
        2,
        173,
        32,
        3,
        173,
        66,
        32,
        134,
        132,
        127,
        34,
        4,
        66,
        32,
        135,
        167,
        36,
        0,
        32,
        4,
        167,
        11,
        36,
        1,
        1,
        126,
        32,
        0,
        173,
        32,
        1,
        173,
        66,
        32,
        134,
        132,
        32,
        2,
        173,
        32,
        3,
        173,
        66,
        32,
        134,
        132,
        128,
        34,
        4,
        66,
        32,
        135,
        167,
        36,
        0,
        32,
        4,
        167,
        11,
        36,
        1,
        1,
        126,
        32,
        0,
        173,
        32,
        1,
        173,
        66,
        32,
        134,
        132,
        32,
        2,
        173,
        32,
        3,
        173,
        66,
        32,
        134,
        132,
        129,
        34,
        4,
        66,
        32,
        135,
        167,
        36,
        0,
        32,
        4,
        167,
        11,
        36,
        1,
        1,
        126,
        32,
        0,
        173,
        32,
        1,
        173,
        66,
        32,
        134,
        132,
        32,
        2,
        173,
        32,
        3,
        173,
        66,
        32,
        134,
        132,
        130,
        34,
        4,
        66,
        32,
        135,
        167,
        36,
        0,
        32,
        4,
        167,
        11
      ])), {}).exports;
    } catch (e) {
    }
    function Long3(low, high, unsigned) {
      this.low = low | 0;
      this.high = high | 0;
      this.unsigned = !!unsigned;
    }
    Long3.prototype.__isLong__;
    Object.defineProperty(Long3.prototype, "__isLong__", { value: true });
    function isLong(obj) {
      return (obj && obj["__isLong__"]) === true;
    }
    Long3.isLong = isLong;
    var INT_CACHE = {};
    var UINT_CACHE = {};
    function fromInt(value2, unsigned) {
      var obj, cachedObj, cache;
      if (unsigned) {
        value2 >>>= 0;
        if (cache = 0 <= value2 && value2 < 256) {
          cachedObj = UINT_CACHE[value2];
          if (cachedObj)
            return cachedObj;
        }
        obj = fromBits(value2, (value2 | 0) < 0 ? -1 : 0, true);
        if (cache)
          UINT_CACHE[value2] = obj;
        return obj;
      } else {
        value2 |= 0;
        if (cache = -128 <= value2 && value2 < 128) {
          cachedObj = INT_CACHE[value2];
          if (cachedObj)
            return cachedObj;
        }
        obj = fromBits(value2, value2 < 0 ? -1 : 0, false);
        if (cache)
          INT_CACHE[value2] = obj;
        return obj;
      }
    }
    Long3.fromInt = fromInt;
    function fromNumber(value2, unsigned) {
      if (isNaN(value2))
        return unsigned ? UZERO : ZERO;
      if (unsigned) {
        if (value2 < 0)
          return UZERO;
        if (value2 >= TWO_PWR_64_DBL)
          return MAX_UNSIGNED_VALUE;
      } else {
        if (value2 <= -TWO_PWR_63_DBL)
          return MIN_VALUE;
        if (value2 + 1 >= TWO_PWR_63_DBL)
          return MAX_VALUE;
      }
      if (value2 < 0)
        return fromNumber(-value2, unsigned).neg();
      return fromBits(value2 % TWO_PWR_32_DBL | 0, value2 / TWO_PWR_32_DBL | 0, unsigned);
    }
    Long3.fromNumber = fromNumber;
    function fromBits(lowBits, highBits, unsigned) {
      return new Long3(lowBits, highBits, unsigned);
    }
    Long3.fromBits = fromBits;
    var pow_dbl = Math.pow;
    function fromString(str, unsigned, radix) {
      if (str.length === 0)
        throw Error("empty string");
      if (str === "NaN" || str === "Infinity" || str === "+Infinity" || str === "-Infinity")
        return ZERO;
      if (typeof unsigned === "number") {
        radix = unsigned, unsigned = false;
      } else {
        unsigned = !!unsigned;
      }
      radix = radix || 10;
      if (radix < 2 || 36 < radix)
        throw RangeError("radix");
      var p;
      if ((p = str.indexOf("-")) > 0)
        throw Error("interior hyphen");
      else if (p === 0) {
        return fromString(str.substring(1), unsigned, radix).neg();
      }
      var radixToPower = fromNumber(pow_dbl(radix, 8));
      var result = ZERO;
      for (var i3 = 0; i3 < str.length; i3 += 8) {
        var size = Math.min(8, str.length - i3), value2 = parseInt(str.substring(i3, i3 + size), radix);
        if (size < 8) {
          var power = fromNumber(pow_dbl(radix, size));
          result = result.mul(power).add(fromNumber(value2));
        } else {
          result = result.mul(radixToPower);
          result = result.add(fromNumber(value2));
        }
      }
      result.unsigned = unsigned;
      return result;
    }
    Long3.fromString = fromString;
    function fromValue(val, unsigned) {
      if (typeof val === "number")
        return fromNumber(val, unsigned);
      if (typeof val === "string")
        return fromString(val, unsigned);
      return fromBits(val.low, val.high, typeof unsigned === "boolean" ? unsigned : val.unsigned);
    }
    Long3.fromValue = fromValue;
    var TWO_PWR_16_DBL = 1 << 16;
    var TWO_PWR_24_DBL = 1 << 24;
    var TWO_PWR_32_DBL = TWO_PWR_16_DBL * TWO_PWR_16_DBL;
    var TWO_PWR_64_DBL = TWO_PWR_32_DBL * TWO_PWR_32_DBL;
    var TWO_PWR_63_DBL = TWO_PWR_64_DBL / 2;
    var TWO_PWR_24 = fromInt(TWO_PWR_24_DBL);
    var ZERO = fromInt(0);
    Long3.ZERO = ZERO;
    var UZERO = fromInt(0, true);
    Long3.UZERO = UZERO;
    var ONE = fromInt(1);
    Long3.ONE = ONE;
    var UONE = fromInt(1, true);
    Long3.UONE = UONE;
    var NEG_ONE = fromInt(-1);
    Long3.NEG_ONE = NEG_ONE;
    var MAX_VALUE = fromBits(4294967295 | 0, 2147483647 | 0, false);
    Long3.MAX_VALUE = MAX_VALUE;
    var MAX_UNSIGNED_VALUE = fromBits(4294967295 | 0, 4294967295 | 0, true);
    Long3.MAX_UNSIGNED_VALUE = MAX_UNSIGNED_VALUE;
    var MIN_VALUE = fromBits(0, 2147483648 | 0, false);
    Long3.MIN_VALUE = MIN_VALUE;
    var LongPrototype = Long3.prototype;
    LongPrototype.toInt = function toInt() {
      return this.unsigned ? this.low >>> 0 : this.low;
    };
    LongPrototype.toNumber = function toNumber() {
      if (this.unsigned)
        return (this.high >>> 0) * TWO_PWR_32_DBL + (this.low >>> 0);
      return this.high * TWO_PWR_32_DBL + (this.low >>> 0);
    };
    LongPrototype.toString = function toString(radix) {
      radix = radix || 10;
      if (radix < 2 || 36 < radix)
        throw RangeError("radix");
      if (this.isZero())
        return "0";
      if (this.isNegative()) {
        if (this.eq(MIN_VALUE)) {
          var radixLong = fromNumber(radix), div = this.div(radixLong), rem1 = div.mul(radixLong).sub(this);
          return div.toString(radix) + rem1.toInt().toString(radix);
        } else
          return "-" + this.neg().toString(radix);
      }
      var radixToPower = fromNumber(pow_dbl(radix, 6), this.unsigned), rem = this;
      var result = "";
      while (true) {
        var remDiv = rem.div(radixToPower), intval = rem.sub(remDiv.mul(radixToPower)).toInt() >>> 0, digits = intval.toString(radix);
        rem = remDiv;
        if (rem.isZero())
          return digits + result;
        else {
          while (digits.length < 6)
            digits = "0" + digits;
          result = "" + digits + result;
        }
      }
    };
    LongPrototype.getHighBits = function getHighBits() {
      return this.high;
    };
    LongPrototype.getHighBitsUnsigned = function getHighBitsUnsigned() {
      return this.high >>> 0;
    };
    LongPrototype.getLowBits = function getLowBits() {
      return this.low;
    };
    LongPrototype.getLowBitsUnsigned = function getLowBitsUnsigned() {
      return this.low >>> 0;
    };
    LongPrototype.getNumBitsAbs = function getNumBitsAbs() {
      if (this.isNegative())
        return this.eq(MIN_VALUE) ? 64 : this.neg().getNumBitsAbs();
      var val = this.high != 0 ? this.high : this.low;
      for (var bit = 31; bit > 0; bit--)
        if ((val & 1 << bit) != 0)
          break;
      return this.high != 0 ? bit + 33 : bit + 1;
    };
    LongPrototype.isZero = function isZero() {
      return this.high === 0 && this.low === 0;
    };
    LongPrototype.eqz = LongPrototype.isZero;
    LongPrototype.isNegative = function isNegative() {
      return !this.unsigned && this.high < 0;
    };
    LongPrototype.isPositive = function isPositive() {
      return this.unsigned || this.high >= 0;
    };
    LongPrototype.isOdd = function isOdd() {
      return (this.low & 1) === 1;
    };
    LongPrototype.isEven = function isEven() {
      return (this.low & 1) === 0;
    };
    LongPrototype.equals = function equals(other) {
      if (!isLong(other))
        other = fromValue(other);
      if (this.unsigned !== other.unsigned && this.high >>> 31 === 1 && other.high >>> 31 === 1)
        return false;
      return this.high === other.high && this.low === other.low;
    };
    LongPrototype.eq = LongPrototype.equals;
    LongPrototype.notEquals = function notEquals(other) {
      return !this.eq(
        /* validates */
        other
      );
    };
    LongPrototype.neq = LongPrototype.notEquals;
    LongPrototype.ne = LongPrototype.notEquals;
    LongPrototype.lessThan = function lessThan3(other) {
      return this.comp(
        /* validates */
        other
      ) < 0;
    };
    LongPrototype.lt = LongPrototype.lessThan;
    LongPrototype.lessThanOrEqual = function lessThanOrEqual(other) {
      return this.comp(
        /* validates */
        other
      ) <= 0;
    };
    LongPrototype.lte = LongPrototype.lessThanOrEqual;
    LongPrototype.le = LongPrototype.lessThanOrEqual;
    LongPrototype.greaterThan = function greaterThan(other) {
      return this.comp(
        /* validates */
        other
      ) > 0;
    };
    LongPrototype.gt = LongPrototype.greaterThan;
    LongPrototype.greaterThanOrEqual = function greaterThanOrEqual(other) {
      return this.comp(
        /* validates */
        other
      ) >= 0;
    };
    LongPrototype.gte = LongPrototype.greaterThanOrEqual;
    LongPrototype.ge = LongPrototype.greaterThanOrEqual;
    LongPrototype.compare = function compare(other) {
      if (!isLong(other))
        other = fromValue(other);
      if (this.eq(other))
        return 0;
      var thisNeg = this.isNegative(), otherNeg = other.isNegative();
      if (thisNeg && !otherNeg)
        return -1;
      if (!thisNeg && otherNeg)
        return 1;
      if (!this.unsigned)
        return this.sub(other).isNegative() ? -1 : 1;
      return other.high >>> 0 > this.high >>> 0 || other.high === this.high && other.low >>> 0 > this.low >>> 0 ? -1 : 1;
    };
    LongPrototype.comp = LongPrototype.compare;
    LongPrototype.negate = function negate() {
      if (!this.unsigned && this.eq(MIN_VALUE))
        return MIN_VALUE;
      return this.not().add(ONE);
    };
    LongPrototype.neg = LongPrototype.negate;
    LongPrototype.add = function add(addend) {
      if (!isLong(addend))
        addend = fromValue(addend);
      var a48 = this.high >>> 16;
      var a32 = this.high & 65535;
      var a16 = this.low >>> 16;
      var a00 = this.low & 65535;
      var b48 = addend.high >>> 16;
      var b32 = addend.high & 65535;
      var b16 = addend.low >>> 16;
      var b00 = addend.low & 65535;
      var c48 = 0, c32 = 0, c16 = 0, c00 = 0;
      c00 += a00 + b00;
      c16 += c00 >>> 16;
      c00 &= 65535;
      c16 += a16 + b16;
      c32 += c16 >>> 16;
      c16 &= 65535;
      c32 += a32 + b32;
      c48 += c32 >>> 16;
      c32 &= 65535;
      c48 += a48 + b48;
      c48 &= 65535;
      return fromBits(c16 << 16 | c00, c48 << 16 | c32, this.unsigned);
    };
    LongPrototype.subtract = function subtract(subtrahend) {
      if (!isLong(subtrahend))
        subtrahend = fromValue(subtrahend);
      return this.add(subtrahend.neg());
    };
    LongPrototype.sub = LongPrototype.subtract;
    LongPrototype.multiply = function multiply(multiplier) {
      if (this.isZero())
        return ZERO;
      if (!isLong(multiplier))
        multiplier = fromValue(multiplier);
      if (wasm) {
        var low = wasm.mul(
          this.low,
          this.high,
          multiplier.low,
          multiplier.high
        );
        return fromBits(low, wasm.get_high(), this.unsigned);
      }
      if (multiplier.isZero())
        return ZERO;
      if (this.eq(MIN_VALUE))
        return multiplier.isOdd() ? MIN_VALUE : ZERO;
      if (multiplier.eq(MIN_VALUE))
        return this.isOdd() ? MIN_VALUE : ZERO;
      if (this.isNegative()) {
        if (multiplier.isNegative())
          return this.neg().mul(multiplier.neg());
        else
          return this.neg().mul(multiplier).neg();
      } else if (multiplier.isNegative())
        return this.mul(multiplier.neg()).neg();
      if (this.lt(TWO_PWR_24) && multiplier.lt(TWO_PWR_24))
        return fromNumber(this.toNumber() * multiplier.toNumber(), this.unsigned);
      var a48 = this.high >>> 16;
      var a32 = this.high & 65535;
      var a16 = this.low >>> 16;
      var a00 = this.low & 65535;
      var b48 = multiplier.high >>> 16;
      var b32 = multiplier.high & 65535;
      var b16 = multiplier.low >>> 16;
      var b00 = multiplier.low & 65535;
      var c48 = 0, c32 = 0, c16 = 0, c00 = 0;
      c00 += a00 * b00;
      c16 += c00 >>> 16;
      c00 &= 65535;
      c16 += a16 * b00;
      c32 += c16 >>> 16;
      c16 &= 65535;
      c16 += a00 * b16;
      c32 += c16 >>> 16;
      c16 &= 65535;
      c32 += a32 * b00;
      c48 += c32 >>> 16;
      c32 &= 65535;
      c32 += a16 * b16;
      c48 += c32 >>> 16;
      c32 &= 65535;
      c32 += a00 * b32;
      c48 += c32 >>> 16;
      c32 &= 65535;
      c48 += a48 * b00 + a32 * b16 + a16 * b32 + a00 * b48;
      c48 &= 65535;
      return fromBits(c16 << 16 | c00, c48 << 16 | c32, this.unsigned);
    };
    LongPrototype.mul = LongPrototype.multiply;
    LongPrototype.divide = function divide(divisor) {
      if (!isLong(divisor))
        divisor = fromValue(divisor);
      if (divisor.isZero())
        throw Error("division by zero");
      if (wasm) {
        if (!this.unsigned && this.high === -2147483648 && divisor.low === -1 && divisor.high === -1) {
          return this;
        }
        var low = (this.unsigned ? wasm.div_u : wasm.div_s)(
          this.low,
          this.high,
          divisor.low,
          divisor.high
        );
        return fromBits(low, wasm.get_high(), this.unsigned);
      }
      if (this.isZero())
        return this.unsigned ? UZERO : ZERO;
      var approx, rem, res;
      if (!this.unsigned) {
        if (this.eq(MIN_VALUE)) {
          if (divisor.eq(ONE) || divisor.eq(NEG_ONE))
            return MIN_VALUE;
          else if (divisor.eq(MIN_VALUE))
            return ONE;
          else {
            var halfThis = this.shr(1);
            approx = halfThis.div(divisor).shl(1);
            if (approx.eq(ZERO)) {
              return divisor.isNegative() ? ONE : NEG_ONE;
            } else {
              rem = this.sub(divisor.mul(approx));
              res = approx.add(rem.div(divisor));
              return res;
            }
          }
        } else if (divisor.eq(MIN_VALUE))
          return this.unsigned ? UZERO : ZERO;
        if (this.isNegative()) {
          if (divisor.isNegative())
            return this.neg().div(divisor.neg());
          return this.neg().div(divisor).neg();
        } else if (divisor.isNegative())
          return this.div(divisor.neg()).neg();
        res = ZERO;
      } else {
        if (!divisor.unsigned)
          divisor = divisor.toUnsigned();
        if (divisor.gt(this))
          return UZERO;
        if (divisor.gt(this.shru(1)))
          return UONE;
        res = UZERO;
      }
      rem = this;
      while (rem.gte(divisor)) {
        approx = Math.max(1, Math.floor(rem.toNumber() / divisor.toNumber()));
        var log22 = Math.ceil(Math.log(approx) / Math.LN2), delta = log22 <= 48 ? 1 : pow_dbl(2, log22 - 48), approxRes = fromNumber(approx), approxRem = approxRes.mul(divisor);
        while (approxRem.isNegative() || approxRem.gt(rem)) {
          approx -= delta;
          approxRes = fromNumber(approx, this.unsigned);
          approxRem = approxRes.mul(divisor);
        }
        if (approxRes.isZero())
          approxRes = ONE;
        res = res.add(approxRes);
        rem = rem.sub(approxRem);
      }
      return res;
    };
    LongPrototype.div = LongPrototype.divide;
    LongPrototype.modulo = function modulo(divisor) {
      if (!isLong(divisor))
        divisor = fromValue(divisor);
      if (wasm) {
        var low = (this.unsigned ? wasm.rem_u : wasm.rem_s)(
          this.low,
          this.high,
          divisor.low,
          divisor.high
        );
        return fromBits(low, wasm.get_high(), this.unsigned);
      }
      return this.sub(this.div(divisor).mul(divisor));
    };
    LongPrototype.mod = LongPrototype.modulo;
    LongPrototype.rem = LongPrototype.modulo;
    LongPrototype.not = function not() {
      return fromBits(~this.low, ~this.high, this.unsigned);
    };
    LongPrototype.and = function and(other) {
      if (!isLong(other))
        other = fromValue(other);
      return fromBits(this.low & other.low, this.high & other.high, this.unsigned);
    };
    LongPrototype.or = function or(other) {
      if (!isLong(other))
        other = fromValue(other);
      return fromBits(this.low | other.low, this.high | other.high, this.unsigned);
    };
    LongPrototype.xor = function xor(other) {
      if (!isLong(other))
        other = fromValue(other);
      return fromBits(this.low ^ other.low, this.high ^ other.high, this.unsigned);
    };
    LongPrototype.shiftLeft = function shiftLeft(numBits) {
      if (isLong(numBits))
        numBits = numBits.toInt();
      if ((numBits &= 63) === 0)
        return this;
      else if (numBits < 32)
        return fromBits(this.low << numBits, this.high << numBits | this.low >>> 32 - numBits, this.unsigned);
      else
        return fromBits(0, this.low << numBits - 32, this.unsigned);
    };
    LongPrototype.shl = LongPrototype.shiftLeft;
    LongPrototype.shiftRight = function shiftRight(numBits) {
      if (isLong(numBits))
        numBits = numBits.toInt();
      if ((numBits &= 63) === 0)
        return this;
      else if (numBits < 32)
        return fromBits(this.low >>> numBits | this.high << 32 - numBits, this.high >> numBits, this.unsigned);
      else
        return fromBits(this.high >> numBits - 32, this.high >= 0 ? 0 : -1, this.unsigned);
    };
    LongPrototype.shr = LongPrototype.shiftRight;
    LongPrototype.shiftRightUnsigned = function shiftRightUnsigned(numBits) {
      if (isLong(numBits))
        numBits = numBits.toInt();
      numBits &= 63;
      if (numBits === 0)
        return this;
      else {
        var high = this.high;
        if (numBits < 32) {
          var low = this.low;
          return fromBits(low >>> numBits | high << 32 - numBits, high >>> numBits, this.unsigned);
        } else if (numBits === 32)
          return fromBits(high, 0, this.unsigned);
        else
          return fromBits(high >>> numBits - 32, 0, this.unsigned);
      }
    };
    LongPrototype.shru = LongPrototype.shiftRightUnsigned;
    LongPrototype.shr_u = LongPrototype.shiftRightUnsigned;
    LongPrototype.toSigned = function toSigned() {
      if (!this.unsigned)
        return this;
      return fromBits(this.low, this.high, false);
    };
    LongPrototype.toUnsigned = function toUnsigned() {
      if (this.unsigned)
        return this;
      return fromBits(this.low, this.high, true);
    };
    LongPrototype.toBytes = function toBytes(le) {
      return le ? this.toBytesLE() : this.toBytesBE();
    };
    LongPrototype.toBytesLE = function toBytesLE() {
      var hi = this.high, lo = this.low;
      return [
        lo & 255,
        lo >>> 8 & 255,
        lo >>> 16 & 255,
        lo >>> 24,
        hi & 255,
        hi >>> 8 & 255,
        hi >>> 16 & 255,
        hi >>> 24
      ];
    };
    LongPrototype.toBytesBE = function toBytesBE() {
      var hi = this.high, lo = this.low;
      return [
        hi >>> 24,
        hi >>> 16 & 255,
        hi >>> 8 & 255,
        hi & 255,
        lo >>> 24,
        lo >>> 16 & 255,
        lo >>> 8 & 255,
        lo & 255
      ];
    };
    Long3.fromBytes = function fromBytes(bytes, unsigned, le) {
      return le ? Long3.fromBytesLE(bytes, unsigned) : Long3.fromBytesBE(bytes, unsigned);
    };
    Long3.fromBytesLE = function fromBytesLE(bytes, unsigned) {
      return new Long3(
        bytes[0] | bytes[1] << 8 | bytes[2] << 16 | bytes[3] << 24,
        bytes[4] | bytes[5] << 8 | bytes[6] << 16 | bytes[7] << 24,
        unsigned
      );
    };
    Long3.fromBytesBE = function fromBytesBE(bytes, unsigned) {
      return new Long3(
        bytes[4] << 24 | bytes[5] << 16 | bytes[6] << 8 | bytes[7],
        bytes[0] << 24 | bytes[1] << 16 | bytes[2] << 8 | bytes[3],
        unsigned
      );
    };
  }
});

// node_modules/base64-js/index.js
var require_base64_js = __commonJS({
  "node_modules/base64-js/index.js"(exports) {
    "use strict";
    exports.byteLength = byteLength;
    exports.toByteArray = toByteArray2;
    exports.fromByteArray = fromByteArray2;
    var lookup = [];
    var revLookup = [];
    var Arr = typeof Uint8Array !== "undefined" ? Uint8Array : Array;
    var code3 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
    for (i3 = 0, len = code3.length; i3 < len; ++i3) {
      lookup[i3] = code3[i3];
      revLookup[code3.charCodeAt(i3)] = i3;
    }
    var i3;
    var len;
    revLookup["-".charCodeAt(0)] = 62;
    revLookup["_".charCodeAt(0)] = 63;
    function getLens(b64) {
      var len2 = b64.length;
      if (len2 % 4 > 0) {
        throw new Error("Invalid string. Length must be a multiple of 4");
      }
      var validLen = b64.indexOf("=");
      if (validLen === -1)
        validLen = len2;
      var placeHoldersLen = validLen === len2 ? 0 : 4 - validLen % 4;
      return [validLen, placeHoldersLen];
    }
    function byteLength(b64) {
      var lens = getLens(b64);
      var validLen = lens[0];
      var placeHoldersLen = lens[1];
      return (validLen + placeHoldersLen) * 3 / 4 - placeHoldersLen;
    }
    function _byteLength(b64, validLen, placeHoldersLen) {
      return (validLen + placeHoldersLen) * 3 / 4 - placeHoldersLen;
    }
    function toByteArray2(b64) {
      var tmp;
      var lens = getLens(b64);
      var validLen = lens[0];
      var placeHoldersLen = lens[1];
      var arr = new Arr(_byteLength(b64, validLen, placeHoldersLen));
      var curByte = 0;
      var len2 = placeHoldersLen > 0 ? validLen - 4 : validLen;
      var i4;
      for (i4 = 0; i4 < len2; i4 += 4) {
        tmp = revLookup[b64.charCodeAt(i4)] << 18 | revLookup[b64.charCodeAt(i4 + 1)] << 12 | revLookup[b64.charCodeAt(i4 + 2)] << 6 | revLookup[b64.charCodeAt(i4 + 3)];
        arr[curByte++] = tmp >> 16 & 255;
        arr[curByte++] = tmp >> 8 & 255;
        arr[curByte++] = tmp & 255;
      }
      if (placeHoldersLen === 2) {
        tmp = revLookup[b64.charCodeAt(i4)] << 2 | revLookup[b64.charCodeAt(i4 + 1)] >> 4;
        arr[curByte++] = tmp & 255;
      }
      if (placeHoldersLen === 1) {
        tmp = revLookup[b64.charCodeAt(i4)] << 10 | revLookup[b64.charCodeAt(i4 + 1)] << 4 | revLookup[b64.charCodeAt(i4 + 2)] >> 2;
        arr[curByte++] = tmp >> 8 & 255;
        arr[curByte++] = tmp & 255;
      }
      return arr;
    }
    function tripletToBase64(num) {
      return lookup[num >> 18 & 63] + lookup[num >> 12 & 63] + lookup[num >> 6 & 63] + lookup[num & 63];
    }
    function encodeChunk(uint8, start, end) {
      var tmp;
      var output = [];
      for (var i4 = start; i4 < end; i4 += 3) {
        tmp = (uint8[i4] << 16 & 16711680) + (uint8[i4 + 1] << 8 & 65280) + (uint8[i4 + 2] & 255);
        output.push(tripletToBase64(tmp));
      }
      return output.join("");
    }
    function fromByteArray2(uint8) {
      var tmp;
      var len2 = uint8.length;
      var extraBytes = len2 % 3;
      var parts = [];
      var maxChunkLength = 16383;
      for (var i4 = 0, len22 = len2 - extraBytes; i4 < len22; i4 += maxChunkLength) {
        parts.push(encodeChunk(uint8, i4, i4 + maxChunkLength > len22 ? len22 : i4 + maxChunkLength));
      }
      if (extraBytes === 1) {
        tmp = uint8[len2 - 1];
        parts.push(
          lookup[tmp >> 2] + lookup[tmp << 4 & 63] + "=="
        );
      } else if (extraBytes === 2) {
        tmp = (uint8[len2 - 2] << 8) + uint8[len2 - 1];
        parts.push(
          lookup[tmp >> 10] + lookup[tmp >> 4 & 63] + lookup[tmp << 2 & 63] + "="
        );
      }
      return parts.join("");
    }
  }
});

// node_modules/ieee754/index.js
var require_ieee754 = __commonJS({
  "node_modules/ieee754/index.js"(exports) {
    exports.read = function(buffer3, offset, isLE, mLen, nBytes) {
      var e, m;
      var eLen = nBytes * 8 - mLen - 1;
      var eMax = (1 << eLen) - 1;
      var eBias = eMax >> 1;
      var nBits = -7;
      var i3 = isLE ? nBytes - 1 : 0;
      var d = isLE ? -1 : 1;
      var s = buffer3[offset + i3];
      i3 += d;
      e = s & (1 << -nBits) - 1;
      s >>= -nBits;
      nBits += eLen;
      for (; nBits > 0; e = e * 256 + buffer3[offset + i3], i3 += d, nBits -= 8) {
      }
      m = e & (1 << -nBits) - 1;
      e >>= -nBits;
      nBits += mLen;
      for (; nBits > 0; m = m * 256 + buffer3[offset + i3], i3 += d, nBits -= 8) {
      }
      if (e === 0) {
        e = 1 - eBias;
      } else if (e === eMax) {
        return m ? NaN : (s ? -1 : 1) * Infinity;
      } else {
        m = m + Math.pow(2, mLen);
        e = e - eBias;
      }
      return (s ? -1 : 1) * m * Math.pow(2, e - mLen);
    };
    exports.write = function(buffer3, value2, offset, isLE, mLen, nBytes) {
      var e, m, c;
      var eLen = nBytes * 8 - mLen - 1;
      var eMax = (1 << eLen) - 1;
      var eBias = eMax >> 1;
      var rt = mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0;
      var i3 = isLE ? 0 : nBytes - 1;
      var d = isLE ? 1 : -1;
      var s = value2 < 0 || value2 === 0 && 1 / value2 < 0 ? 1 : 0;
      value2 = Math.abs(value2);
      if (isNaN(value2) || value2 === Infinity) {
        m = isNaN(value2) ? 1 : 0;
        e = eMax;
      } else {
        e = Math.floor(Math.log(value2) / Math.LN2);
        if (value2 * (c = Math.pow(2, -e)) < 1) {
          e--;
          c *= 2;
        }
        if (e + eBias >= 1) {
          value2 += rt / c;
        } else {
          value2 += rt * Math.pow(2, 1 - eBias);
        }
        if (value2 * c >= 2) {
          e++;
          c /= 2;
        }
        if (e + eBias >= eMax) {
          m = 0;
          e = eMax;
        } else if (e + eBias >= 1) {
          m = (value2 * c - 1) * Math.pow(2, mLen);
          e = e + eBias;
        } else {
          m = value2 * Math.pow(2, eBias - 1) * Math.pow(2, mLen);
          e = 0;
        }
      }
      for (; mLen >= 8; buffer3[offset + i3] = m & 255, i3 += d, m /= 256, mLen -= 8) {
      }
      e = e << mLen | m;
      eLen += mLen;
      for (; eLen > 0; buffer3[offset + i3] = e & 255, i3 += d, e /= 256, eLen -= 8) {
      }
      buffer3[offset + i3 - d] |= s * 128;
    };
  }
});

// node_modules/buffer/index.js
var require_buffer = __commonJS({
  "node_modules/buffer/index.js"(exports) {
    "use strict";
    var base64 = require_base64_js();
    var ieee754 = require_ieee754();
    var customInspectSymbol = typeof Symbol === "function" && typeof Symbol["for"] === "function" ? Symbol["for"]("nodejs.util.inspect.custom") : null;
    exports.Buffer = Buffer2;
    exports.SlowBuffer = SlowBuffer;
    exports.INSPECT_MAX_BYTES = 50;
    var K_MAX_LENGTH = 2147483647;
    exports.kMaxLength = K_MAX_LENGTH;
    Buffer2.TYPED_ARRAY_SUPPORT = typedArraySupport();
    if (!Buffer2.TYPED_ARRAY_SUPPORT && typeof console !== "undefined" && typeof console.error === "function") {
      console.error(
        "This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."
      );
    }
    function typedArraySupport() {
      try {
        var arr = new Uint8Array(1);
        var proto = { foo: function() {
          return 42;
        } };
        Object.setPrototypeOf(proto, Uint8Array.prototype);
        Object.setPrototypeOf(arr, proto);
        return arr.foo() === 42;
      } catch (e) {
        return false;
      }
    }
    Object.defineProperty(Buffer2.prototype, "parent", {
      enumerable: true,
      get: function() {
        if (!Buffer2.isBuffer(this))
          return void 0;
        return this.buffer;
      }
    });
    Object.defineProperty(Buffer2.prototype, "offset", {
      enumerable: true,
      get: function() {
        if (!Buffer2.isBuffer(this))
          return void 0;
        return this.byteOffset;
      }
    });
    function createBuffer(length) {
      if (length > K_MAX_LENGTH) {
        throw new RangeError('The value "' + length + '" is invalid for option "size"');
      }
      var buf = new Uint8Array(length);
      Object.setPrototypeOf(buf, Buffer2.prototype);
      return buf;
    }
    function Buffer2(arg, encodingOrOffset, length) {
      if (typeof arg === "number") {
        if (typeof encodingOrOffset === "string") {
          throw new TypeError(
            'The "string" argument must be of type string. Received type number'
          );
        }
        return allocUnsafe(arg);
      }
      return from(arg, encodingOrOffset, length);
    }
    Buffer2.poolSize = 8192;
    function from(value2, encodingOrOffset, length) {
      if (typeof value2 === "string") {
        return fromString(value2, encodingOrOffset);
      }
      if (ArrayBuffer.isView(value2)) {
        return fromArrayView(value2);
      }
      if (value2 == null) {
        throw new TypeError(
          "The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof value2
        );
      }
      if (isInstance(value2, ArrayBuffer) || value2 && isInstance(value2.buffer, ArrayBuffer)) {
        return fromArrayBuffer(value2, encodingOrOffset, length);
      }
      if (typeof SharedArrayBuffer !== "undefined" && (isInstance(value2, SharedArrayBuffer) || value2 && isInstance(value2.buffer, SharedArrayBuffer))) {
        return fromArrayBuffer(value2, encodingOrOffset, length);
      }
      if (typeof value2 === "number") {
        throw new TypeError(
          'The "value" argument must not be of type number. Received type number'
        );
      }
      var valueOf = value2.valueOf && value2.valueOf();
      if (valueOf != null && valueOf !== value2) {
        return Buffer2.from(valueOf, encodingOrOffset, length);
      }
      var b = fromObject(value2);
      if (b)
        return b;
      if (typeof Symbol !== "undefined" && Symbol.toPrimitive != null && typeof value2[Symbol.toPrimitive] === "function") {
        return Buffer2.from(
          value2[Symbol.toPrimitive]("string"),
          encodingOrOffset,
          length
        );
      }
      throw new TypeError(
        "The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof value2
      );
    }
    Buffer2.from = function(value2, encodingOrOffset, length) {
      return from(value2, encodingOrOffset, length);
    };
    Object.setPrototypeOf(Buffer2.prototype, Uint8Array.prototype);
    Object.setPrototypeOf(Buffer2, Uint8Array);
    function assertSize(size) {
      if (typeof size !== "number") {
        throw new TypeError('"size" argument must be of type number');
      } else if (size < 0) {
        throw new RangeError('The value "' + size + '" is invalid for option "size"');
      }
    }
    function alloc(size, fill, encoding) {
      assertSize(size);
      if (size <= 0) {
        return createBuffer(size);
      }
      if (fill !== void 0) {
        return typeof encoding === "string" ? createBuffer(size).fill(fill, encoding) : createBuffer(size).fill(fill);
      }
      return createBuffer(size);
    }
    Buffer2.alloc = function(size, fill, encoding) {
      return alloc(size, fill, encoding);
    };
    function allocUnsafe(size) {
      assertSize(size);
      return createBuffer(size < 0 ? 0 : checked(size) | 0);
    }
    Buffer2.allocUnsafe = function(size) {
      return allocUnsafe(size);
    };
    Buffer2.allocUnsafeSlow = function(size) {
      return allocUnsafe(size);
    };
    function fromString(string, encoding) {
      if (typeof encoding !== "string" || encoding === "") {
        encoding = "utf8";
      }
      if (!Buffer2.isEncoding(encoding)) {
        throw new TypeError("Unknown encoding: " + encoding);
      }
      var length = byteLength(string, encoding) | 0;
      var buf = createBuffer(length);
      var actual = buf.write(string, encoding);
      if (actual !== length) {
        buf = buf.slice(0, actual);
      }
      return buf;
    }
    function fromArrayLike(array) {
      var length = array.length < 0 ? 0 : checked(array.length) | 0;
      var buf = createBuffer(length);
      for (var i3 = 0; i3 < length; i3 += 1) {
        buf[i3] = array[i3] & 255;
      }
      return buf;
    }
    function fromArrayView(arrayView) {
      if (isInstance(arrayView, Uint8Array)) {
        var copy = new Uint8Array(arrayView);
        return fromArrayBuffer(copy.buffer, copy.byteOffset, copy.byteLength);
      }
      return fromArrayLike(arrayView);
    }
    function fromArrayBuffer(array, byteOffset, length) {
      if (byteOffset < 0 || array.byteLength < byteOffset) {
        throw new RangeError('"offset" is outside of buffer bounds');
      }
      if (array.byteLength < byteOffset + (length || 0)) {
        throw new RangeError('"length" is outside of buffer bounds');
      }
      var buf;
      if (byteOffset === void 0 && length === void 0) {
        buf = new Uint8Array(array);
      } else if (length === void 0) {
        buf = new Uint8Array(array, byteOffset);
      } else {
        buf = new Uint8Array(array, byteOffset, length);
      }
      Object.setPrototypeOf(buf, Buffer2.prototype);
      return buf;
    }
    function fromObject(obj) {
      if (Buffer2.isBuffer(obj)) {
        var len = checked(obj.length) | 0;
        var buf = createBuffer(len);
        if (buf.length === 0) {
          return buf;
        }
        obj.copy(buf, 0, 0, len);
        return buf;
      }
      if (obj.length !== void 0) {
        if (typeof obj.length !== "number" || numberIsNaN(obj.length)) {
          return createBuffer(0);
        }
        return fromArrayLike(obj);
      }
      if (obj.type === "Buffer" && Array.isArray(obj.data)) {
        return fromArrayLike(obj.data);
      }
    }
    function checked(length) {
      if (length >= K_MAX_LENGTH) {
        throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + K_MAX_LENGTH.toString(16) + " bytes");
      }
      return length | 0;
    }
    function SlowBuffer(length) {
      if (+length != length) {
        length = 0;
      }
      return Buffer2.alloc(+length);
    }
    Buffer2.isBuffer = function isBuffer3(b) {
      return b != null && b._isBuffer === true && b !== Buffer2.prototype;
    };
    Buffer2.compare = function compare(a, b) {
      if (isInstance(a, Uint8Array))
        a = Buffer2.from(a, a.offset, a.byteLength);
      if (isInstance(b, Uint8Array))
        b = Buffer2.from(b, b.offset, b.byteLength);
      if (!Buffer2.isBuffer(a) || !Buffer2.isBuffer(b)) {
        throw new TypeError(
          'The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array'
        );
      }
      if (a === b)
        return 0;
      var x = a.length;
      var y = b.length;
      for (var i3 = 0, len = Math.min(x, y); i3 < len; ++i3) {
        if (a[i3] !== b[i3]) {
          x = a[i3];
          y = b[i3];
          break;
        }
      }
      if (x < y)
        return -1;
      if (y < x)
        return 1;
      return 0;
    };
    Buffer2.isEncoding = function isEncoding(encoding) {
      switch (String(encoding).toLowerCase()) {
        case "hex":
        case "utf8":
        case "utf-8":
        case "ascii":
        case "latin1":
        case "binary":
        case "base64":
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return true;
        default:
          return false;
      }
    };
    Buffer2.concat = function concat(list, length) {
      if (!Array.isArray(list)) {
        throw new TypeError('"list" argument must be an Array of Buffers');
      }
      if (list.length === 0) {
        return Buffer2.alloc(0);
      }
      var i3;
      if (length === void 0) {
        length = 0;
        for (i3 = 0; i3 < list.length; ++i3) {
          length += list[i3].length;
        }
      }
      var buffer3 = Buffer2.allocUnsafe(length);
      var pos = 0;
      for (i3 = 0; i3 < list.length; ++i3) {
        var buf = list[i3];
        if (isInstance(buf, Uint8Array)) {
          if (pos + buf.length > buffer3.length) {
            Buffer2.from(buf).copy(buffer3, pos);
          } else {
            Uint8Array.prototype.set.call(
              buffer3,
              buf,
              pos
            );
          }
        } else if (!Buffer2.isBuffer(buf)) {
          throw new TypeError('"list" argument must be an Array of Buffers');
        } else {
          buf.copy(buffer3, pos);
        }
        pos += buf.length;
      }
      return buffer3;
    };
    function byteLength(string, encoding) {
      if (Buffer2.isBuffer(string)) {
        return string.length;
      }
      if (ArrayBuffer.isView(string) || isInstance(string, ArrayBuffer)) {
        return string.byteLength;
      }
      if (typeof string !== "string") {
        throw new TypeError(
          'The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' + typeof string
        );
      }
      var len = string.length;
      var mustMatch = arguments.length > 2 && arguments[2] === true;
      if (!mustMatch && len === 0)
        return 0;
      var loweredCase = false;
      for (; ; ) {
        switch (encoding) {
          case "ascii":
          case "latin1":
          case "binary":
            return len;
          case "utf8":
          case "utf-8":
            return utf8ToBytes2(string).length;
          case "ucs2":
          case "ucs-2":
          case "utf16le":
          case "utf-16le":
            return len * 2;
          case "hex":
            return len >>> 1;
          case "base64":
            return base64ToBytes(string).length;
          default:
            if (loweredCase) {
              return mustMatch ? -1 : utf8ToBytes2(string).length;
            }
            encoding = ("" + encoding).toLowerCase();
            loweredCase = true;
        }
      }
    }
    Buffer2.byteLength = byteLength;
    function slowToString(encoding, start, end) {
      var loweredCase = false;
      if (start === void 0 || start < 0) {
        start = 0;
      }
      if (start > this.length) {
        return "";
      }
      if (end === void 0 || end > this.length) {
        end = this.length;
      }
      if (end <= 0) {
        return "";
      }
      end >>>= 0;
      start >>>= 0;
      if (end <= start) {
        return "";
      }
      if (!encoding)
        encoding = "utf8";
      while (true) {
        switch (encoding) {
          case "hex":
            return hexSlice(this, start, end);
          case "utf8":
          case "utf-8":
            return utf8Slice2(this, start, end);
          case "ascii":
            return asciiSlice(this, start, end);
          case "latin1":
          case "binary":
            return latin1Slice(this, start, end);
          case "base64":
            return base64Slice(this, start, end);
          case "ucs2":
          case "ucs-2":
          case "utf16le":
          case "utf-16le":
            return utf16leSlice(this, start, end);
          default:
            if (loweredCase)
              throw new TypeError("Unknown encoding: " + encoding);
            encoding = (encoding + "").toLowerCase();
            loweredCase = true;
        }
      }
    }
    Buffer2.prototype._isBuffer = true;
    function swap(b, n, m) {
      var i3 = b[n];
      b[n] = b[m];
      b[m] = i3;
    }
    Buffer2.prototype.swap16 = function swap16() {
      var len = this.length;
      if (len % 2 !== 0) {
        throw new RangeError("Buffer size must be a multiple of 16-bits");
      }
      for (var i3 = 0; i3 < len; i3 += 2) {
        swap(this, i3, i3 + 1);
      }
      return this;
    };
    Buffer2.prototype.swap32 = function swap32() {
      var len = this.length;
      if (len % 4 !== 0) {
        throw new RangeError("Buffer size must be a multiple of 32-bits");
      }
      for (var i3 = 0; i3 < len; i3 += 4) {
        swap(this, i3, i3 + 3);
        swap(this, i3 + 1, i3 + 2);
      }
      return this;
    };
    Buffer2.prototype.swap64 = function swap64() {
      var len = this.length;
      if (len % 8 !== 0) {
        throw new RangeError("Buffer size must be a multiple of 64-bits");
      }
      for (var i3 = 0; i3 < len; i3 += 8) {
        swap(this, i3, i3 + 7);
        swap(this, i3 + 1, i3 + 6);
        swap(this, i3 + 2, i3 + 5);
        swap(this, i3 + 3, i3 + 4);
      }
      return this;
    };
    Buffer2.prototype.toString = function toString() {
      var length = this.length;
      if (length === 0)
        return "";
      if (arguments.length === 0)
        return utf8Slice2(this, 0, length);
      return slowToString.apply(this, arguments);
    };
    Buffer2.prototype.toLocaleString = Buffer2.prototype.toString;
    Buffer2.prototype.equals = function equals(b) {
      if (!Buffer2.isBuffer(b))
        throw new TypeError("Argument must be a Buffer");
      if (this === b)
        return true;
      return Buffer2.compare(this, b) === 0;
    };
    Buffer2.prototype.inspect = function inspect3() {
      var str = "";
      var max = exports.INSPECT_MAX_BYTES;
      str = this.toString("hex", 0, max).replace(/(.{2})/g, "$1 ").trim();
      if (this.length > max)
        str += " ... ";
      return "<Buffer " + str + ">";
    };
    if (customInspectSymbol) {
      Buffer2.prototype[customInspectSymbol] = Buffer2.prototype.inspect;
    }
    Buffer2.prototype.compare = function compare(target, start, end, thisStart, thisEnd) {
      if (isInstance(target, Uint8Array)) {
        target = Buffer2.from(target, target.offset, target.byteLength);
      }
      if (!Buffer2.isBuffer(target)) {
        throw new TypeError(
          'The "target" argument must be one of type Buffer or Uint8Array. Received type ' + typeof target
        );
      }
      if (start === void 0) {
        start = 0;
      }
      if (end === void 0) {
        end = target ? target.length : 0;
      }
      if (thisStart === void 0) {
        thisStart = 0;
      }
      if (thisEnd === void 0) {
        thisEnd = this.length;
      }
      if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) {
        throw new RangeError("out of range index");
      }
      if (thisStart >= thisEnd && start >= end) {
        return 0;
      }
      if (thisStart >= thisEnd) {
        return -1;
      }
      if (start >= end) {
        return 1;
      }
      start >>>= 0;
      end >>>= 0;
      thisStart >>>= 0;
      thisEnd >>>= 0;
      if (this === target)
        return 0;
      var x = thisEnd - thisStart;
      var y = end - start;
      var len = Math.min(x, y);
      var thisCopy = this.slice(thisStart, thisEnd);
      var targetCopy = target.slice(start, end);
      for (var i3 = 0; i3 < len; ++i3) {
        if (thisCopy[i3] !== targetCopy[i3]) {
          x = thisCopy[i3];
          y = targetCopy[i3];
          break;
        }
      }
      if (x < y)
        return -1;
      if (y < x)
        return 1;
      return 0;
    };
    function bidirectionalIndexOf(buffer3, val, byteOffset, encoding, dir) {
      if (buffer3.length === 0)
        return -1;
      if (typeof byteOffset === "string") {
        encoding = byteOffset;
        byteOffset = 0;
      } else if (byteOffset > 2147483647) {
        byteOffset = 2147483647;
      } else if (byteOffset < -2147483648) {
        byteOffset = -2147483648;
      }
      byteOffset = +byteOffset;
      if (numberIsNaN(byteOffset)) {
        byteOffset = dir ? 0 : buffer3.length - 1;
      }
      if (byteOffset < 0)
        byteOffset = buffer3.length + byteOffset;
      if (byteOffset >= buffer3.length) {
        if (dir)
          return -1;
        else
          byteOffset = buffer3.length - 1;
      } else if (byteOffset < 0) {
        if (dir)
          byteOffset = 0;
        else
          return -1;
      }
      if (typeof val === "string") {
        val = Buffer2.from(val, encoding);
      }
      if (Buffer2.isBuffer(val)) {
        if (val.length === 0) {
          return -1;
        }
        return arrayIndexOf(buffer3, val, byteOffset, encoding, dir);
      } else if (typeof val === "number") {
        val = val & 255;
        if (typeof Uint8Array.prototype.indexOf === "function") {
          if (dir) {
            return Uint8Array.prototype.indexOf.call(buffer3, val, byteOffset);
          } else {
            return Uint8Array.prototype.lastIndexOf.call(buffer3, val, byteOffset);
          }
        }
        return arrayIndexOf(buffer3, [val], byteOffset, encoding, dir);
      }
      throw new TypeError("val must be string, number or Buffer");
    }
    function arrayIndexOf(arr, val, byteOffset, encoding, dir) {
      var indexSize = 1;
      var arrLength = arr.length;
      var valLength = val.length;
      if (encoding !== void 0) {
        encoding = String(encoding).toLowerCase();
        if (encoding === "ucs2" || encoding === "ucs-2" || encoding === "utf16le" || encoding === "utf-16le") {
          if (arr.length < 2 || val.length < 2) {
            return -1;
          }
          indexSize = 2;
          arrLength /= 2;
          valLength /= 2;
          byteOffset /= 2;
        }
      }
      function read(buf, i4) {
        if (indexSize === 1) {
          return buf[i4];
        } else {
          return buf.readUInt16BE(i4 * indexSize);
        }
      }
      var i3;
      if (dir) {
        var foundIndex = -1;
        for (i3 = byteOffset; i3 < arrLength; i3++) {
          if (read(arr, i3) === read(val, foundIndex === -1 ? 0 : i3 - foundIndex)) {
            if (foundIndex === -1)
              foundIndex = i3;
            if (i3 - foundIndex + 1 === valLength)
              return foundIndex * indexSize;
          } else {
            if (foundIndex !== -1)
              i3 -= i3 - foundIndex;
            foundIndex = -1;
          }
        }
      } else {
        if (byteOffset + valLength > arrLength)
          byteOffset = arrLength - valLength;
        for (i3 = byteOffset; i3 >= 0; i3--) {
          var found = true;
          for (var j = 0; j < valLength; j++) {
            if (read(arr, i3 + j) !== read(val, j)) {
              found = false;
              break;
            }
          }
          if (found)
            return i3;
        }
      }
      return -1;
    }
    Buffer2.prototype.includes = function includes(val, byteOffset, encoding) {
      return this.indexOf(val, byteOffset, encoding) !== -1;
    };
    Buffer2.prototype.indexOf = function indexOf(val, byteOffset, encoding) {
      return bidirectionalIndexOf(this, val, byteOffset, encoding, true);
    };
    Buffer2.prototype.lastIndexOf = function lastIndexOf(val, byteOffset, encoding) {
      return bidirectionalIndexOf(this, val, byteOffset, encoding, false);
    };
    function hexWrite(buf, string, offset, length) {
      offset = Number(offset) || 0;
      var remaining = buf.length - offset;
      if (!length) {
        length = remaining;
      } else {
        length = Number(length);
        if (length > remaining) {
          length = remaining;
        }
      }
      var strLen = string.length;
      if (length > strLen / 2) {
        length = strLen / 2;
      }
      for (var i3 = 0; i3 < length; ++i3) {
        var parsed = parseInt(string.substr(i3 * 2, 2), 16);
        if (numberIsNaN(parsed))
          return i3;
        buf[offset + i3] = parsed;
      }
      return i3;
    }
    function utf8Write(buf, string, offset, length) {
      return blitBuffer(utf8ToBytes2(string, buf.length - offset), buf, offset, length);
    }
    function asciiWrite(buf, string, offset, length) {
      return blitBuffer(asciiToBytes(string), buf, offset, length);
    }
    function base64Write(buf, string, offset, length) {
      return blitBuffer(base64ToBytes(string), buf, offset, length);
    }
    function ucs2Write(buf, string, offset, length) {
      return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length);
    }
    Buffer2.prototype.write = function write(string, offset, length, encoding) {
      if (offset === void 0) {
        encoding = "utf8";
        length = this.length;
        offset = 0;
      } else if (length === void 0 && typeof offset === "string") {
        encoding = offset;
        length = this.length;
        offset = 0;
      } else if (isFinite(offset)) {
        offset = offset >>> 0;
        if (isFinite(length)) {
          length = length >>> 0;
          if (encoding === void 0)
            encoding = "utf8";
        } else {
          encoding = length;
          length = void 0;
        }
      } else {
        throw new Error(
          "Buffer.write(string, encoding, offset[, length]) is no longer supported"
        );
      }
      var remaining = this.length - offset;
      if (length === void 0 || length > remaining)
        length = remaining;
      if (string.length > 0 && (length < 0 || offset < 0) || offset > this.length) {
        throw new RangeError("Attempt to write outside buffer bounds");
      }
      if (!encoding)
        encoding = "utf8";
      var loweredCase = false;
      for (; ; ) {
        switch (encoding) {
          case "hex":
            return hexWrite(this, string, offset, length);
          case "utf8":
          case "utf-8":
            return utf8Write(this, string, offset, length);
          case "ascii":
          case "latin1":
          case "binary":
            return asciiWrite(this, string, offset, length);
          case "base64":
            return base64Write(this, string, offset, length);
          case "ucs2":
          case "ucs-2":
          case "utf16le":
          case "utf-16le":
            return ucs2Write(this, string, offset, length);
          default:
            if (loweredCase)
              throw new TypeError("Unknown encoding: " + encoding);
            encoding = ("" + encoding).toLowerCase();
            loweredCase = true;
        }
      }
    };
    Buffer2.prototype.toJSON = function toJSON() {
      return {
        type: "Buffer",
        data: Array.prototype.slice.call(this._arr || this, 0)
      };
    };
    function base64Slice(buf, start, end) {
      if (start === 0 && end === buf.length) {
        return base64.fromByteArray(buf);
      } else {
        return base64.fromByteArray(buf.slice(start, end));
      }
    }
    function utf8Slice2(buf, start, end) {
      end = Math.min(buf.length, end);
      var res = [];
      var i3 = start;
      while (i3 < end) {
        var firstByte = buf[i3];
        var codePoint = null;
        var bytesPerSequence = firstByte > 239 ? 4 : firstByte > 223 ? 3 : firstByte > 191 ? 2 : 1;
        if (i3 + bytesPerSequence <= end) {
          var secondByte, thirdByte, fourthByte, tempCodePoint;
          switch (bytesPerSequence) {
            case 1:
              if (firstByte < 128) {
                codePoint = firstByte;
              }
              break;
            case 2:
              secondByte = buf[i3 + 1];
              if ((secondByte & 192) === 128) {
                tempCodePoint = (firstByte & 31) << 6 | secondByte & 63;
                if (tempCodePoint > 127) {
                  codePoint = tempCodePoint;
                }
              }
              break;
            case 3:
              secondByte = buf[i3 + 1];
              thirdByte = buf[i3 + 2];
              if ((secondByte & 192) === 128 && (thirdByte & 192) === 128) {
                tempCodePoint = (firstByte & 15) << 12 | (secondByte & 63) << 6 | thirdByte & 63;
                if (tempCodePoint > 2047 && (tempCodePoint < 55296 || tempCodePoint > 57343)) {
                  codePoint = tempCodePoint;
                }
              }
              break;
            case 4:
              secondByte = buf[i3 + 1];
              thirdByte = buf[i3 + 2];
              fourthByte = buf[i3 + 3];
              if ((secondByte & 192) === 128 && (thirdByte & 192) === 128 && (fourthByte & 192) === 128) {
                tempCodePoint = (firstByte & 15) << 18 | (secondByte & 63) << 12 | (thirdByte & 63) << 6 | fourthByte & 63;
                if (tempCodePoint > 65535 && tempCodePoint < 1114112) {
                  codePoint = tempCodePoint;
                }
              }
          }
        }
        if (codePoint === null) {
          codePoint = 65533;
          bytesPerSequence = 1;
        } else if (codePoint > 65535) {
          codePoint -= 65536;
          res.push(codePoint >>> 10 & 1023 | 55296);
          codePoint = 56320 | codePoint & 1023;
        }
        res.push(codePoint);
        i3 += bytesPerSequence;
      }
      return decodeCodePointsArray(res);
    }
    var MAX_ARGUMENTS_LENGTH = 4096;
    function decodeCodePointsArray(codePoints) {
      var len = codePoints.length;
      if (len <= MAX_ARGUMENTS_LENGTH) {
        return String.fromCharCode.apply(String, codePoints);
      }
      var res = "";
      var i3 = 0;
      while (i3 < len) {
        res += String.fromCharCode.apply(
          String,
          codePoints.slice(i3, i3 += MAX_ARGUMENTS_LENGTH)
        );
      }
      return res;
    }
    function asciiSlice(buf, start, end) {
      var ret = "";
      end = Math.min(buf.length, end);
      for (var i3 = start; i3 < end; ++i3) {
        ret += String.fromCharCode(buf[i3] & 127);
      }
      return ret;
    }
    function latin1Slice(buf, start, end) {
      var ret = "";
      end = Math.min(buf.length, end);
      for (var i3 = start; i3 < end; ++i3) {
        ret += String.fromCharCode(buf[i3]);
      }
      return ret;
    }
    function hexSlice(buf, start, end) {
      var len = buf.length;
      if (!start || start < 0)
        start = 0;
      if (!end || end < 0 || end > len)
        end = len;
      var out = "";
      for (var i3 = start; i3 < end; ++i3) {
        out += hexSliceLookupTable[buf[i3]];
      }
      return out;
    }
    function utf16leSlice(buf, start, end) {
      var bytes = buf.slice(start, end);
      var res = "";
      for (var i3 = 0; i3 < bytes.length - 1; i3 += 2) {
        res += String.fromCharCode(bytes[i3] + bytes[i3 + 1] * 256);
      }
      return res;
    }
    Buffer2.prototype.slice = function slice(start, end) {
      var len = this.length;
      start = ~~start;
      end = end === void 0 ? len : ~~end;
      if (start < 0) {
        start += len;
        if (start < 0)
          start = 0;
      } else if (start > len) {
        start = len;
      }
      if (end < 0) {
        end += len;
        if (end < 0)
          end = 0;
      } else if (end > len) {
        end = len;
      }
      if (end < start)
        end = start;
      var newBuf = this.subarray(start, end);
      Object.setPrototypeOf(newBuf, Buffer2.prototype);
      return newBuf;
    };
    function checkOffset(offset, ext, length) {
      if (offset % 1 !== 0 || offset < 0)
        throw new RangeError("offset is not uint");
      if (offset + ext > length)
        throw new RangeError("Trying to access beyond buffer length");
    }
    Buffer2.prototype.readUintLE = Buffer2.prototype.readUIntLE = function readUIntLE(offset, byteLength2, noAssert) {
      offset = offset >>> 0;
      byteLength2 = byteLength2 >>> 0;
      if (!noAssert)
        checkOffset(offset, byteLength2, this.length);
      var val = this[offset];
      var mul = 1;
      var i3 = 0;
      while (++i3 < byteLength2 && (mul *= 256)) {
        val += this[offset + i3] * mul;
      }
      return val;
    };
    Buffer2.prototype.readUintBE = Buffer2.prototype.readUIntBE = function readUIntBE(offset, byteLength2, noAssert) {
      offset = offset >>> 0;
      byteLength2 = byteLength2 >>> 0;
      if (!noAssert) {
        checkOffset(offset, byteLength2, this.length);
      }
      var val = this[offset + --byteLength2];
      var mul = 1;
      while (byteLength2 > 0 && (mul *= 256)) {
        val += this[offset + --byteLength2] * mul;
      }
      return val;
    };
    Buffer2.prototype.readUint8 = Buffer2.prototype.readUInt8 = function readUInt8(offset, noAssert) {
      offset = offset >>> 0;
      if (!noAssert)
        checkOffset(offset, 1, this.length);
      return this[offset];
    };
    Buffer2.prototype.readUint16LE = Buffer2.prototype.readUInt16LE = function readUInt16LE(offset, noAssert) {
      offset = offset >>> 0;
      if (!noAssert)
        checkOffset(offset, 2, this.length);
      return this[offset] | this[offset + 1] << 8;
    };
    Buffer2.prototype.readUint16BE = Buffer2.prototype.readUInt16BE = function readUInt16BE(offset, noAssert) {
      offset = offset >>> 0;
      if (!noAssert)
        checkOffset(offset, 2, this.length);
      return this[offset] << 8 | this[offset + 1];
    };
    Buffer2.prototype.readUint32LE = Buffer2.prototype.readUInt32LE = function readUInt32LE(offset, noAssert) {
      offset = offset >>> 0;
      if (!noAssert)
        checkOffset(offset, 4, this.length);
      return (this[offset] | this[offset + 1] << 8 | this[offset + 2] << 16) + this[offset + 3] * 16777216;
    };
    Buffer2.prototype.readUint32BE = Buffer2.prototype.readUInt32BE = function readUInt32BE(offset, noAssert) {
      offset = offset >>> 0;
      if (!noAssert)
        checkOffset(offset, 4, this.length);
      return this[offset] * 16777216 + (this[offset + 1] << 16 | this[offset + 2] << 8 | this[offset + 3]);
    };
    Buffer2.prototype.readIntLE = function readIntLE(offset, byteLength2, noAssert) {
      offset = offset >>> 0;
      byteLength2 = byteLength2 >>> 0;
      if (!noAssert)
        checkOffset(offset, byteLength2, this.length);
      var val = this[offset];
      var mul = 1;
      var i3 = 0;
      while (++i3 < byteLength2 && (mul *= 256)) {
        val += this[offset + i3] * mul;
      }
      mul *= 128;
      if (val >= mul)
        val -= Math.pow(2, 8 * byteLength2);
      return val;
    };
    Buffer2.prototype.readIntBE = function readIntBE(offset, byteLength2, noAssert) {
      offset = offset >>> 0;
      byteLength2 = byteLength2 >>> 0;
      if (!noAssert)
        checkOffset(offset, byteLength2, this.length);
      var i3 = byteLength2;
      var mul = 1;
      var val = this[offset + --i3];
      while (i3 > 0 && (mul *= 256)) {
        val += this[offset + --i3] * mul;
      }
      mul *= 128;
      if (val >= mul)
        val -= Math.pow(2, 8 * byteLength2);
      return val;
    };
    Buffer2.prototype.readInt8 = function readInt8(offset, noAssert) {
      offset = offset >>> 0;
      if (!noAssert)
        checkOffset(offset, 1, this.length);
      if (!(this[offset] & 128))
        return this[offset];
      return (255 - this[offset] + 1) * -1;
    };
    Buffer2.prototype.readInt16LE = function readInt16LE(offset, noAssert) {
      offset = offset >>> 0;
      if (!noAssert)
        checkOffset(offset, 2, this.length);
      var val = this[offset] | this[offset + 1] << 8;
      return val & 32768 ? val | 4294901760 : val;
    };
    Buffer2.prototype.readInt16BE = function readInt16BE(offset, noAssert) {
      offset = offset >>> 0;
      if (!noAssert)
        checkOffset(offset, 2, this.length);
      var val = this[offset + 1] | this[offset] << 8;
      return val & 32768 ? val | 4294901760 : val;
    };
    Buffer2.prototype.readInt32LE = function readInt32LE(offset, noAssert) {
      offset = offset >>> 0;
      if (!noAssert)
        checkOffset(offset, 4, this.length);
      return this[offset] | this[offset + 1] << 8 | this[offset + 2] << 16 | this[offset + 3] << 24;
    };
    Buffer2.prototype.readInt32BE = function readInt32BE(offset, noAssert) {
      offset = offset >>> 0;
      if (!noAssert)
        checkOffset(offset, 4, this.length);
      return this[offset] << 24 | this[offset + 1] << 16 | this[offset + 2] << 8 | this[offset + 3];
    };
    Buffer2.prototype.readFloatLE = function readFloatLE(offset, noAssert) {
      offset = offset >>> 0;
      if (!noAssert)
        checkOffset(offset, 4, this.length);
      return ieee754.read(this, offset, true, 23, 4);
    };
    Buffer2.prototype.readFloatBE = function readFloatBE(offset, noAssert) {
      offset = offset >>> 0;
      if (!noAssert)
        checkOffset(offset, 4, this.length);
      return ieee754.read(this, offset, false, 23, 4);
    };
    Buffer2.prototype.readDoubleLE = function readDoubleLE(offset, noAssert) {
      offset = offset >>> 0;
      if (!noAssert)
        checkOffset(offset, 8, this.length);
      return ieee754.read(this, offset, true, 52, 8);
    };
    Buffer2.prototype.readDoubleBE = function readDoubleBE(offset, noAssert) {
      offset = offset >>> 0;
      if (!noAssert)
        checkOffset(offset, 8, this.length);
      return ieee754.read(this, offset, false, 52, 8);
    };
    function checkInt(buf, value2, offset, ext, max, min) {
      if (!Buffer2.isBuffer(buf))
        throw new TypeError('"buffer" argument must be a Buffer instance');
      if (value2 > max || value2 < min)
        throw new RangeError('"value" argument is out of bounds');
      if (offset + ext > buf.length)
        throw new RangeError("Index out of range");
    }
    Buffer2.prototype.writeUintLE = Buffer2.prototype.writeUIntLE = function writeUIntLE(value2, offset, byteLength2, noAssert) {
      value2 = +value2;
      offset = offset >>> 0;
      byteLength2 = byteLength2 >>> 0;
      if (!noAssert) {
        var maxBytes = Math.pow(2, 8 * byteLength2) - 1;
        checkInt(this, value2, offset, byteLength2, maxBytes, 0);
      }
      var mul = 1;
      var i3 = 0;
      this[offset] = value2 & 255;
      while (++i3 < byteLength2 && (mul *= 256)) {
        this[offset + i3] = value2 / mul & 255;
      }
      return offset + byteLength2;
    };
    Buffer2.prototype.writeUintBE = Buffer2.prototype.writeUIntBE = function writeUIntBE(value2, offset, byteLength2, noAssert) {
      value2 = +value2;
      offset = offset >>> 0;
      byteLength2 = byteLength2 >>> 0;
      if (!noAssert) {
        var maxBytes = Math.pow(2, 8 * byteLength2) - 1;
        checkInt(this, value2, offset, byteLength2, maxBytes, 0);
      }
      var i3 = byteLength2 - 1;
      var mul = 1;
      this[offset + i3] = value2 & 255;
      while (--i3 >= 0 && (mul *= 256)) {
        this[offset + i3] = value2 / mul & 255;
      }
      return offset + byteLength2;
    };
    Buffer2.prototype.writeUint8 = Buffer2.prototype.writeUInt8 = function writeUInt8(value2, offset, noAssert) {
      value2 = +value2;
      offset = offset >>> 0;
      if (!noAssert)
        checkInt(this, value2, offset, 1, 255, 0);
      this[offset] = value2 & 255;
      return offset + 1;
    };
    Buffer2.prototype.writeUint16LE = Buffer2.prototype.writeUInt16LE = function writeUInt16LE(value2, offset, noAssert) {
      value2 = +value2;
      offset = offset >>> 0;
      if (!noAssert)
        checkInt(this, value2, offset, 2, 65535, 0);
      this[offset] = value2 & 255;
      this[offset + 1] = value2 >>> 8;
      return offset + 2;
    };
    Buffer2.prototype.writeUint16BE = Buffer2.prototype.writeUInt16BE = function writeUInt16BE(value2, offset, noAssert) {
      value2 = +value2;
      offset = offset >>> 0;
      if (!noAssert)
        checkInt(this, value2, offset, 2, 65535, 0);
      this[offset] = value2 >>> 8;
      this[offset + 1] = value2 & 255;
      return offset + 2;
    };
    Buffer2.prototype.writeUint32LE = Buffer2.prototype.writeUInt32LE = function writeUInt32LE(value2, offset, noAssert) {
      value2 = +value2;
      offset = offset >>> 0;
      if (!noAssert)
        checkInt(this, value2, offset, 4, 4294967295, 0);
      this[offset + 3] = value2 >>> 24;
      this[offset + 2] = value2 >>> 16;
      this[offset + 1] = value2 >>> 8;
      this[offset] = value2 & 255;
      return offset + 4;
    };
    Buffer2.prototype.writeUint32BE = Buffer2.prototype.writeUInt32BE = function writeUInt32BE(value2, offset, noAssert) {
      value2 = +value2;
      offset = offset >>> 0;
      if (!noAssert)
        checkInt(this, value2, offset, 4, 4294967295, 0);
      this[offset] = value2 >>> 24;
      this[offset + 1] = value2 >>> 16;
      this[offset + 2] = value2 >>> 8;
      this[offset + 3] = value2 & 255;
      return offset + 4;
    };
    Buffer2.prototype.writeIntLE = function writeIntLE(value2, offset, byteLength2, noAssert) {
      value2 = +value2;
      offset = offset >>> 0;
      if (!noAssert) {
        var limit = Math.pow(2, 8 * byteLength2 - 1);
        checkInt(this, value2, offset, byteLength2, limit - 1, -limit);
      }
      var i3 = 0;
      var mul = 1;
      var sub = 0;
      this[offset] = value2 & 255;
      while (++i3 < byteLength2 && (mul *= 256)) {
        if (value2 < 0 && sub === 0 && this[offset + i3 - 1] !== 0) {
          sub = 1;
        }
        this[offset + i3] = (value2 / mul >> 0) - sub & 255;
      }
      return offset + byteLength2;
    };
    Buffer2.prototype.writeIntBE = function writeIntBE(value2, offset, byteLength2, noAssert) {
      value2 = +value2;
      offset = offset >>> 0;
      if (!noAssert) {
        var limit = Math.pow(2, 8 * byteLength2 - 1);
        checkInt(this, value2, offset, byteLength2, limit - 1, -limit);
      }
      var i3 = byteLength2 - 1;
      var mul = 1;
      var sub = 0;
      this[offset + i3] = value2 & 255;
      while (--i3 >= 0 && (mul *= 256)) {
        if (value2 < 0 && sub === 0 && this[offset + i3 + 1] !== 0) {
          sub = 1;
        }
        this[offset + i3] = (value2 / mul >> 0) - sub & 255;
      }
      return offset + byteLength2;
    };
    Buffer2.prototype.writeInt8 = function writeInt8(value2, offset, noAssert) {
      value2 = +value2;
      offset = offset >>> 0;
      if (!noAssert)
        checkInt(this, value2, offset, 1, 127, -128);
      if (value2 < 0)
        value2 = 255 + value2 + 1;
      this[offset] = value2 & 255;
      return offset + 1;
    };
    Buffer2.prototype.writeInt16LE = function writeInt16LE(value2, offset, noAssert) {
      value2 = +value2;
      offset = offset >>> 0;
      if (!noAssert)
        checkInt(this, value2, offset, 2, 32767, -32768);
      this[offset] = value2 & 255;
      this[offset + 1] = value2 >>> 8;
      return offset + 2;
    };
    Buffer2.prototype.writeInt16BE = function writeInt16BE(value2, offset, noAssert) {
      value2 = +value2;
      offset = offset >>> 0;
      if (!noAssert)
        checkInt(this, value2, offset, 2, 32767, -32768);
      this[offset] = value2 >>> 8;
      this[offset + 1] = value2 & 255;
      return offset + 2;
    };
    Buffer2.prototype.writeInt32LE = function writeInt32LE(value2, offset, noAssert) {
      value2 = +value2;
      offset = offset >>> 0;
      if (!noAssert)
        checkInt(this, value2, offset, 4, 2147483647, -2147483648);
      this[offset] = value2 & 255;
      this[offset + 1] = value2 >>> 8;
      this[offset + 2] = value2 >>> 16;
      this[offset + 3] = value2 >>> 24;
      return offset + 4;
    };
    Buffer2.prototype.writeInt32BE = function writeInt32BE(value2, offset, noAssert) {
      value2 = +value2;
      offset = offset >>> 0;
      if (!noAssert)
        checkInt(this, value2, offset, 4, 2147483647, -2147483648);
      if (value2 < 0)
        value2 = 4294967295 + value2 + 1;
      this[offset] = value2 >>> 24;
      this[offset + 1] = value2 >>> 16;
      this[offset + 2] = value2 >>> 8;
      this[offset + 3] = value2 & 255;
      return offset + 4;
    };
    function checkIEEE754(buf, value2, offset, ext, max, min) {
      if (offset + ext > buf.length)
        throw new RangeError("Index out of range");
      if (offset < 0)
        throw new RangeError("Index out of range");
    }
    function writeFloat(buf, value2, offset, littleEndian, noAssert) {
      value2 = +value2;
      offset = offset >>> 0;
      if (!noAssert) {
        checkIEEE754(buf, value2, offset, 4, 34028234663852886e22, -34028234663852886e22);
      }
      ieee754.write(buf, value2, offset, littleEndian, 23, 4);
      return offset + 4;
    }
    Buffer2.prototype.writeFloatLE = function writeFloatLE(value2, offset, noAssert) {
      return writeFloat(this, value2, offset, true, noAssert);
    };
    Buffer2.prototype.writeFloatBE = function writeFloatBE(value2, offset, noAssert) {
      return writeFloat(this, value2, offset, false, noAssert);
    };
    function writeDouble(buf, value2, offset, littleEndian, noAssert) {
      value2 = +value2;
      offset = offset >>> 0;
      if (!noAssert) {
        checkIEEE754(buf, value2, offset, 8, 17976931348623157e292, -17976931348623157e292);
      }
      ieee754.write(buf, value2, offset, littleEndian, 52, 8);
      return offset + 8;
    }
    Buffer2.prototype.writeDoubleLE = function writeDoubleLE(value2, offset, noAssert) {
      return writeDouble(this, value2, offset, true, noAssert);
    };
    Buffer2.prototype.writeDoubleBE = function writeDoubleBE(value2, offset, noAssert) {
      return writeDouble(this, value2, offset, false, noAssert);
    };
    Buffer2.prototype.copy = function copy(target, targetStart, start, end) {
      if (!Buffer2.isBuffer(target))
        throw new TypeError("argument should be a Buffer");
      if (!start)
        start = 0;
      if (!end && end !== 0)
        end = this.length;
      if (targetStart >= target.length)
        targetStart = target.length;
      if (!targetStart)
        targetStart = 0;
      if (end > 0 && end < start)
        end = start;
      if (end === start)
        return 0;
      if (target.length === 0 || this.length === 0)
        return 0;
      if (targetStart < 0) {
        throw new RangeError("targetStart out of bounds");
      }
      if (start < 0 || start >= this.length)
        throw new RangeError("Index out of range");
      if (end < 0)
        throw new RangeError("sourceEnd out of bounds");
      if (end > this.length)
        end = this.length;
      if (target.length - targetStart < end - start) {
        end = target.length - targetStart + start;
      }
      var len = end - start;
      if (this === target && typeof Uint8Array.prototype.copyWithin === "function") {
        this.copyWithin(targetStart, start, end);
      } else {
        Uint8Array.prototype.set.call(
          target,
          this.subarray(start, end),
          targetStart
        );
      }
      return len;
    };
    Buffer2.prototype.fill = function fill(val, start, end, encoding) {
      if (typeof val === "string") {
        if (typeof start === "string") {
          encoding = start;
          start = 0;
          end = this.length;
        } else if (typeof end === "string") {
          encoding = end;
          end = this.length;
        }
        if (encoding !== void 0 && typeof encoding !== "string") {
          throw new TypeError("encoding must be a string");
        }
        if (typeof encoding === "string" && !Buffer2.isEncoding(encoding)) {
          throw new TypeError("Unknown encoding: " + encoding);
        }
        if (val.length === 1) {
          var code3 = val.charCodeAt(0);
          if (encoding === "utf8" && code3 < 128 || encoding === "latin1") {
            val = code3;
          }
        }
      } else if (typeof val === "number") {
        val = val & 255;
      } else if (typeof val === "boolean") {
        val = Number(val);
      }
      if (start < 0 || this.length < start || this.length < end) {
        throw new RangeError("Out of range index");
      }
      if (end <= start) {
        return this;
      }
      start = start >>> 0;
      end = end === void 0 ? this.length : end >>> 0;
      if (!val)
        val = 0;
      var i3;
      if (typeof val === "number") {
        for (i3 = start; i3 < end; ++i3) {
          this[i3] = val;
        }
      } else {
        var bytes = Buffer2.isBuffer(val) ? val : Buffer2.from(val, encoding);
        var len = bytes.length;
        if (len === 0) {
          throw new TypeError('The value "' + val + '" is invalid for argument "value"');
        }
        for (i3 = 0; i3 < end - start; ++i3) {
          this[i3 + start] = bytes[i3 % len];
        }
      }
      return this;
    };
    var INVALID_BASE64_RE = /[^+/0-9A-Za-z-_]/g;
    function base64clean(str) {
      str = str.split("=")[0];
      str = str.trim().replace(INVALID_BASE64_RE, "");
      if (str.length < 2)
        return "";
      while (str.length % 4 !== 0) {
        str = str + "=";
      }
      return str;
    }
    function utf8ToBytes2(string, units) {
      units = units || Infinity;
      var codePoint;
      var length = string.length;
      var leadSurrogate = null;
      var bytes = [];
      for (var i3 = 0; i3 < length; ++i3) {
        codePoint = string.charCodeAt(i3);
        if (codePoint > 55295 && codePoint < 57344) {
          if (!leadSurrogate) {
            if (codePoint > 56319) {
              if ((units -= 3) > -1)
                bytes.push(239, 191, 189);
              continue;
            } else if (i3 + 1 === length) {
              if ((units -= 3) > -1)
                bytes.push(239, 191, 189);
              continue;
            }
            leadSurrogate = codePoint;
            continue;
          }
          if (codePoint < 56320) {
            if ((units -= 3) > -1)
              bytes.push(239, 191, 189);
            leadSurrogate = codePoint;
            continue;
          }
          codePoint = (leadSurrogate - 55296 << 10 | codePoint - 56320) + 65536;
        } else if (leadSurrogate) {
          if ((units -= 3) > -1)
            bytes.push(239, 191, 189);
        }
        leadSurrogate = null;
        if (codePoint < 128) {
          if ((units -= 1) < 0)
            break;
          bytes.push(codePoint);
        } else if (codePoint < 2048) {
          if ((units -= 2) < 0)
            break;
          bytes.push(
            codePoint >> 6 | 192,
            codePoint & 63 | 128
          );
        } else if (codePoint < 65536) {
          if ((units -= 3) < 0)
            break;
          bytes.push(
            codePoint >> 12 | 224,
            codePoint >> 6 & 63 | 128,
            codePoint & 63 | 128
          );
        } else if (codePoint < 1114112) {
          if ((units -= 4) < 0)
            break;
          bytes.push(
            codePoint >> 18 | 240,
            codePoint >> 12 & 63 | 128,
            codePoint >> 6 & 63 | 128,
            codePoint & 63 | 128
          );
        } else {
          throw new Error("Invalid code point");
        }
      }
      return bytes;
    }
    function asciiToBytes(str) {
      var byteArray = [];
      for (var i3 = 0; i3 < str.length; ++i3) {
        byteArray.push(str.charCodeAt(i3) & 255);
      }
      return byteArray;
    }
    function utf16leToBytes(str, units) {
      var c, hi, lo;
      var byteArray = [];
      for (var i3 = 0; i3 < str.length; ++i3) {
        if ((units -= 2) < 0)
          break;
        c = str.charCodeAt(i3);
        hi = c >> 8;
        lo = c % 256;
        byteArray.push(lo);
        byteArray.push(hi);
      }
      return byteArray;
    }
    function base64ToBytes(str) {
      return base64.toByteArray(base64clean(str));
    }
    function blitBuffer(src, dst, offset, length) {
      for (var i3 = 0; i3 < length; ++i3) {
        if (i3 + offset >= dst.length || i3 >= src.length)
          break;
        dst[i3 + offset] = src[i3];
      }
      return i3;
    }
    function isInstance(obj, type) {
      return obj instanceof type || obj != null && obj.constructor != null && obj.constructor.name != null && obj.constructor.name === type.name;
    }
    function numberIsNaN(obj) {
      return obj !== obj;
    }
    var hexSliceLookupTable = function() {
      var alphabet = "0123456789abcdef";
      var table = new Array(256);
      for (var i3 = 0; i3 < 16; ++i3) {
        var i16 = i3 * 16;
        for (var j = 0; j < 16; ++j) {
          table[i16 + j] = alphabet[i3] + alphabet[j];
        }
      }
      return table;
    }();
  }
});

// node_modules/detect-browser/index.js
var require_detect_browser = __commonJS({
  "node_modules/detect-browser/index.js"(exports, module) {
    function detect2() {
      if (typeof navigator !== "undefined") {
        return parseUserAgent(navigator.userAgent);
      }
      return getNodeVersion();
    }
    function detectOS(userAgentString) {
      var rules = getOperatingSystemRules();
      var detected = rules.filter(function(os) {
        return os.rule && os.rule.test(userAgentString);
      })[0];
      return detected ? detected.name : null;
    }
    function getNodeVersion() {
      var isNode = typeof process !== "undefined" && process.version;
      return isNode && {
        name: "node",
        version: process.version.slice(1),
        os: process.platform
      };
    }
    function parseUserAgent(userAgentString) {
      var browsers = getBrowserRules();
      if (!userAgentString) {
        return null;
      }
      var detected = browsers.map(function(browser3) {
        var match = browser3.rule.exec(userAgentString);
        var version4 = match && match[1].split(/[._]/).slice(0, 3);
        if (version4 && version4.length < 3) {
          version4 = version4.concat(version4.length == 1 ? [0, 0] : [0]);
        }
        return match && {
          name: browser3.name,
          version: version4.join(".")
        };
      }).filter(Boolean)[0] || null;
      if (detected) {
        detected.os = detectOS(userAgentString);
      }
      if (/alexa|bot|crawl(er|ing)|facebookexternalhit|feedburner|google web preview|nagios|postrank|pingdom|slurp|spider|yahoo!|yandex/i.test(userAgentString)) {
        detected = detected || {};
        detected.bot = true;
      }
      return detected;
    }
    function getBrowserRules() {
      return buildRules([
        ["aol", /AOLShield\/([0-9\._]+)/],
        ["edge", /Edge\/([0-9\._]+)/],
        ["yandexbrowser", /YaBrowser\/([0-9\._]+)/],
        ["vivaldi", /Vivaldi\/([0-9\.]+)/],
        ["kakaotalk", /KAKAOTALK\s([0-9\.]+)/],
        ["samsung", /SamsungBrowser\/([0-9\.]+)/],
        ["chrome", /(?!Chrom.*OPR)Chrom(?:e|ium)\/([0-9\.]+)(:?\s|$)/],
        ["phantomjs", /PhantomJS\/([0-9\.]+)(:?\s|$)/],
        ["crios", /CriOS\/([0-9\.]+)(:?\s|$)/],
        ["firefox", /Firefox\/([0-9\.]+)(?:\s|$)/],
        ["fxios", /FxiOS\/([0-9\.]+)/],
        ["opera", /Opera\/([0-9\.]+)(?:\s|$)/],
        ["opera", /OPR\/([0-9\.]+)(:?\s|$)$/],
        ["ie", /Trident\/7\.0.*rv\:([0-9\.]+).*\).*Gecko$/],
        ["ie", /MSIE\s([0-9\.]+);.*Trident\/[4-7].0/],
        ["ie", /MSIE\s(7\.0)/],
        ["bb10", /BB10;\sTouch.*Version\/([0-9\.]+)/],
        ["android", /Android\s([0-9\.]+)/],
        ["ios", /Version\/([0-9\._]+).*Mobile.*Safari.*/],
        ["safari", /Version\/([0-9\._]+).*Safari/],
        ["facebook", /FBAV\/([0-9\.]+)/],
        ["instagram", /Instagram\s([0-9\.]+)/],
        ["ios-webview", /AppleWebKit\/([0-9\.]+).*Mobile/]
      ]);
    }
    function getOperatingSystemRules() {
      return buildRules([
        ["iOS", /iP(hone|od|ad)/],
        ["Android OS", /Android/],
        ["BlackBerry OS", /BlackBerry|BB10/],
        ["Windows Mobile", /IEMobile/],
        ["Amazon OS", /Kindle/],
        ["Windows 3.11", /Win16/],
        ["Windows 95", /(Windows 95)|(Win95)|(Windows_95)/],
        ["Windows 98", /(Windows 98)|(Win98)/],
        ["Windows 2000", /(Windows NT 5.0)|(Windows 2000)/],
        ["Windows XP", /(Windows NT 5.1)|(Windows XP)/],
        ["Windows Server 2003", /(Windows NT 5.2)/],
        ["Windows Vista", /(Windows NT 6.0)/],
        ["Windows 7", /(Windows NT 6.1)/],
        ["Windows 8", /(Windows NT 6.2)/],
        ["Windows 8.1", /(Windows NT 6.3)/],
        ["Windows 10", /(Windows NT 10.0)/],
        ["Windows ME", /Windows ME/],
        ["Open BSD", /OpenBSD/],
        ["Sun OS", /SunOS/],
        ["Linux", /(Linux)|(X11)/],
        ["Mac OS", /(Mac_PowerPC)|(Macintosh)/],
        ["QNX", /QNX/],
        ["BeOS", /BeOS/],
        ["OS/2", /OS\/2/],
        ["Search Bot", /(nuhk)|(Googlebot)|(Yammybot)|(Openbot)|(Slurp)|(MSNBot)|(Ask Jeeves\/Teoma)|(ia_archiver)/]
      ]);
    }
    function buildRules(ruleTuples) {
      return ruleTuples.map(function(tuple) {
        return {
          name: tuple[0],
          rule: tuple[1]
        };
      });
    }
    module.exports = {
      detect: detect2,
      detectOS,
      getNodeVersion,
      parseUserAgent
    };
  }
});

// node_modules/mongodb-stitch-core-sdk/node_modules/bson/dist/bson.browser.esm.js
var import_long = __toESM(require_long());
var import_buffer = __toESM(require_buffer());
var commonjsGlobal = typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
function createCommonjsModule(fn, module) {
  return module = { exports: {} }, fn(module, module.exports), module.exports;
}
var map = createCommonjsModule(function(module) {
  if (typeof commonjsGlobal.Map !== "undefined") {
    module.exports = commonjsGlobal.Map;
    module.exports.Map = commonjsGlobal.Map;
  } else {
    var Map2 = function Map3(array) {
      this._keys = [];
      this._values = {};
      for (var i3 = 0; i3 < array.length; i3++) {
        if (array[i3] == null)
          continue;
        var entry = array[i3];
        var key = entry[0];
        var value2 = entry[1];
        this._keys.push(key);
        this._values[key] = {
          v: value2,
          i: this._keys.length - 1
        };
      }
    };
    Map2.prototype.clear = function() {
      this._keys = [];
      this._values = {};
    };
    Map2.prototype.delete = function(key) {
      var value2 = this._values[key];
      if (value2 == null)
        return false;
      delete this._values[key];
      this._keys.splice(value2.i, 1);
      return true;
    };
    Map2.prototype.entries = function() {
      var self2 = this;
      var index = 0;
      return {
        next: function next() {
          var key = self2._keys[index++];
          return {
            value: key !== void 0 ? [key, self2._values[key].v] : void 0,
            done: key !== void 0 ? false : true
          };
        }
      };
    };
    Map2.prototype.forEach = function(callback, self2) {
      self2 = self2 || this;
      for (var i3 = 0; i3 < this._keys.length; i3++) {
        var key = this._keys[i3];
        callback.call(self2, this._values[key].v, key, self2);
      }
    };
    Map2.prototype.get = function(key) {
      return this._values[key] ? this._values[key].v : void 0;
    };
    Map2.prototype.has = function(key) {
      return this._values[key] != null;
    };
    Map2.prototype.keys = function() {
      var self2 = this;
      var index = 0;
      return {
        next: function next() {
          var key = self2._keys[index++];
          return {
            value: key !== void 0 ? key : void 0,
            done: key !== void 0 ? false : true
          };
        }
      };
    };
    Map2.prototype.set = function(key, value2) {
      if (this._values[key]) {
        this._values[key].v = value2;
        return this;
      }
      this._keys.push(key);
      this._values[key] = {
        v: value2,
        i: this._keys.length - 1
      };
      return this;
    };
    Map2.prototype.values = function() {
      var self2 = this;
      var index = 0;
      return {
        next: function next() {
          var key = self2._keys[index++];
          return {
            value: key !== void 0 ? self2._values[key].v : void 0,
            done: key !== void 0 ? false : true
          };
        }
      };
    };
    Object.defineProperty(Map2.prototype, "size", {
      enumerable: true,
      get: function get5() {
        return this._keys.length;
      }
    });
    module.exports = Map2;
  }
});
var map_1 = map.Map;
import_long.default.prototype.toExtendedJSON = function(options) {
  if (options && options.relaxed)
    return this.toNumber();
  return {
    $numberLong: this.toString()
  };
};
import_long.default.fromExtendedJSON = function(doc, options) {
  var result = import_long.default.fromString(doc.$numberLong);
  return options && options.relaxed ? result.toNumber() : result;
};
Object.defineProperty(import_long.default.prototype, "_bsontype", {
  value: "Long"
});
var long_1 = import_long.default;
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _defineProperties(target, props) {
  for (var i3 = 0; i3 < props.length; i3++) {
    var descriptor = props[i3];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor)
      descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}
function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps)
    _defineProperties(Constructor.prototype, protoProps);
  if (staticProps)
    _defineProperties(Constructor, staticProps);
  return Constructor;
}
var Double = function() {
  function Double5(value2) {
    _classCallCheck(this, Double5);
    this.value = value2;
  }
  _createClass(Double5, [{
    key: "valueOf",
    value: function valueOf() {
      return this.value;
    }
    /**
     * @ignore
     */
  }, {
    key: "toJSON",
    value: function toJSON() {
      return this.value;
    }
    /**
     * @ignore
     */
  }, {
    key: "toExtendedJSON",
    value: function toExtendedJSON(options) {
      if (options && options.relaxed && isFinite(this.value))
        return this.value;
      return {
        $numberDouble: this.value.toString()
      };
    }
    /**
     * @ignore
     */
  }], [{
    key: "fromExtendedJSON",
    value: function fromExtendedJSON(doc, options) {
      return options && options.relaxed ? parseFloat(doc.$numberDouble) : new Double5(parseFloat(doc.$numberDouble));
    }
  }]);
  return Double5;
}();
Object.defineProperty(Double.prototype, "_bsontype", {
  value: "Double"
});
var double_1 = Double;
function _typeof(obj) {
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function _typeof3(obj2) {
      return typeof obj2;
    };
  } else {
    _typeof = function _typeof3(obj2) {
      return obj2 && typeof Symbol === "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
    };
  }
  return _typeof(obj);
}
function _classCallCheck$1(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _defineProperties$1(target, props) {
  for (var i3 = 0; i3 < props.length; i3++) {
    var descriptor = props[i3];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor)
      descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}
function _createClass$1(Constructor, protoProps, staticProps) {
  if (protoProps)
    _defineProperties$1(Constructor.prototype, protoProps);
  if (staticProps)
    _defineProperties$1(Constructor, staticProps);
  return Constructor;
}
function _possibleConstructorReturn(self2, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }
  return _assertThisInitialized(self2);
}
function _assertThisInitialized(self2) {
  if (self2 === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return self2;
}
function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf3(o2) {
    return o2.__proto__ || Object.getPrototypeOf(o2);
  };
  return _getPrototypeOf(o);
}
function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } });
  if (superClass)
    _setPrototypeOf(subClass, superClass);
}
function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf3(o2, p2) {
    o2.__proto__ = p2;
    return o2;
  };
  return _setPrototypeOf(o, p);
}
var Timestamp = function(_Long) {
  _inherits(Timestamp5, _Long);
  function Timestamp5(low, high) {
    var _this;
    _classCallCheck$1(this, Timestamp5);
    if (long_1.isLong(low)) {
      _this = _possibleConstructorReturn(this, _getPrototypeOf(Timestamp5).call(this, low.low, low.high));
    } else {
      _this = _possibleConstructorReturn(this, _getPrototypeOf(Timestamp5).call(this, low, high));
    }
    return _possibleConstructorReturn(_this);
  }
  _createClass$1(Timestamp5, [{
    key: "toJSON",
    value: function toJSON() {
      return {
        $timestamp: this.toString()
      };
    }
    /**
     * Returns a Timestamp represented by the given (32-bit) integer value.
     *
     * @method
     * @param {number} value the 32-bit integer in question.
     * @return {Timestamp} the timestamp.
     */
  }, {
    key: "toExtendedJSON",
    /**
     * @ignore
     */
    value: function toExtendedJSON() {
      return {
        $timestamp: {
          t: this.high,
          i: this.low
        }
      };
    }
    /**
     * @ignore
     */
  }], [{
    key: "fromInt",
    value: function fromInt(value2) {
      return new Timestamp5(long_1.fromInt(value2));
    }
    /**
     * Returns a Timestamp representing the given number value, provided that it is a finite number. Otherwise, zero is returned.
     *
     * @method
     * @param {number} value the number in question.
     * @return {Timestamp} the timestamp.
     */
  }, {
    key: "fromNumber",
    value: function fromNumber(value2) {
      return new Timestamp5(long_1.fromNumber(value2));
    }
    /**
     * Returns a Timestamp for the given high and low bits. Each is assumed to use 32 bits.
     *
     * @method
     * @param {number} lowBits the low 32-bits.
     * @param {number} highBits the high 32-bits.
     * @return {Timestamp} the timestamp.
     */
  }, {
    key: "fromBits",
    value: function fromBits(lowBits, highBits) {
      return new Timestamp5(lowBits, highBits);
    }
    /**
     * Returns a Timestamp from the given string, optionally using the given radix.
     *
     * @method
     * @param {String} str the textual representation of the Timestamp.
     * @param {number} [opt_radix] the radix in which the text is written.
     * @return {Timestamp} the timestamp.
     */
  }, {
    key: "fromString",
    value: function fromString(str, opt_radix) {
      return new Timestamp5(long_1.fromString(str, opt_radix));
    }
  }, {
    key: "fromExtendedJSON",
    value: function fromExtendedJSON(doc) {
      return new Timestamp5(doc.$timestamp.i, doc.$timestamp.t);
    }
  }]);
  return Timestamp5;
}(long_1);
Object.defineProperty(Timestamp.prototype, "_bsontype", {
  value: "Timestamp"
});
var timestamp = Timestamp;
var require$$0 = {};
function normalizedFunctionString(fn) {
  return fn.toString().replace("function(", "function (");
}
function insecureRandomBytes(size) {
  var result = new Uint8Array(size);
  for (var i3 = 0; i3 < size; ++i3) {
    result[i3] = Math.floor(Math.random() * 256);
  }
  return result;
}
var randomBytes = insecureRandomBytes;
if (typeof window !== "undefined" && window.crypto && window.crypto.getRandomValues) {
  randomBytes = function randomBytes3(size) {
    return window.crypto.getRandomValues(new Uint8Array(size));
  };
} else {
  try {
    randomBytes = require$$0.randomBytes;
  } catch (e) {
  }
  if (randomBytes == null) {
    randomBytes = insecureRandomBytes;
  }
}
var utils = {
  normalizedFunctionString,
  randomBytes
};
function defaultSetTimout() {
  throw new Error("setTimeout has not been defined");
}
function defaultClearTimeout() {
  throw new Error("clearTimeout has not been defined");
}
var cachedSetTimeout = defaultSetTimout;
var cachedClearTimeout = defaultClearTimeout;
if (typeof global.setTimeout === "function") {
  cachedSetTimeout = setTimeout;
}
if (typeof global.clearTimeout === "function") {
  cachedClearTimeout = clearTimeout;
}
function runTimeout(fun) {
  if (cachedSetTimeout === setTimeout) {
    return setTimeout(fun, 0);
  }
  if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
    cachedSetTimeout = setTimeout;
    return setTimeout(fun, 0);
  }
  try {
    return cachedSetTimeout(fun, 0);
  } catch (e) {
    try {
      return cachedSetTimeout.call(null, fun, 0);
    } catch (e2) {
      return cachedSetTimeout.call(this, fun, 0);
    }
  }
}
function runClearTimeout(marker) {
  if (cachedClearTimeout === clearTimeout) {
    return clearTimeout(marker);
  }
  if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
    cachedClearTimeout = clearTimeout;
    return clearTimeout(marker);
  }
  try {
    return cachedClearTimeout(marker);
  } catch (e) {
    try {
      return cachedClearTimeout.call(null, marker);
    } catch (e2) {
      return cachedClearTimeout.call(this, marker);
    }
  }
}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;
function cleanUpNextTick() {
  if (!draining || !currentQueue) {
    return;
  }
  draining = false;
  if (currentQueue.length) {
    queue = currentQueue.concat(queue);
  } else {
    queueIndex = -1;
  }
  if (queue.length) {
    drainQueue();
  }
}
function drainQueue() {
  if (draining) {
    return;
  }
  var timeout = runTimeout(cleanUpNextTick);
  draining = true;
  var len = queue.length;
  while (len) {
    currentQueue = queue;
    queue = [];
    while (++queueIndex < len) {
      if (currentQueue) {
        currentQueue[queueIndex].run();
      }
    }
    queueIndex = -1;
    len = queue.length;
  }
  currentQueue = null;
  draining = false;
  runClearTimeout(timeout);
}
function nextTick(fun) {
  var args = new Array(arguments.length - 1);
  if (arguments.length > 1) {
    for (var i3 = 1; i3 < arguments.length; i3++) {
      args[i3 - 1] = arguments[i3];
    }
  }
  queue.push(new Item(fun, args));
  if (queue.length === 1 && !draining) {
    runTimeout(drainQueue);
  }
}
function Item(fun, array) {
  this.fun = fun;
  this.array = array;
}
Item.prototype.run = function() {
  this.fun.apply(null, this.array);
};
var title = "browser";
var platform = "browser";
var browser = true;
var env = {};
var argv = [];
var version = "";
var versions = {};
var release = {};
var config = {};
function noop() {
}
var on = noop;
var addListener = noop;
var once = noop;
var off = noop;
var removeListener = noop;
var removeAllListeners = noop;
var emit = noop;
function binding(name) {
  throw new Error("process.binding is not supported");
}
function cwd() {
  return "/";
}
function chdir(dir) {
  throw new Error("process.chdir is not supported");
}
function umask() {
  return 0;
}
var performance = global.performance || {};
var performanceNow = performance.now || performance.mozNow || performance.msNow || performance.oNow || performance.webkitNow || function() {
  return (/* @__PURE__ */ new Date()).getTime();
};
function hrtime(previousTimestamp) {
  var clocktime = performanceNow.call(performance) * 1e-3;
  var seconds = Math.floor(clocktime);
  var nanoseconds = Math.floor(clocktime % 1 * 1e9);
  if (previousTimestamp) {
    seconds = seconds - previousTimestamp[0];
    nanoseconds = nanoseconds - previousTimestamp[1];
    if (nanoseconds < 0) {
      seconds--;
      nanoseconds += 1e9;
    }
  }
  return [seconds, nanoseconds];
}
var startTime = /* @__PURE__ */ new Date();
function uptime() {
  var currentTime = /* @__PURE__ */ new Date();
  var dif = currentTime - startTime;
  return dif / 1e3;
}
var process2 = {
  nextTick,
  title,
  browser,
  env,
  argv,
  version,
  versions,
  on,
  addListener,
  once,
  off,
  removeListener,
  removeAllListeners,
  emit,
  binding,
  cwd,
  chdir,
  umask,
  hrtime,
  platform,
  release,
  config,
  uptime
};
var inherits;
if (typeof Object.create === "function") {
  inherits = function inherits3(ctor, superCtor) {
    ctor.super_ = superCtor;
    ctor.prototype = Object.create(superCtor.prototype, {
      constructor: {
        value: ctor,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
  };
} else {
  inherits = function inherits3(ctor, superCtor) {
    ctor.super_ = superCtor;
    var TempCtor = function TempCtor2() {
    };
    TempCtor.prototype = superCtor.prototype;
    ctor.prototype = new TempCtor();
    ctor.prototype.constructor = ctor;
  };
}
var inherits$1 = inherits;
function _typeof$1(obj) {
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof$1 = function _typeof3(obj2) {
      return typeof obj2;
    };
  } else {
    _typeof$1 = function _typeof3(obj2) {
      return obj2 && typeof Symbol === "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
    };
  }
  return _typeof$1(obj);
}
var formatRegExp = /%[sdj%]/g;
function format(f) {
  if (!isString(f)) {
    var objects = [];
    for (var i3 = 0; i3 < arguments.length; i3++) {
      objects.push(inspect(arguments[i3]));
    }
    return objects.join(" ");
  }
  var i3 = 1;
  var args = arguments;
  var len = args.length;
  var str = String(f).replace(formatRegExp, function(x2) {
    if (x2 === "%%")
      return "%";
    if (i3 >= len)
      return x2;
    switch (x2) {
      case "%s":
        return String(args[i3++]);
      case "%d":
        return Number(args[i3++]);
      case "%j":
        try {
          return JSON.stringify(args[i3++]);
        } catch (_) {
          return "[Circular]";
        }
      default:
        return x2;
    }
  });
  for (var x = args[i3]; i3 < len; x = args[++i3]) {
    if (isNull(x) || !isObject(x)) {
      str += " " + x;
    } else {
      str += " " + inspect(x);
    }
  }
  return str;
}
function deprecate(fn, msg) {
  if (isUndefined(global.process)) {
    return function() {
      return deprecate(fn, msg).apply(this, arguments);
    };
  }
  var warned = false;
  function deprecated() {
    if (!warned) {
      {
        console.error(msg);
      }
      warned = true;
    }
    return fn.apply(this, arguments);
  }
  return deprecated;
}
var debugs = {};
var debugEnviron;
function debuglog(set5) {
  if (isUndefined(debugEnviron))
    debugEnviron = process2.env.NODE_DEBUG || "";
  set5 = set5.toUpperCase();
  if (!debugs[set5]) {
    if (new RegExp("\\b" + set5 + "\\b", "i").test(debugEnviron)) {
      var pid = 0;
      debugs[set5] = function() {
        var msg = format.apply(null, arguments);
        console.error("%s %d: %s", set5, pid, msg);
      };
    } else {
      debugs[set5] = function() {
      };
    }
  }
  return debugs[set5];
}
function inspect(obj, opts) {
  var ctx = {
    seen: [],
    stylize: stylizeNoColor
  };
  if (arguments.length >= 3)
    ctx.depth = arguments[2];
  if (arguments.length >= 4)
    ctx.colors = arguments[3];
  if (isBoolean(opts)) {
    ctx.showHidden = opts;
  } else if (opts) {
    _extend(ctx, opts);
  }
  if (isUndefined(ctx.showHidden))
    ctx.showHidden = false;
  if (isUndefined(ctx.depth))
    ctx.depth = 2;
  if (isUndefined(ctx.colors))
    ctx.colors = false;
  if (isUndefined(ctx.customInspect))
    ctx.customInspect = true;
  if (ctx.colors)
    ctx.stylize = stylizeWithColor;
  return formatValue(ctx, obj, ctx.depth);
}
inspect.colors = {
  "bold": [1, 22],
  "italic": [3, 23],
  "underline": [4, 24],
  "inverse": [7, 27],
  "white": [37, 39],
  "grey": [90, 39],
  "black": [30, 39],
  "blue": [34, 39],
  "cyan": [36, 39],
  "green": [32, 39],
  "magenta": [35, 39],
  "red": [31, 39],
  "yellow": [33, 39]
};
inspect.styles = {
  "special": "cyan",
  "number": "yellow",
  "boolean": "yellow",
  "undefined": "grey",
  "null": "bold",
  "string": "green",
  "date": "magenta",
  // "name": intentionally not styling
  "regexp": "red"
};
function stylizeWithColor(str, styleType) {
  var style = inspect.styles[styleType];
  if (style) {
    return "\x1B[" + inspect.colors[style][0] + "m" + str + "\x1B[" + inspect.colors[style][1] + "m";
  } else {
    return str;
  }
}
function stylizeNoColor(str, styleType) {
  return str;
}
function arrayToHash(array) {
  var hash2 = {};
  array.forEach(function(val, idx) {
    hash2[val] = true;
  });
  return hash2;
}
function formatValue(ctx, value2, recurseTimes) {
  if (ctx.customInspect && value2 && isFunction(value2.inspect) && // Filter out the util module, it's inspect function is special
  value2.inspect !== inspect && // Also filter out any prototype objects using the circular check.
  !(value2.constructor && value2.constructor.prototype === value2)) {
    var ret = value2.inspect(recurseTimes, ctx);
    if (!isString(ret)) {
      ret = formatValue(ctx, ret, recurseTimes);
    }
    return ret;
  }
  var primitive = formatPrimitive(ctx, value2);
  if (primitive) {
    return primitive;
  }
  var keys = Object.keys(value2);
  var visibleKeys = arrayToHash(keys);
  if (ctx.showHidden) {
    keys = Object.getOwnPropertyNames(value2);
  }
  if (isError(value2) && (keys.indexOf("message") >= 0 || keys.indexOf("description") >= 0)) {
    return formatError(value2);
  }
  if (keys.length === 0) {
    if (isFunction(value2)) {
      var name = value2.name ? ": " + value2.name : "";
      return ctx.stylize("[Function" + name + "]", "special");
    }
    if (isRegExp(value2)) {
      return ctx.stylize(RegExp.prototype.toString.call(value2), "regexp");
    }
    if (isDate(value2)) {
      return ctx.stylize(Date.prototype.toString.call(value2), "date");
    }
    if (isError(value2)) {
      return formatError(value2);
    }
  }
  var base = "", array = false, braces = ["{", "}"];
  if (isArray(value2)) {
    array = true;
    braces = ["[", "]"];
  }
  if (isFunction(value2)) {
    var n = value2.name ? ": " + value2.name : "";
    base = " [Function" + n + "]";
  }
  if (isRegExp(value2)) {
    base = " " + RegExp.prototype.toString.call(value2);
  }
  if (isDate(value2)) {
    base = " " + Date.prototype.toUTCString.call(value2);
  }
  if (isError(value2)) {
    base = " " + formatError(value2);
  }
  if (keys.length === 0 && (!array || value2.length == 0)) {
    return braces[0] + base + braces[1];
  }
  if (recurseTimes < 0) {
    if (isRegExp(value2)) {
      return ctx.stylize(RegExp.prototype.toString.call(value2), "regexp");
    } else {
      return ctx.stylize("[Object]", "special");
    }
  }
  ctx.seen.push(value2);
  var output;
  if (array) {
    output = formatArray(ctx, value2, recurseTimes, visibleKeys, keys);
  } else {
    output = keys.map(function(key) {
      return formatProperty(ctx, value2, recurseTimes, visibleKeys, key, array);
    });
  }
  ctx.seen.pop();
  return reduceToSingleString(output, base, braces);
}
function formatPrimitive(ctx, value2) {
  if (isUndefined(value2))
    return ctx.stylize("undefined", "undefined");
  if (isString(value2)) {
    var simple = "'" + JSON.stringify(value2).replace(/^"|"$/g, "").replace(/'/g, "\\'").replace(/\\"/g, '"') + "'";
    return ctx.stylize(simple, "string");
  }
  if (isNumber(value2))
    return ctx.stylize("" + value2, "number");
  if (isBoolean(value2))
    return ctx.stylize("" + value2, "boolean");
  if (isNull(value2))
    return ctx.stylize("null", "null");
}
function formatError(value2) {
  return "[" + Error.prototype.toString.call(value2) + "]";
}
function formatArray(ctx, value2, recurseTimes, visibleKeys, keys) {
  var output = [];
  for (var i3 = 0, l = value2.length; i3 < l; ++i3) {
    if (hasOwnProperty(value2, String(i3))) {
      output.push(formatProperty(ctx, value2, recurseTimes, visibleKeys, String(i3), true));
    } else {
      output.push("");
    }
  }
  keys.forEach(function(key) {
    if (!key.match(/^\d+$/)) {
      output.push(formatProperty(ctx, value2, recurseTimes, visibleKeys, key, true));
    }
  });
  return output;
}
function formatProperty(ctx, value2, recurseTimes, visibleKeys, key, array) {
  var name, str, desc;
  desc = Object.getOwnPropertyDescriptor(value2, key) || {
    value: value2[key]
  };
  if (desc.get) {
    if (desc.set) {
      str = ctx.stylize("[Getter/Setter]", "special");
    } else {
      str = ctx.stylize("[Getter]", "special");
    }
  } else {
    if (desc.set) {
      str = ctx.stylize("[Setter]", "special");
    }
  }
  if (!hasOwnProperty(visibleKeys, key)) {
    name = "[" + key + "]";
  }
  if (!str) {
    if (ctx.seen.indexOf(desc.value) < 0) {
      if (isNull(recurseTimes)) {
        str = formatValue(ctx, desc.value, null);
      } else {
        str = formatValue(ctx, desc.value, recurseTimes - 1);
      }
      if (str.indexOf("\n") > -1) {
        if (array) {
          str = str.split("\n").map(function(line) {
            return "  " + line;
          }).join("\n").substr(2);
        } else {
          str = "\n" + str.split("\n").map(function(line) {
            return "   " + line;
          }).join("\n");
        }
      }
    } else {
      str = ctx.stylize("[Circular]", "special");
    }
  }
  if (isUndefined(name)) {
    if (array && key.match(/^\d+$/)) {
      return str;
    }
    name = JSON.stringify("" + key);
    if (name.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)) {
      name = name.substr(1, name.length - 2);
      name = ctx.stylize(name, "name");
    } else {
      name = name.replace(/'/g, "\\'").replace(/\\"/g, '"').replace(/(^"|"$)/g, "'");
      name = ctx.stylize(name, "string");
    }
  }
  return name + ": " + str;
}
function reduceToSingleString(output, base, braces) {
  var length = output.reduce(function(prev, cur) {
    if (cur.indexOf("\n") >= 0)
      ;
    return prev + cur.replace(/\u001b\[\d\d?m/g, "").length + 1;
  }, 0);
  if (length > 60) {
    return braces[0] + (base === "" ? "" : base + "\n ") + " " + output.join(",\n  ") + " " + braces[1];
  }
  return braces[0] + base + " " + output.join(", ") + " " + braces[1];
}
function isArray(ar) {
  return Array.isArray(ar);
}
function isBoolean(arg) {
  return typeof arg === "boolean";
}
function isNull(arg) {
  return arg === null;
}
function isNullOrUndefined(arg) {
  return arg == null;
}
function isNumber(arg) {
  return typeof arg === "number";
}
function isString(arg) {
  return typeof arg === "string";
}
function isSymbol(arg) {
  return _typeof$1(arg) === "symbol";
}
function isUndefined(arg) {
  return arg === void 0;
}
function isRegExp(re) {
  return isObject(re) && objectToString(re) === "[object RegExp]";
}
function isObject(arg) {
  return _typeof$1(arg) === "object" && arg !== null;
}
function isDate(d) {
  return isObject(d) && objectToString(d) === "[object Date]";
}
function isError(e) {
  return isObject(e) && (objectToString(e) === "[object Error]" || e instanceof Error);
}
function isFunction(arg) {
  return typeof arg === "function";
}
function isPrimitive(arg) {
  return arg === null || typeof arg === "boolean" || typeof arg === "number" || typeof arg === "string" || _typeof$1(arg) === "symbol" || // ES6 symbol
  typeof arg === "undefined";
}
function isBuffer(maybeBuf) {
  return Buffer.isBuffer(maybeBuf);
}
function objectToString(o) {
  return Object.prototype.toString.call(o);
}
function pad(n) {
  return n < 10 ? "0" + n.toString(10) : n.toString(10);
}
var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
function timestamp$1() {
  var d = /* @__PURE__ */ new Date();
  var time = [pad(d.getHours()), pad(d.getMinutes()), pad(d.getSeconds())].join(":");
  return [d.getDate(), months[d.getMonth()], time].join(" ");
}
function log() {
  console.log("%s - %s", timestamp$1(), format.apply(null, arguments));
}
function _extend(origin, add) {
  if (!add || !isObject(add))
    return origin;
  var keys = Object.keys(add);
  var i3 = keys.length;
  while (i3--) {
    origin[keys[i3]] = add[keys[i3]];
  }
  return origin;
}
function hasOwnProperty(obj, prop) {
  return Object.prototype.hasOwnProperty.call(obj, prop);
}
var util = {
  inherits: inherits$1,
  _extend,
  log,
  isBuffer,
  isPrimitive,
  isFunction,
  isError,
  isDate,
  isObject,
  isRegExp,
  isUndefined,
  isSymbol,
  isString,
  isNumber,
  isNullOrUndefined,
  isNull,
  isBoolean,
  isArray,
  inspect,
  deprecate,
  format,
  debuglog
};
function _classCallCheck$2(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _defineProperties$2(target, props) {
  for (var i3 = 0; i3 < props.length; i3++) {
    var descriptor = props[i3];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor)
      descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}
function _createClass$2(Constructor, protoProps, staticProps) {
  if (protoProps)
    _defineProperties$2(Constructor.prototype, protoProps);
  if (staticProps)
    _defineProperties$2(Constructor, staticProps);
  return Constructor;
}
var Buffer$1 = import_buffer.default.Buffer;
var randomBytes$1 = utils.randomBytes;
var deprecate$1 = util.deprecate;
var PROCESS_UNIQUE = randomBytes$1(5);
var checkForHexRegExp = new RegExp("^[0-9a-fA-F]{24}$");
var hasBufferType = false;
try {
  if (Buffer$1 && Buffer$1.from)
    hasBufferType = true;
} catch (err) {
  hasBufferType = false;
}
var hexTable = [];
for (_i = 0; _i < 256; _i++) {
  hexTable[_i] = (_i <= 15 ? "0" : "") + _i.toString(16);
}
var _i;
var decodeLookup = [];
var i = 0;
while (i < 10) {
  decodeLookup[48 + i] = i++;
}
while (i < 16) {
  decodeLookup[65 - 10 + i] = decodeLookup[97 - 10 + i] = i++;
}
var _Buffer = Buffer$1;
function convertToHex(bytes) {
  return bytes.toString("hex");
}
function makeObjectIdError(invalidString, index) {
  var invalidCharacter = invalidString[index];
  return new TypeError('ObjectId string "'.concat(invalidString, '" contains invalid character "').concat(invalidCharacter, '" with character code (').concat(invalidString.charCodeAt(index), "). All character codes for a non-hex string must be less than 256."));
}
var ObjectId = function() {
  function ObjectId5(id) {
    _classCallCheck$2(this, ObjectId5);
    if (id instanceof ObjectId5)
      return id;
    if (id == null || typeof id === "number") {
      this.id = ObjectId5.generate(id);
      if (ObjectId5.cacheHexString)
        this.__id = this.toString("hex");
      return;
    }
    var valid = ObjectId5.isValid(id);
    if (!valid && id != null) {
      throw new TypeError("Argument passed in must be a single String of 12 bytes or a string of 24 hex characters");
    } else if (valid && typeof id === "string" && id.length === 24 && hasBufferType) {
      return new ObjectId5(Buffer$1.from(id, "hex"));
    } else if (valid && typeof id === "string" && id.length === 24) {
      return ObjectId5.createFromHexString(id);
    } else if (id != null && id.length === 12) {
      this.id = id;
    } else if (id != null && id.toHexString) {
      return ObjectId5.createFromHexString(id.toHexString());
    } else {
      throw new TypeError("Argument passed in must be a single String of 12 bytes or a string of 24 hex characters");
    }
    if (ObjectId5.cacheHexString)
      this.__id = this.toString("hex");
  }
  _createClass$2(ObjectId5, [{
    key: "toHexString",
    value: function toHexString() {
      if (ObjectId5.cacheHexString && this.__id)
        return this.__id;
      var hexString = "";
      if (!this.id || !this.id.length) {
        throw new TypeError("invalid ObjectId, ObjectId.id must be either a string or a Buffer, but is [" + JSON.stringify(this.id) + "]");
      }
      if (this.id instanceof _Buffer) {
        hexString = convertToHex(this.id);
        if (ObjectId5.cacheHexString)
          this.__id = hexString;
        return hexString;
      }
      for (var _i2 = 0; _i2 < this.id.length; _i2++) {
        var hexChar = hexTable[this.id.charCodeAt(_i2)];
        if (typeof hexChar !== "string") {
          throw makeObjectIdError(this.id, _i2);
        }
        hexString += hexChar;
      }
      if (ObjectId5.cacheHexString)
        this.__id = hexString;
      return hexString;
    }
    /**
     * Update the ObjectId index used in generating new ObjectId's on the driver
     *
     * @method
     * @return {number} returns next index value.
     * @ignore
     */
  }, {
    key: "toString",
    /**
     * Converts the id into a 24 byte hex string for printing
     *
     * @param {String} format The Buffer toString format parameter.
     * @return {String} return the 24 byte hex string representation.
     * @ignore
     */
    value: function toString(format3) {
      if (this.id && this.id.copy) {
        return this.id.toString(typeof format3 === "string" ? format3 : "hex");
      }
      return this.toHexString();
    }
    /**
     * Converts to its JSON representation.
     *
     * @return {String} return the 24 byte hex string representation.
     * @ignore
     */
  }, {
    key: "toJSON",
    value: function toJSON() {
      return this.toHexString();
    }
    /**
     * Compares the equality of this ObjectId with `otherID`.
     *
     * @method
     * @param {object} otherId ObjectId instance to compare against.
     * @return {boolean} the result of comparing two ObjectId's
     */
  }, {
    key: "equals",
    value: function equals(otherId) {
      if (otherId instanceof ObjectId5) {
        return this.toString() === otherId.toString();
      }
      if (typeof otherId === "string" && ObjectId5.isValid(otherId) && otherId.length === 12 && this.id instanceof _Buffer) {
        return otherId === this.id.toString("binary");
      }
      if (typeof otherId === "string" && ObjectId5.isValid(otherId) && otherId.length === 24) {
        return otherId.toLowerCase() === this.toHexString();
      }
      if (typeof otherId === "string" && ObjectId5.isValid(otherId) && otherId.length === 12) {
        return otherId === this.id;
      }
      if (otherId != null && (otherId instanceof ObjectId5 || otherId.toHexString)) {
        return otherId.toHexString() === this.toHexString();
      }
      return false;
    }
    /**
     * Returns the generation date (accurate up to the second) that this ID was generated.
     *
     * @method
     * @return {Date} the generation date
     */
  }, {
    key: "getTimestamp",
    value: function getTimestamp() {
      var timestamp3 = /* @__PURE__ */ new Date();
      var time = this.id.readUInt32BE(0);
      timestamp3.setTime(Math.floor(time) * 1e3);
      return timestamp3;
    }
    /**
     * @ignore
     */
  }, {
    key: "toExtendedJSON",
    /**
     * @ignore
     */
    value: function toExtendedJSON() {
      if (this.toHexString)
        return {
          $oid: this.toHexString()
        };
      return {
        $oid: this.toString("hex")
      };
    }
    /**
     * @ignore
     */
  }], [{
    key: "getInc",
    value: function getInc() {
      return ObjectId5.index = (ObjectId5.index + 1) % 16777215;
    }
    /**
     * Generate a 12 byte id buffer used in ObjectId's
     *
     * @method
     * @param {number} [time] optional parameter allowing to pass in a second based timestamp.
     * @return {Buffer} return the 12 byte id buffer string.
     */
  }, {
    key: "generate",
    value: function generate(time) {
      if ("number" !== typeof time) {
        time = ~~(Date.now() / 1e3);
      }
      var inc = ObjectId5.getInc();
      var buffer$$1 = Buffer$1.alloc(12);
      buffer$$1[3] = time & 255;
      buffer$$1[2] = time >> 8 & 255;
      buffer$$1[1] = time >> 16 & 255;
      buffer$$1[0] = time >> 24 & 255;
      buffer$$1[4] = PROCESS_UNIQUE[0];
      buffer$$1[5] = PROCESS_UNIQUE[1];
      buffer$$1[6] = PROCESS_UNIQUE[2];
      buffer$$1[7] = PROCESS_UNIQUE[3];
      buffer$$1[8] = PROCESS_UNIQUE[4];
      buffer$$1[11] = inc & 255;
      buffer$$1[10] = inc >> 8 & 255;
      buffer$$1[9] = inc >> 16 & 255;
      return buffer$$1;
    }
  }, {
    key: "createPk",
    value: function createPk() {
      return new ObjectId5();
    }
    /**
     * Creates an ObjectId from a second based number, with the rest of the ObjectId zeroed out. Used for comparisons or sorting the ObjectId.
     *
     * @method
     * @param {number} time an integer number representing a number of seconds.
     * @return {ObjectId} return the created ObjectId
     */
  }, {
    key: "createFromTime",
    value: function createFromTime(time) {
      var buffer$$1 = Buffer$1.from([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
      buffer$$1[3] = time & 255;
      buffer$$1[2] = time >> 8 & 255;
      buffer$$1[1] = time >> 16 & 255;
      buffer$$1[0] = time >> 24 & 255;
      return new ObjectId5(buffer$$1);
    }
    /**
     * Creates an ObjectId from a hex string representation of an ObjectId.
     *
     * @method
     * @param {string} hexString create a ObjectId from a passed in 24 byte hexstring.
     * @return {ObjectId} return the created ObjectId
     */
  }, {
    key: "createFromHexString",
    value: function createFromHexString(string) {
      if (typeof string === "undefined" || string != null && string.length !== 24) {
        throw new TypeError("Argument passed in must be a single String of 12 bytes or a string of 24 hex characters");
      }
      if (hasBufferType)
        return new ObjectId5(Buffer$1.from(string, "hex"));
      var array = new _Buffer(12);
      var n = 0;
      var i3 = 0;
      while (i3 < 24) {
        array[n++] = decodeLookup[string.charCodeAt(i3++)] << 4 | decodeLookup[string.charCodeAt(i3++)];
      }
      return new ObjectId5(array);
    }
    /**
     * Checks if a value is a valid bson ObjectId
     *
     * @method
     * @return {boolean} return true if the value is a valid bson ObjectId, return false otherwise.
     */
  }, {
    key: "isValid",
    value: function isValid(id) {
      if (id == null)
        return false;
      if (typeof id === "number") {
        return true;
      }
      if (typeof id === "string") {
        return id.length === 12 || id.length === 24 && checkForHexRegExp.test(id);
      }
      if (id instanceof ObjectId5) {
        return true;
      }
      if (id instanceof _Buffer && id.length === 12) {
        return true;
      }
      if (id.toHexString) {
        return id.id.length === 12 || id.id.length === 24 && checkForHexRegExp.test(id.id);
      }
      return false;
    }
  }, {
    key: "fromExtendedJSON",
    value: function fromExtendedJSON(doc) {
      return new ObjectId5(doc.$oid);
    }
  }]);
  return ObjectId5;
}();
ObjectId.get_inc = deprecate$1(function() {
  return ObjectId.getInc();
}, "Please use the static `ObjectId.getInc()` instead");
ObjectId.prototype.get_inc = deprecate$1(function() {
  return ObjectId.getInc();
}, "Please use the static `ObjectId.getInc()` instead");
ObjectId.prototype.getInc = deprecate$1(function() {
  return ObjectId.getInc();
}, "Please use the static `ObjectId.getInc()` instead");
ObjectId.prototype.generate = deprecate$1(function(time) {
  return ObjectId.generate(time);
}, "Please use the static `ObjectId.generate(time)` instead");
Object.defineProperty(ObjectId.prototype, "generationTime", {
  enumerable: true,
  get: function get() {
    return this.id[3] | this.id[2] << 8 | this.id[1] << 16 | this.id[0] << 24;
  },
  set: function set(value2) {
    this.id[3] = value2 & 255;
    this.id[2] = value2 >> 8 & 255;
    this.id[1] = value2 >> 16 & 255;
    this.id[0] = value2 >> 24 & 255;
  }
});
ObjectId.prototype[util.inspect.custom || "inspect"] = ObjectId.prototype.toString;
ObjectId.index = ~~(Math.random() * 16777215);
Object.defineProperty(ObjectId.prototype, "_bsontype", {
  value: "ObjectID"
});
var objectid = ObjectId;
function _classCallCheck$3(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _defineProperties$3(target, props) {
  for (var i3 = 0; i3 < props.length; i3++) {
    var descriptor = props[i3];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor)
      descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}
function _createClass$3(Constructor, protoProps, staticProps) {
  if (protoProps)
    _defineProperties$3(Constructor.prototype, protoProps);
  if (staticProps)
    _defineProperties$3(Constructor, staticProps);
  return Constructor;
}
function alphabetize(str) {
  return str.split("").sort().join("");
}
var BSONRegExp = function() {
  function BSONRegExp5(pattern, options) {
    _classCallCheck$3(this, BSONRegExp5);
    this.pattern = pattern || "";
    this.options = options ? alphabetize(options) : "";
    for (var i3 = 0; i3 < this.options.length; i3++) {
      if (!(this.options[i3] === "i" || this.options[i3] === "m" || this.options[i3] === "x" || this.options[i3] === "l" || this.options[i3] === "s" || this.options[i3] === "u")) {
        throw new Error("The regular expression option [".concat(this.options[i3], "] is not supported"));
      }
    }
  }
  _createClass$3(BSONRegExp5, [{
    key: "toExtendedJSON",
    value: function toExtendedJSON() {
      return {
        $regularExpression: {
          pattern: this.pattern,
          options: this.options
        }
      };
    }
    /**
     * @ignore
     */
  }], [{
    key: "fromExtendedJSON",
    value: function fromExtendedJSON(doc) {
      return new BSONRegExp5(doc.$regularExpression.pattern, doc.$regularExpression.options.split("").sort().join(""));
    }
  }]);
  return BSONRegExp5;
}();
Object.defineProperty(BSONRegExp.prototype, "_bsontype", {
  value: "BSONRegExp"
});
var regexp = BSONRegExp;
function _classCallCheck$4(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _defineProperties$4(target, props) {
  for (var i3 = 0; i3 < props.length; i3++) {
    var descriptor = props[i3];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor)
      descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}
function _createClass$4(Constructor, protoProps, staticProps) {
  if (protoProps)
    _defineProperties$4(Constructor.prototype, protoProps);
  if (staticProps)
    _defineProperties$4(Constructor, staticProps);
  return Constructor;
}
var BSONSymbol = function() {
  function BSONSymbol3(value2) {
    _classCallCheck$4(this, BSONSymbol3);
    this.value = value2;
  }
  _createClass$4(BSONSymbol3, [{
    key: "valueOf",
    value: function valueOf() {
      return this.value;
    }
    /**
     * @ignore
     */
  }, {
    key: "toString",
    value: function toString() {
      return this.value;
    }
    /**
     * @ignore
     */
  }, {
    key: "inspect",
    value: function inspect3() {
      return this.value;
    }
    /**
     * @ignore
     */
  }, {
    key: "toJSON",
    value: function toJSON() {
      return this.value;
    }
    /**
     * @ignore
     */
  }, {
    key: "toExtendedJSON",
    value: function toExtendedJSON() {
      return {
        $symbol: this.value
      };
    }
    /**
     * @ignore
     */
  }], [{
    key: "fromExtendedJSON",
    value: function fromExtendedJSON(doc) {
      return new BSONSymbol3(doc.$symbol);
    }
  }]);
  return BSONSymbol3;
}();
Object.defineProperty(BSONSymbol.prototype, "_bsontype", {
  value: "Symbol"
});
var symbol = BSONSymbol;
function _classCallCheck$5(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _defineProperties$5(target, props) {
  for (var i3 = 0; i3 < props.length; i3++) {
    var descriptor = props[i3];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor)
      descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}
function _createClass$5(Constructor, protoProps, staticProps) {
  if (protoProps)
    _defineProperties$5(Constructor.prototype, protoProps);
  if (staticProps)
    _defineProperties$5(Constructor, staticProps);
  return Constructor;
}
var Int32 = function() {
  function Int325(value2) {
    _classCallCheck$5(this, Int325);
    this.value = value2;
  }
  _createClass$5(Int325, [{
    key: "valueOf",
    value: function valueOf() {
      return this.value;
    }
    /**
     * @ignore
     */
  }, {
    key: "toJSON",
    value: function toJSON() {
      return this.value;
    }
    /**
     * @ignore
     */
  }, {
    key: "toExtendedJSON",
    value: function toExtendedJSON(options) {
      if (options && options.relaxed)
        return this.value;
      return {
        $numberInt: this.value.toString()
      };
    }
    /**
     * @ignore
     */
  }], [{
    key: "fromExtendedJSON",
    value: function fromExtendedJSON(doc, options) {
      return options && options.relaxed ? parseInt(doc.$numberInt, 10) : new Int325(doc.$numberInt);
    }
  }]);
  return Int325;
}();
Object.defineProperty(Int32.prototype, "_bsontype", {
  value: "Int32"
});
var int_32 = Int32;
function _classCallCheck$6(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _defineProperties$6(target, props) {
  for (var i3 = 0; i3 < props.length; i3++) {
    var descriptor = props[i3];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor)
      descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}
function _createClass$6(Constructor, protoProps, staticProps) {
  if (protoProps)
    _defineProperties$6(Constructor.prototype, protoProps);
  if (staticProps)
    _defineProperties$6(Constructor, staticProps);
  return Constructor;
}
var Code = function() {
  function Code5(code3, scope) {
    _classCallCheck$6(this, Code5);
    this.code = code3;
    this.scope = scope;
  }
  _createClass$6(Code5, [{
    key: "toJSON",
    value: function toJSON() {
      return {
        scope: this.scope,
        code: this.code
      };
    }
    /**
     * @ignore
     */
  }, {
    key: "toExtendedJSON",
    value: function toExtendedJSON() {
      if (this.scope) {
        return {
          $code: this.code,
          $scope: this.scope
        };
      }
      return {
        $code: this.code
      };
    }
    /**
     * @ignore
     */
  }], [{
    key: "fromExtendedJSON",
    value: function fromExtendedJSON(doc) {
      return new Code5(doc.$code, doc.$scope);
    }
  }]);
  return Code5;
}();
Object.defineProperty(Code.prototype, "_bsontype", {
  value: "Code"
});
var code = Code;
var Buffer$2 = import_buffer.default.Buffer;
var PARSE_STRING_REGEXP = /^(\+|-)?(\d+|(\d*\.\d*))?(E|e)?([-+])?(\d+)?$/;
var PARSE_INF_REGEXP = /^(\+|-)?(Infinity|inf)$/i;
var PARSE_NAN_REGEXP = /^(\+|-)?NaN$/i;
var EXPONENT_MAX = 6111;
var EXPONENT_MIN = -6176;
var EXPONENT_BIAS = 6176;
var MAX_DIGITS = 34;
var NAN_BUFFER = [124, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0].reverse();
var INF_NEGATIVE_BUFFER = [248, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0].reverse();
var INF_POSITIVE_BUFFER = [120, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0].reverse();
var EXPONENT_REGEX = /^([-+])?(\d+)?$/;
function isDigit(value2) {
  return !isNaN(parseInt(value2, 10));
}
function divideu128(value2) {
  var DIVISOR = long_1.fromNumber(1e3 * 1e3 * 1e3);
  var _rem = long_1.fromNumber(0);
  if (!value2.parts[0] && !value2.parts[1] && !value2.parts[2] && !value2.parts[3]) {
    return {
      quotient: value2,
      rem: _rem
    };
  }
  for (var i3 = 0; i3 <= 3; i3++) {
    _rem = _rem.shiftLeft(32);
    _rem = _rem.add(new long_1(value2.parts[i3], 0));
    value2.parts[i3] = _rem.div(DIVISOR).low;
    _rem = _rem.modulo(DIVISOR);
  }
  return {
    quotient: value2,
    rem: _rem
  };
}
function multiply64x2(left, right) {
  if (!left && !right) {
    return {
      high: long_1.fromNumber(0),
      low: long_1.fromNumber(0)
    };
  }
  var leftHigh = left.shiftRightUnsigned(32);
  var leftLow = new long_1(left.getLowBits(), 0);
  var rightHigh = right.shiftRightUnsigned(32);
  var rightLow = new long_1(right.getLowBits(), 0);
  var productHigh = leftHigh.multiply(rightHigh);
  var productMid = leftHigh.multiply(rightLow);
  var productMid2 = leftLow.multiply(rightHigh);
  var productLow = leftLow.multiply(rightLow);
  productHigh = productHigh.add(productMid.shiftRightUnsigned(32));
  productMid = new long_1(productMid.getLowBits(), 0).add(productMid2).add(productLow.shiftRightUnsigned(32));
  productHigh = productHigh.add(productMid.shiftRightUnsigned(32));
  productLow = productMid.shiftLeft(32).add(new long_1(productLow.getLowBits(), 0));
  return {
    high: productHigh,
    low: productLow
  };
}
function lessThan(left, right) {
  var uhleft = left.high >>> 0;
  var uhright = right.high >>> 0;
  if (uhleft < uhright) {
    return true;
  } else if (uhleft === uhright) {
    var ulleft = left.low >>> 0;
    var ulright = right.low >>> 0;
    if (ulleft < ulright)
      return true;
  }
  return false;
}
function invalidErr(string, message) {
  throw new TypeError('"'.concat(string, '" is not a valid Decimal128 string - ').concat(message));
}
function Decimal128(bytes) {
  this.bytes = bytes;
}
Decimal128.fromString = function(string) {
  var isNegative = false;
  var sawRadix = false;
  var foundNonZero = false;
  var significantDigits = 0;
  var nDigitsRead = 0;
  var nDigits = 0;
  var radixPosition = 0;
  var firstNonZero = 0;
  var digits = [0];
  var nDigitsStored = 0;
  var digitsInsert = 0;
  var firstDigit = 0;
  var lastDigit = 0;
  var exponent = 0;
  var i3 = 0;
  var significandHigh = [0, 0];
  var significandLow = [0, 0];
  var biasedExponent = 0;
  var index = 0;
  if (string.length >= 7e3) {
    throw new TypeError("" + string + " not a valid Decimal128 string");
  }
  var stringMatch = string.match(PARSE_STRING_REGEXP);
  var infMatch = string.match(PARSE_INF_REGEXP);
  var nanMatch = string.match(PARSE_NAN_REGEXP);
  if (!stringMatch && !infMatch && !nanMatch || string.length === 0) {
    throw new TypeError("" + string + " not a valid Decimal128 string");
  }
  if (stringMatch) {
    var unsignedNumber = stringMatch[2];
    var e = stringMatch[4];
    var expSign = stringMatch[5];
    var expNumber = stringMatch[6];
    if (e && expNumber === void 0)
      invalidErr(string, "missing exponent power");
    if (e && unsignedNumber === void 0)
      invalidErr(string, "missing exponent base");
    if (e === void 0 && (expSign || expNumber)) {
      invalidErr(string, "missing e before exponent");
    }
  }
  if (string[index] === "+" || string[index] === "-") {
    isNegative = string[index++] === "-";
  }
  if (!isDigit(string[index]) && string[index] !== ".") {
    if (string[index] === "i" || string[index] === "I") {
      return new Decimal128(Buffer$2.from(isNegative ? INF_NEGATIVE_BUFFER : INF_POSITIVE_BUFFER));
    } else if (string[index] === "N") {
      return new Decimal128(Buffer$2.from(NAN_BUFFER));
    }
  }
  while (isDigit(string[index]) || string[index] === ".") {
    if (string[index] === ".") {
      if (sawRadix)
        invalidErr(string, "contains multiple periods");
      sawRadix = true;
      index = index + 1;
      continue;
    }
    if (nDigitsStored < 34) {
      if (string[index] !== "0" || foundNonZero) {
        if (!foundNonZero) {
          firstNonZero = nDigitsRead;
        }
        foundNonZero = true;
        digits[digitsInsert++] = parseInt(string[index], 10);
        nDigitsStored = nDigitsStored + 1;
      }
    }
    if (foundNonZero)
      nDigits = nDigits + 1;
    if (sawRadix)
      radixPosition = radixPosition + 1;
    nDigitsRead = nDigitsRead + 1;
    index = index + 1;
  }
  if (sawRadix && !nDigitsRead)
    throw new TypeError("" + string + " not a valid Decimal128 string");
  if (string[index] === "e" || string[index] === "E") {
    var match = string.substr(++index).match(EXPONENT_REGEX);
    if (!match || !match[2])
      return new Decimal128(Buffer$2.from(NAN_BUFFER));
    exponent = parseInt(match[0], 10);
    index = index + match[0].length;
  }
  if (string[index])
    return new Decimal128(Buffer$2.from(NAN_BUFFER));
  firstDigit = 0;
  if (!nDigitsStored) {
    firstDigit = 0;
    lastDigit = 0;
    digits[0] = 0;
    nDigits = 1;
    nDigitsStored = 1;
    significantDigits = 0;
  } else {
    lastDigit = nDigitsStored - 1;
    significantDigits = nDigits;
    if (significantDigits !== 1) {
      while (string[firstNonZero + significantDigits - 1] === "0") {
        significantDigits = significantDigits - 1;
      }
    }
  }
  if (exponent <= radixPosition && radixPosition - exponent > 1 << 14) {
    exponent = EXPONENT_MIN;
  } else {
    exponent = exponent - radixPosition;
  }
  while (exponent > EXPONENT_MAX) {
    lastDigit = lastDigit + 1;
    if (lastDigit - firstDigit > MAX_DIGITS) {
      var digitsString = digits.join("");
      if (digitsString.match(/^0+$/)) {
        exponent = EXPONENT_MAX;
        break;
      }
      invalidErr(string, "overflow");
    }
    exponent = exponent - 1;
  }
  while (exponent < EXPONENT_MIN || nDigitsStored < nDigits) {
    if (lastDigit === 0 && significantDigits < nDigitsStored) {
      exponent = EXPONENT_MIN;
      significantDigits = 0;
      break;
    }
    if (nDigitsStored < nDigits) {
      nDigits = nDigits - 1;
    } else {
      lastDigit = lastDigit - 1;
    }
    if (exponent < EXPONENT_MAX) {
      exponent = exponent + 1;
    } else {
      var _digitsString = digits.join("");
      if (_digitsString.match(/^0+$/)) {
        exponent = EXPONENT_MAX;
        break;
      }
      invalidErr(string, "overflow");
    }
  }
  if (lastDigit - firstDigit + 1 < significantDigits) {
    var endOfString = nDigitsRead;
    if (sawRadix) {
      firstNonZero = firstNonZero + 1;
      endOfString = endOfString + 1;
    }
    if (isNegative) {
      firstNonZero = firstNonZero + 1;
      endOfString = endOfString + 1;
    }
    var roundDigit = parseInt(string[firstNonZero + lastDigit + 1], 10);
    var roundBit = 0;
    if (roundDigit >= 5) {
      roundBit = 1;
      if (roundDigit === 5) {
        roundBit = digits[lastDigit] % 2 === 1;
        for (i3 = firstNonZero + lastDigit + 2; i3 < endOfString; i3++) {
          if (parseInt(string[i3], 10)) {
            roundBit = 1;
            break;
          }
        }
      }
    }
    if (roundBit) {
      var dIdx = lastDigit;
      for (; dIdx >= 0; dIdx--) {
        if (++digits[dIdx] > 9) {
          digits[dIdx] = 0;
          if (dIdx === 0) {
            if (exponent < EXPONENT_MAX) {
              exponent = exponent + 1;
              digits[dIdx] = 1;
            } else {
              return new Decimal128(Buffer$2.from(isNegative ? INF_NEGATIVE_BUFFER : INF_POSITIVE_BUFFER));
            }
          }
        }
      }
    }
  }
  significandHigh = long_1.fromNumber(0);
  significandLow = long_1.fromNumber(0);
  if (significantDigits === 0) {
    significandHigh = long_1.fromNumber(0);
    significandLow = long_1.fromNumber(0);
  } else if (lastDigit - firstDigit < 17) {
    var _dIdx = firstDigit;
    significandLow = long_1.fromNumber(digits[_dIdx++]);
    significandHigh = new long_1(0, 0);
    for (; _dIdx <= lastDigit; _dIdx++) {
      significandLow = significandLow.multiply(long_1.fromNumber(10));
      significandLow = significandLow.add(long_1.fromNumber(digits[_dIdx]));
    }
  } else {
    var _dIdx2 = firstDigit;
    significandHigh = long_1.fromNumber(digits[_dIdx2++]);
    for (; _dIdx2 <= lastDigit - 17; _dIdx2++) {
      significandHigh = significandHigh.multiply(long_1.fromNumber(10));
      significandHigh = significandHigh.add(long_1.fromNumber(digits[_dIdx2]));
    }
    significandLow = long_1.fromNumber(digits[_dIdx2++]);
    for (; _dIdx2 <= lastDigit; _dIdx2++) {
      significandLow = significandLow.multiply(long_1.fromNumber(10));
      significandLow = significandLow.add(long_1.fromNumber(digits[_dIdx2]));
    }
  }
  var significand = multiply64x2(significandHigh, long_1.fromString("100000000000000000"));
  significand.low = significand.low.add(significandLow);
  if (lessThan(significand.low, significandLow)) {
    significand.high = significand.high.add(long_1.fromNumber(1));
  }
  biasedExponent = exponent + EXPONENT_BIAS;
  var dec = {
    low: long_1.fromNumber(0),
    high: long_1.fromNumber(0)
  };
  if (significand.high.shiftRightUnsigned(49).and(long_1.fromNumber(1)).equals(long_1.fromNumber(1))) {
    dec.high = dec.high.or(long_1.fromNumber(3).shiftLeft(61));
    dec.high = dec.high.or(long_1.fromNumber(biasedExponent).and(long_1.fromNumber(16383).shiftLeft(47)));
    dec.high = dec.high.or(significand.high.and(long_1.fromNumber(140737488355327)));
  } else {
    dec.high = dec.high.or(long_1.fromNumber(biasedExponent & 16383).shiftLeft(49));
    dec.high = dec.high.or(significand.high.and(long_1.fromNumber(562949953421311)));
  }
  dec.low = significand.low;
  if (isNegative) {
    dec.high = dec.high.or(long_1.fromString("9223372036854775808"));
  }
  var buffer$$1 = Buffer$2.alloc(16);
  index = 0;
  buffer$$1[index++] = dec.low.low & 255;
  buffer$$1[index++] = dec.low.low >> 8 & 255;
  buffer$$1[index++] = dec.low.low >> 16 & 255;
  buffer$$1[index++] = dec.low.low >> 24 & 255;
  buffer$$1[index++] = dec.low.high & 255;
  buffer$$1[index++] = dec.low.high >> 8 & 255;
  buffer$$1[index++] = dec.low.high >> 16 & 255;
  buffer$$1[index++] = dec.low.high >> 24 & 255;
  buffer$$1[index++] = dec.high.low & 255;
  buffer$$1[index++] = dec.high.low >> 8 & 255;
  buffer$$1[index++] = dec.high.low >> 16 & 255;
  buffer$$1[index++] = dec.high.low >> 24 & 255;
  buffer$$1[index++] = dec.high.high & 255;
  buffer$$1[index++] = dec.high.high >> 8 & 255;
  buffer$$1[index++] = dec.high.high >> 16 & 255;
  buffer$$1[index++] = dec.high.high >> 24 & 255;
  return new Decimal128(buffer$$1);
};
var COMBINATION_MASK = 31;
var EXPONENT_MASK = 16383;
var COMBINATION_INFINITY = 30;
var COMBINATION_NAN = 31;
Decimal128.prototype.toString = function() {
  var high;
  var midh;
  var midl;
  var low;
  var combination;
  var biased_exponent;
  var significand_digits = 0;
  var significand = new Array(36);
  for (var i3 = 0; i3 < significand.length; i3++) {
    significand[i3] = 0;
  }
  var index = 0;
  var exponent;
  var scientific_exponent;
  var is_zero = false;
  var significand_msb;
  var significand128 = {
    parts: new Array(4)
  };
  var j, k;
  var string = [];
  index = 0;
  var buffer$$1 = this.bytes;
  low = buffer$$1[index++] | buffer$$1[index++] << 8 | buffer$$1[index++] << 16 | buffer$$1[index++] << 24;
  midl = buffer$$1[index++] | buffer$$1[index++] << 8 | buffer$$1[index++] << 16 | buffer$$1[index++] << 24;
  midh = buffer$$1[index++] | buffer$$1[index++] << 8 | buffer$$1[index++] << 16 | buffer$$1[index++] << 24;
  high = buffer$$1[index++] | buffer$$1[index++] << 8 | buffer$$1[index++] << 16 | buffer$$1[index++] << 24;
  index = 0;
  var dec = {
    low: new long_1(low, midl),
    high: new long_1(midh, high)
  };
  if (dec.high.lessThan(long_1.ZERO)) {
    string.push("-");
  }
  combination = high >> 26 & COMBINATION_MASK;
  if (combination >> 3 === 3) {
    if (combination === COMBINATION_INFINITY) {
      return string.join("") + "Infinity";
    } else if (combination === COMBINATION_NAN) {
      return "NaN";
    } else {
      biased_exponent = high >> 15 & EXPONENT_MASK;
      significand_msb = 8 + (high >> 14 & 1);
    }
  } else {
    significand_msb = high >> 14 & 7;
    biased_exponent = high >> 17 & EXPONENT_MASK;
  }
  exponent = biased_exponent - EXPONENT_BIAS;
  significand128.parts[0] = (high & 16383) + ((significand_msb & 15) << 14);
  significand128.parts[1] = midh;
  significand128.parts[2] = midl;
  significand128.parts[3] = low;
  if (significand128.parts[0] === 0 && significand128.parts[1] === 0 && significand128.parts[2] === 0 && significand128.parts[3] === 0) {
    is_zero = true;
  } else {
    for (k = 3; k >= 0; k--) {
      var least_digits = 0;
      var result = divideu128(significand128);
      significand128 = result.quotient;
      least_digits = result.rem.low;
      if (!least_digits)
        continue;
      for (j = 8; j >= 0; j--) {
        significand[k * 9 + j] = least_digits % 10;
        least_digits = Math.floor(least_digits / 10);
      }
    }
  }
  if (is_zero) {
    significand_digits = 1;
    significand[index] = 0;
  } else {
    significand_digits = 36;
    while (!significand[index]) {
      significand_digits = significand_digits - 1;
      index = index + 1;
    }
  }
  scientific_exponent = significand_digits - 1 + exponent;
  if (scientific_exponent >= 34 || scientific_exponent <= -7 || exponent > 0) {
    if (significand_digits > 34) {
      string.push(0);
      if (exponent > 0)
        string.push("E+" + exponent);
      else if (exponent < 0)
        string.push("E" + exponent);
      return string.join("");
    }
    string.push(significand[index++]);
    significand_digits = significand_digits - 1;
    if (significand_digits) {
      string.push(".");
    }
    for (var _i = 0; _i < significand_digits; _i++) {
      string.push(significand[index++]);
    }
    string.push("E");
    if (scientific_exponent > 0) {
      string.push("+" + scientific_exponent);
    } else {
      string.push(scientific_exponent);
    }
  } else {
    if (exponent >= 0) {
      for (var _i2 = 0; _i2 < significand_digits; _i2++) {
        string.push(significand[index++]);
      }
    } else {
      var radix_position = significand_digits + exponent;
      if (radix_position > 0) {
        for (var _i3 = 0; _i3 < radix_position; _i3++) {
          string.push(significand[index++]);
        }
      } else {
        string.push("0");
      }
      string.push(".");
      while (radix_position++ < 0) {
        string.push("0");
      }
      for (var _i4 = 0; _i4 < significand_digits - Math.max(radix_position - 1, 0); _i4++) {
        string.push(significand[index++]);
      }
    }
  }
  return string.join("");
};
Decimal128.prototype.toJSON = function() {
  return {
    $numberDecimal: this.toString()
  };
};
Decimal128.prototype.toExtendedJSON = function() {
  return {
    $numberDecimal: this.toString()
  };
};
Decimal128.fromExtendedJSON = function(doc) {
  return Decimal128.fromString(doc.$numberDecimal);
};
Object.defineProperty(Decimal128.prototype, "_bsontype", {
  value: "Decimal128"
});
var decimal128 = Decimal128;
function _classCallCheck$7(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _defineProperties$7(target, props) {
  for (var i3 = 0; i3 < props.length; i3++) {
    var descriptor = props[i3];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor)
      descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}
function _createClass$7(Constructor, protoProps, staticProps) {
  if (protoProps)
    _defineProperties$7(Constructor.prototype, protoProps);
  if (staticProps)
    _defineProperties$7(Constructor, staticProps);
  return Constructor;
}
var MinKey = function() {
  function MinKey5() {
    _classCallCheck$7(this, MinKey5);
  }
  _createClass$7(MinKey5, [{
    key: "toExtendedJSON",
    value: function toExtendedJSON() {
      return {
        $minKey: 1
      };
    }
    /**
     * @ignore
     */
  }], [{
    key: "fromExtendedJSON",
    value: function fromExtendedJSON() {
      return new MinKey5();
    }
  }]);
  return MinKey5;
}();
Object.defineProperty(MinKey.prototype, "_bsontype", {
  value: "MinKey"
});
var min_key = MinKey;
function _classCallCheck$8(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _defineProperties$8(target, props) {
  for (var i3 = 0; i3 < props.length; i3++) {
    var descriptor = props[i3];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor)
      descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}
function _createClass$8(Constructor, protoProps, staticProps) {
  if (protoProps)
    _defineProperties$8(Constructor.prototype, protoProps);
  if (staticProps)
    _defineProperties$8(Constructor, staticProps);
  return Constructor;
}
var MaxKey = function() {
  function MaxKey5() {
    _classCallCheck$8(this, MaxKey5);
  }
  _createClass$8(MaxKey5, [{
    key: "toExtendedJSON",
    value: function toExtendedJSON() {
      return {
        $maxKey: 1
      };
    }
    /**
     * @ignore
     */
  }], [{
    key: "fromExtendedJSON",
    value: function fromExtendedJSON() {
      return new MaxKey5();
    }
  }]);
  return MaxKey5;
}();
Object.defineProperty(MaxKey.prototype, "_bsontype", {
  value: "MaxKey"
});
var max_key = MaxKey;
function _classCallCheck$9(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _defineProperties$9(target, props) {
  for (var i3 = 0; i3 < props.length; i3++) {
    var descriptor = props[i3];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor)
      descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}
function _createClass$9(Constructor, protoProps, staticProps) {
  if (protoProps)
    _defineProperties$9(Constructor.prototype, protoProps);
  if (staticProps)
    _defineProperties$9(Constructor, staticProps);
  return Constructor;
}
var DBRef = function() {
  function DBRef5(collection, oid, db, fields) {
    _classCallCheck$9(this, DBRef5);
    var parts = collection.split(".");
    if (parts.length === 2) {
      db = parts.shift();
      collection = parts.shift();
    }
    this.collection = collection;
    this.oid = oid;
    this.db = db;
    this.fields = fields || {};
  }
  _createClass$9(DBRef5, [{
    key: "toJSON",
    value: function toJSON() {
      var o = Object.assign({
        $ref: this.collection,
        $id: this.oid
      }, this.fields);
      if (this.db != null)
        o.$db = this.db;
      return o;
    }
    /**
     * @ignore
     */
  }, {
    key: "toExtendedJSON",
    value: function toExtendedJSON() {
      var o = {
        $ref: this.collection,
        $id: this.oid
      };
      if (this.db)
        o.$db = this.db;
      o = Object.assign(o, this.fields);
      return o;
    }
    /**
     * @ignore
     */
  }], [{
    key: "fromExtendedJSON",
    value: function fromExtendedJSON(doc) {
      var copy = Object.assign({}, doc);
      ["$ref", "$id", "$db"].forEach(function(k) {
        return delete copy[k];
      });
      return new DBRef5(doc.$ref, doc.$id, doc.$db, copy);
    }
  }]);
  return DBRef5;
}();
Object.defineProperty(DBRef.prototype, "_bsontype", {
  value: "DBRef"
});
Object.defineProperty(DBRef.prototype, "namespace", {
  get: function get2() {
    return this.collection;
  },
  set: function set2(val) {
    this.collection = val;
  },
  configurable: false
});
var db_ref = DBRef;
function _classCallCheck$a(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _defineProperties$a(target, props) {
  for (var i3 = 0; i3 < props.length; i3++) {
    var descriptor = props[i3];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor)
      descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}
function _createClass$a(Constructor, protoProps, staticProps) {
  if (protoProps)
    _defineProperties$a(Constructor.prototype, protoProps);
  if (staticProps)
    _defineProperties$a(Constructor, staticProps);
  return Constructor;
}
var Buffer$3 = import_buffer.default.Buffer;
var Binary = function() {
  function Binary5(buffer$$1, subType) {
    _classCallCheck$a(this, Binary5);
    if (buffer$$1 != null && !(typeof buffer$$1 === "string") && !Buffer$3.isBuffer(buffer$$1) && !(buffer$$1 instanceof Uint8Array) && !Array.isArray(buffer$$1)) {
      throw new TypeError("only String, Buffer, Uint8Array or Array accepted");
    }
    this.sub_type = subType == null ? BSON_BINARY_SUBTYPE_DEFAULT : subType;
    this.position = 0;
    if (buffer$$1 != null && !(buffer$$1 instanceof Number)) {
      if (typeof buffer$$1 === "string") {
        if (typeof Buffer$3 !== "undefined") {
          this.buffer = Buffer$3.from(buffer$$1);
        } else if (typeof Uint8Array !== "undefined" || Array.isArray(buffer$$1)) {
          this.buffer = writeStringToArray(buffer$$1);
        } else {
          throw new TypeError("only String, Buffer, Uint8Array or Array accepted");
        }
      } else {
        this.buffer = buffer$$1;
      }
      this.position = buffer$$1.length;
    } else {
      if (typeof Buffer$3 !== "undefined") {
        this.buffer = Buffer$3.alloc(Binary5.BUFFER_SIZE);
      } else if (typeof Uint8Array !== "undefined") {
        this.buffer = new Uint8Array(new ArrayBuffer(Binary5.BUFFER_SIZE));
      } else {
        this.buffer = new Array(Binary5.BUFFER_SIZE);
      }
    }
  }
  _createClass$a(Binary5, [{
    key: "put",
    value: function put(byte_value) {
      if (byte_value["length"] != null && typeof byte_value !== "number" && byte_value.length !== 1)
        throw new TypeError("only accepts single character String, Uint8Array or Array");
      if (typeof byte_value !== "number" && byte_value < 0 || byte_value > 255)
        throw new TypeError("only accepts number in a valid unsigned byte range 0-255");
      var decoded_byte = null;
      if (typeof byte_value === "string") {
        decoded_byte = byte_value.charCodeAt(0);
      } else if (byte_value["length"] != null) {
        decoded_byte = byte_value[0];
      } else {
        decoded_byte = byte_value;
      }
      if (this.buffer.length > this.position) {
        this.buffer[this.position++] = decoded_byte;
      } else {
        if (typeof Buffer$3 !== "undefined" && Buffer$3.isBuffer(this.buffer)) {
          var buffer$$1 = Buffer$3.alloc(Binary5.BUFFER_SIZE + this.buffer.length);
          this.buffer.copy(buffer$$1, 0, 0, this.buffer.length);
          this.buffer = buffer$$1;
          this.buffer[this.position++] = decoded_byte;
        } else {
          var _buffer = null;
          if (isUint8Array(this.buffer)) {
            _buffer = new Uint8Array(new ArrayBuffer(Binary5.BUFFER_SIZE + this.buffer.length));
          } else {
            _buffer = new Array(Binary5.BUFFER_SIZE + this.buffer.length);
          }
          for (var i3 = 0; i3 < this.buffer.length; i3++) {
            _buffer[i3] = this.buffer[i3];
          }
          this.buffer = _buffer;
          this.buffer[this.position++] = decoded_byte;
        }
      }
    }
    /**
     * Writes a buffer or string to the binary.
     *
     * @method
     * @param {(Buffer|string)} string a string or buffer to be written to the Binary BSON object.
     * @param {number} offset specify the binary of where to write the content.
     * @return {null}
     */
  }, {
    key: "write",
    value: function write(string, offset) {
      offset = typeof offset === "number" ? offset : this.position;
      if (this.buffer.length < offset + string.length) {
        var buffer$$1 = null;
        if (typeof Buffer$3 !== "undefined" && Buffer$3.isBuffer(this.buffer)) {
          buffer$$1 = Buffer$3.alloc(this.buffer.length + string.length);
          this.buffer.copy(buffer$$1, 0, 0, this.buffer.length);
        } else if (isUint8Array(this.buffer)) {
          buffer$$1 = new Uint8Array(new ArrayBuffer(this.buffer.length + string.length));
          for (var i3 = 0; i3 < this.position; i3++) {
            buffer$$1[i3] = this.buffer[i3];
          }
        }
        this.buffer = buffer$$1;
      }
      if (typeof Buffer$3 !== "undefined" && Buffer$3.isBuffer(string) && Buffer$3.isBuffer(this.buffer)) {
        string.copy(this.buffer, offset, 0, string.length);
        this.position = offset + string.length > this.position ? offset + string.length : this.position;
      } else if (typeof Buffer$3 !== "undefined" && typeof string === "string" && Buffer$3.isBuffer(this.buffer)) {
        this.buffer.write(string, offset, "binary");
        this.position = offset + string.length > this.position ? offset + string.length : this.position;
      } else if (isUint8Array(string) || Array.isArray(string) && typeof string !== "string") {
        for (var _i = 0; _i < string.length; _i++) {
          this.buffer[offset++] = string[_i];
        }
        this.position = offset > this.position ? offset : this.position;
      } else if (typeof string === "string") {
        for (var _i2 = 0; _i2 < string.length; _i2++) {
          this.buffer[offset++] = string.charCodeAt(_i2);
        }
        this.position = offset > this.position ? offset : this.position;
      }
    }
    /**
     * Reads **length** bytes starting at **position**.
     *
     * @method
     * @param {number} position read from the given position in the Binary.
     * @param {number} length the number of bytes to read.
     * @return {Buffer}
     */
  }, {
    key: "read",
    value: function read(position, length) {
      length = length && length > 0 ? length : this.position;
      if (this.buffer["slice"]) {
        return this.buffer.slice(position, position + length);
      }
      var buffer$$1 = typeof Uint8Array !== "undefined" ? new Uint8Array(new ArrayBuffer(length)) : new Array(length);
      for (var i3 = 0; i3 < length; i3++) {
        buffer$$1[i3] = this.buffer[position++];
      }
      return buffer$$1;
    }
    /**
     * Returns the value of this binary as a string.
     *
     * @method
     * @return {string}
     */
  }, {
    key: "value",
    value: function value2(asRaw) {
      asRaw = asRaw == null ? false : asRaw;
      if (asRaw && typeof Buffer$3 !== "undefined" && Buffer$3.isBuffer(this.buffer) && this.buffer.length === this.position)
        return this.buffer;
      if (typeof Buffer$3 !== "undefined" && Buffer$3.isBuffer(this.buffer)) {
        return asRaw ? this.buffer.slice(0, this.position) : this.buffer.toString("binary", 0, this.position);
      } else {
        if (asRaw) {
          if (this.buffer["slice"] != null) {
            return this.buffer.slice(0, this.position);
          } else {
            var newBuffer = isUint8Array(this.buffer) ? new Uint8Array(new ArrayBuffer(this.position)) : new Array(this.position);
            for (var i3 = 0; i3 < this.position; i3++) {
              newBuffer[i3] = this.buffer[i3];
            }
            return newBuffer;
          }
        } else {
          return convertArraytoUtf8BinaryString(this.buffer, 0, this.position);
        }
      }
    }
    /**
     * Length.
     *
     * @method
     * @return {number} the length of the binary.
     */
  }, {
    key: "length",
    value: function length() {
      return this.position;
    }
    /**
     * @ignore
     */
  }, {
    key: "toJSON",
    value: function toJSON() {
      return this.buffer != null ? this.buffer.toString("base64") : "";
    }
    /**
     * @ignore
     */
  }, {
    key: "toString",
    value: function toString(format3) {
      return this.buffer != null ? this.buffer.slice(0, this.position).toString(format3) : "";
    }
    /**
     * @ignore
     */
  }, {
    key: "toExtendedJSON",
    value: function toExtendedJSON() {
      var base64String = Buffer$3.isBuffer(this.buffer) ? this.buffer.toString("base64") : Buffer$3.from(this.buffer).toString("base64");
      var subType = Number(this.sub_type).toString(16);
      return {
        $binary: {
          base64: base64String,
          subType: subType.length === 1 ? "0" + subType : subType
        }
      };
    }
    /**
     * @ignore
     */
  }], [{
    key: "fromExtendedJSON",
    value: function fromExtendedJSON(doc) {
      var type = doc.$binary.subType ? parseInt(doc.$binary.subType, 16) : 0;
      var data = Buffer$3.from(doc.$binary.base64, "base64");
      return new Binary5(data, type);
    }
  }]);
  return Binary5;
}();
var BSON_BINARY_SUBTYPE_DEFAULT = 0;
function isUint8Array(obj) {
  return Object.prototype.toString.call(obj) === "[object Uint8Array]";
}
function writeStringToArray(data) {
  var buffer$$1 = typeof Uint8Array !== "undefined" ? new Uint8Array(new ArrayBuffer(data.length)) : new Array(data.length);
  for (var i3 = 0; i3 < data.length; i3++) {
    buffer$$1[i3] = data.charCodeAt(i3);
  }
  return buffer$$1;
}
function convertArraytoUtf8BinaryString(byteArray, startIndex, endIndex) {
  var result = "";
  for (var i3 = startIndex; i3 < endIndex; i3++) {
    result = result + String.fromCharCode(byteArray[i3]);
  }
  return result;
}
Binary.BUFFER_SIZE = 256;
Binary.SUBTYPE_DEFAULT = 0;
Binary.SUBTYPE_FUNCTION = 1;
Binary.SUBTYPE_BYTE_ARRAY = 2;
Binary.SUBTYPE_UUID_OLD = 3;
Binary.SUBTYPE_UUID = 4;
Binary.SUBTYPE_MD5 = 5;
Binary.SUBTYPE_USER_DEFINED = 128;
Object.defineProperty(Binary.prototype, "_bsontype", {
  value: "Binary"
});
var binary = Binary;
var constants = {
  // BSON MAX VALUES
  BSON_INT32_MAX: 2147483647,
  BSON_INT32_MIN: -2147483648,
  BSON_INT64_MAX: Math.pow(2, 63) - 1,
  BSON_INT64_MIN: -Math.pow(2, 63),
  // JS MAX PRECISE VALUES
  JS_INT_MAX: 9007199254740992,
  // Any integer up to 2^53 can be precisely represented by a double.
  JS_INT_MIN: -9007199254740992,
  // Any integer down to -2^53 can be precisely represented by a double.
  /**
   * Number BSON Type
   *
   * @classconstant BSON_DATA_NUMBER
   **/
  BSON_DATA_NUMBER: 1,
  /**
   * String BSON Type
   *
   * @classconstant BSON_DATA_STRING
   **/
  BSON_DATA_STRING: 2,
  /**
   * Object BSON Type
   *
   * @classconstant BSON_DATA_OBJECT
   **/
  BSON_DATA_OBJECT: 3,
  /**
   * Array BSON Type
   *
   * @classconstant BSON_DATA_ARRAY
   **/
  BSON_DATA_ARRAY: 4,
  /**
   * Binary BSON Type
   *
   * @classconstant BSON_DATA_BINARY
   **/
  BSON_DATA_BINARY: 5,
  /**
   * Binary BSON Type
   *
   * @classconstant BSON_DATA_UNDEFINED
   **/
  BSON_DATA_UNDEFINED: 6,
  /**
   * ObjectId BSON Type
   *
   * @classconstant BSON_DATA_OID
   **/
  BSON_DATA_OID: 7,
  /**
   * Boolean BSON Type
   *
   * @classconstant BSON_DATA_BOOLEAN
   **/
  BSON_DATA_BOOLEAN: 8,
  /**
   * Date BSON Type
   *
   * @classconstant BSON_DATA_DATE
   **/
  BSON_DATA_DATE: 9,
  /**
   * null BSON Type
   *
   * @classconstant BSON_DATA_NULL
   **/
  BSON_DATA_NULL: 10,
  /**
   * RegExp BSON Type
   *
   * @classconstant BSON_DATA_REGEXP
   **/
  BSON_DATA_REGEXP: 11,
  /**
   * Code BSON Type
   *
   * @classconstant BSON_DATA_DBPOINTER
   **/
  BSON_DATA_DBPOINTER: 12,
  /**
   * Code BSON Type
   *
   * @classconstant BSON_DATA_CODE
   **/
  BSON_DATA_CODE: 13,
  /**
   * Symbol BSON Type
   *
   * @classconstant BSON_DATA_SYMBOL
   **/
  BSON_DATA_SYMBOL: 14,
  /**
   * Code with Scope BSON Type
   *
   * @classconstant BSON_DATA_CODE_W_SCOPE
   **/
  BSON_DATA_CODE_W_SCOPE: 15,
  /**
   * 32 bit Integer BSON Type
   *
   * @classconstant BSON_DATA_INT
   **/
  BSON_DATA_INT: 16,
  /**
   * Timestamp BSON Type
   *
   * @classconstant BSON_DATA_TIMESTAMP
   **/
  BSON_DATA_TIMESTAMP: 17,
  /**
   * Long BSON Type
   *
   * @classconstant BSON_DATA_LONG
   **/
  BSON_DATA_LONG: 18,
  /**
   * Long BSON Type
   *
   * @classconstant BSON_DATA_DECIMAL128
   **/
  BSON_DATA_DECIMAL128: 19,
  /**
   * MinKey BSON Type
   *
   * @classconstant BSON_DATA_MIN_KEY
   **/
  BSON_DATA_MIN_KEY: 255,
  /**
   * MaxKey BSON Type
   *
   * @classconstant BSON_DATA_MAX_KEY
   **/
  BSON_DATA_MAX_KEY: 127,
  /**
   * Binary Default Type
   *
   * @classconstant BSON_BINARY_SUBTYPE_DEFAULT
   **/
  BSON_BINARY_SUBTYPE_DEFAULT: 0,
  /**
   * Binary Function Type
   *
   * @classconstant BSON_BINARY_SUBTYPE_FUNCTION
   **/
  BSON_BINARY_SUBTYPE_FUNCTION: 1,
  /**
   * Binary Byte Array Type
   *
   * @classconstant BSON_BINARY_SUBTYPE_BYTE_ARRAY
   **/
  BSON_BINARY_SUBTYPE_BYTE_ARRAY: 2,
  /**
   * Binary UUID Type
   *
   * @classconstant BSON_BINARY_SUBTYPE_UUID
   **/
  BSON_BINARY_SUBTYPE_UUID: 3,
  /**
   * Binary MD5 Type
   *
   * @classconstant BSON_BINARY_SUBTYPE_MD5
   **/
  BSON_BINARY_SUBTYPE_MD5: 4,
  /**
   * Binary User Defined Type
   *
   * @classconstant BSON_BINARY_SUBTYPE_USER_DEFINED
   **/
  BSON_BINARY_SUBTYPE_USER_DEFINED: 128
};
function _typeof$2(obj) {
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof$2 = function _typeof3(obj2) {
      return typeof obj2;
    };
  } else {
    _typeof$2 = function _typeof3(obj2) {
      return obj2 && typeof Symbol === "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
    };
  }
  return _typeof$2(obj);
}
var keysToCodecs = {
  $oid: objectid,
  $binary: binary,
  $symbol: symbol,
  $numberInt: int_32,
  $numberDecimal: decimal128,
  $numberDouble: double_1,
  $numberLong: long_1,
  $minKey: min_key,
  $maxKey: max_key,
  $regularExpression: regexp,
  $timestamp: timestamp
};
function deserializeValue(self2, key, value2, options) {
  if (typeof value2 === "number") {
    if (options.relaxed) {
      return value2;
    }
    if (Math.floor(value2) === value2) {
      if (value2 >= BSON_INT32_MIN && value2 <= BSON_INT32_MAX)
        return new int_32(value2);
      if (value2 >= BSON_INT64_MIN && value2 <= BSON_INT64_MAX)
        return new long_1.fromNumber(value2);
    }
    return new double_1(value2);
  }
  if (value2 == null || _typeof$2(value2) !== "object")
    return value2;
  if (value2.$undefined)
    return null;
  var keys = Object.keys(value2).filter(function(k) {
    return k.startsWith("$") && value2[k] != null;
  });
  for (var i3 = 0; i3 < keys.length; i3++) {
    var c = keysToCodecs[keys[i3]];
    if (c)
      return c.fromExtendedJSON(value2, options);
  }
  if (value2.$date != null) {
    var d = value2.$date;
    var date = /* @__PURE__ */ new Date();
    if (typeof d === "string")
      date.setTime(Date.parse(d));
    else if (long_1.isLong(d))
      date.setTime(d.toNumber());
    else if (typeof d === "number" && options.relaxed)
      date.setTime(d);
    return date;
  }
  if (value2.$code != null) {
    var copy = Object.assign({}, value2);
    if (value2.$scope) {
      copy.$scope = deserializeValue(self2, null, value2.$scope);
    }
    return code.fromExtendedJSON(value2);
  }
  if (value2.$ref != null || value2.$dbPointer != null) {
    var v = value2.$ref ? value2 : value2.$dbPointer;
    if (v instanceof db_ref)
      return v;
    var dollarKeys = Object.keys(v).filter(function(k) {
      return k.startsWith("$");
    });
    var valid = true;
    dollarKeys.forEach(function(k) {
      if (["$ref", "$id", "$db"].indexOf(k) === -1)
        valid = false;
    });
    if (valid)
      return db_ref.fromExtendedJSON(v);
  }
  return value2;
}
function parse(text, options) {
  var _this = this;
  options = Object.assign({}, {
    relaxed: true
  }, options);
  if (typeof options.relaxed === "boolean")
    options.strict = !options.relaxed;
  if (typeof options.strict === "boolean")
    options.relaxed = !options.strict;
  return JSON.parse(text, function(key, value2) {
    return deserializeValue(_this, key, value2, options);
  });
}
var BSON_INT32_MAX = 2147483647;
var BSON_INT32_MIN = -2147483648;
var BSON_INT64_MAX = 9223372036854776e3;
var BSON_INT64_MIN = -9223372036854776e3;
function stringify(value2, replacer, space, options) {
  if (space != null && _typeof$2(space) === "object") {
    options = space;
    space = 0;
  }
  if (replacer != null && _typeof$2(replacer) === "object" && !Array.isArray(replacer)) {
    options = replacer;
    replacer = null;
    space = 0;
  }
  options = Object.assign({}, {
    relaxed: true
  }, options);
  var doc = Array.isArray(value2) ? serializeArray(value2, options) : serializeDocument(value2, options);
  return JSON.stringify(doc, replacer, space);
}
function serialize(bson3, options) {
  options = options || {};
  return JSON.parse(stringify(bson3, options));
}
function deserialize(ejson, options) {
  options = options || {};
  return parse(JSON.stringify(ejson), options);
}
function serializeArray(array, options) {
  return array.map(function(v) {
    return serializeValue(v, options);
  });
}
function getISOString(date) {
  var isoStr = date.toISOString();
  return date.getUTCMilliseconds() !== 0 ? isoStr : isoStr.slice(0, -5) + "Z";
}
function serializeValue(value2, options) {
  if (Array.isArray(value2))
    return serializeArray(value2, options);
  if (value2 === void 0)
    return null;
  if (value2 instanceof Date) {
    var dateNum = value2.getTime(), inRange = dateNum > -1 && dateNum < 2534023188e5;
    return options.relaxed && inRange ? {
      $date: getISOString(value2)
    } : {
      $date: {
        $numberLong: value2.getTime().toString()
      }
    };
  }
  if (typeof value2 === "number" && !options.relaxed) {
    if (Math.floor(value2) === value2) {
      var int32Range = value2 >= BSON_INT32_MIN && value2 <= BSON_INT32_MAX, int64Range = value2 >= BSON_INT64_MIN && value2 <= BSON_INT64_MAX;
      if (int32Range)
        return {
          $numberInt: value2.toString()
        };
      if (int64Range)
        return {
          $numberLong: value2.toString()
        };
    }
    return {
      $numberDouble: value2.toString()
    };
  }
  if (value2 instanceof RegExp) {
    var flags = value2.flags;
    if (flags === void 0) {
      flags = value2.toString().match(/[gimuy]*$/)[0];
    }
    var rx = new regexp(value2.source, flags);
    return rx.toExtendedJSON();
  }
  if (value2 != null && _typeof$2(value2) === "object")
    return serializeDocument(value2, options);
  return value2;
}
var BSON_TYPE_MAPPINGS = {
  Binary: function Binary2(o) {
    return new binary(o.value(), o.subtype);
  },
  Code: function Code2(o) {
    return new code(o.code, o.scope);
  },
  DBRef: function DBRef2(o) {
    return new db_ref(o.collection || o.namespace, o.oid, o.db, o.fields);
  },
  // "namespace" for 1.x library backwards compat
  Decimal128: function Decimal1282(o) {
    return new decimal128(o.bytes);
  },
  Double: function Double2(o) {
    return new double_1(o.value);
  },
  Int32: function Int322(o) {
    return new int_32(o.value);
  },
  Long: function Long(o) {
    return long_1.fromBits(
      // underscore variants for 1.x backwards compatibility
      o.low != null ? o.low : o.low_,
      o.low != null ? o.high : o.high_,
      o.low != null ? o.unsigned : o.unsigned_
    );
  },
  MaxKey: function MaxKey2() {
    return new max_key();
  },
  MinKey: function MinKey2() {
    return new min_key();
  },
  ObjectID: function ObjectID(o) {
    return new objectid(o);
  },
  ObjectId: function ObjectId2(o) {
    return new objectid(o);
  },
  // support 4.0.0/4.0.1 before _bsontype was reverted back to ObjectID
  BSONRegExp: function BSONRegExp2(o) {
    return new regexp(o.pattern, o.options);
  },
  Symbol: function Symbol2(o) {
    return new symbol(o.value);
  },
  Timestamp: function Timestamp2(o) {
    return timestamp.fromBits(o.low, o.high);
  }
};
function serializeDocument(doc, options) {
  if (doc == null || _typeof$2(doc) !== "object")
    throw new Error("not an object instance");
  var bsontype = doc._bsontype;
  if (typeof bsontype === "undefined") {
    var _doc = {};
    for (var name in doc) {
      _doc[name] = serializeValue(doc[name], options);
    }
    return _doc;
  } else if (typeof bsontype === "string") {
    var _doc2 = doc;
    if (typeof _doc2.toExtendedJSON !== "function") {
      var mapper = BSON_TYPE_MAPPINGS[bsontype];
      if (!mapper) {
        throw new TypeError("Unrecognized or invalid _bsontype: " + bsontype);
      }
      _doc2 = mapper(_doc2);
    }
    if (bsontype === "Code" && _doc2.scope) {
      _doc2 = new code(_doc2.code, serializeValue(_doc2.scope, options));
    } else if (bsontype === "DBRef" && _doc2.oid) {
      _doc2 = new db_ref(_doc2.collection, serializeValue(_doc2.oid, options), _doc2.db, _doc2.fields);
    }
    return _doc2.toExtendedJSON(options);
  } else {
    throw new Error("_bsontype must be a string, but was: " + _typeof$2(bsontype));
  }
}
var extended_json = {
  parse,
  deserialize,
  serialize,
  stringify
};
var FIRST_BIT = 128;
var FIRST_TWO_BITS = 192;
var FIRST_THREE_BITS = 224;
var FIRST_FOUR_BITS = 240;
var FIRST_FIVE_BITS = 248;
var TWO_BIT_CHAR = 192;
var THREE_BIT_CHAR = 224;
var FOUR_BIT_CHAR = 240;
var CONTINUING_CHAR = 128;
function validateUtf8(bytes, start, end) {
  var continuation = 0;
  for (var i3 = start; i3 < end; i3 += 1) {
    var byte = bytes[i3];
    if (continuation) {
      if ((byte & FIRST_TWO_BITS) !== CONTINUING_CHAR) {
        return false;
      }
      continuation -= 1;
    } else if (byte & FIRST_BIT) {
      if ((byte & FIRST_THREE_BITS) === TWO_BIT_CHAR) {
        continuation = 1;
      } else if ((byte & FIRST_FOUR_BITS) === THREE_BIT_CHAR) {
        continuation = 2;
      } else if ((byte & FIRST_FIVE_BITS) === FOUR_BIT_CHAR) {
        continuation = 3;
      } else {
        return false;
      }
    }
  }
  return !continuation;
}
var validateUtf8_1 = validateUtf8;
var validate_utf8 = {
  validateUtf8: validateUtf8_1
};
var Buffer$4 = import_buffer.default.Buffer;
var validateUtf8$1 = validate_utf8.validateUtf8;
var JS_INT_MAX_LONG = long_1.fromNumber(constants.JS_INT_MAX);
var JS_INT_MIN_LONG = long_1.fromNumber(constants.JS_INT_MIN);
var functionCache2 = {};
function deserialize$1(buffer$$1, options, isArray3) {
  options = options == null ? {} : options;
  var index = options && options.index ? options.index : 0;
  var size = buffer$$1[index] | buffer$$1[index + 1] << 8 | buffer$$1[index + 2] << 16 | buffer$$1[index + 3] << 24;
  if (size < 5) {
    throw new Error("bson size must be >= 5, is ".concat(size));
  }
  if (options.allowObjectSmallerThanBufferSize && buffer$$1.length < size) {
    throw new Error("buffer length ".concat(buffer$$1.length, " must be >= bson size ").concat(size));
  }
  if (!options.allowObjectSmallerThanBufferSize && buffer$$1.length !== size) {
    throw new Error("buffer length ".concat(buffer$$1.length, " must === bson size ").concat(size));
  }
  if (size + index > buffer$$1.length) {
    throw new Error("(bson size ".concat(size, " + options.index ").concat(index, " must be <= buffer length ").concat(Buffer$4.byteLength(buffer$$1), ")"));
  }
  if (buffer$$1[index + size - 1] !== 0) {
    throw new Error("One object, sized correctly, with a spot for an EOO, but the EOO isn't 0x00");
  }
  return deserializeObject(buffer$$1, index, options, isArray3);
}
function deserializeObject(buffer$$1, index, options, isArray3) {
  var evalFunctions = options["evalFunctions"] == null ? false : options["evalFunctions"];
  var cacheFunctions = options["cacheFunctions"] == null ? false : options["cacheFunctions"];
  var cacheFunctionsCrc32 = options["cacheFunctionsCrc32"] == null ? false : options["cacheFunctionsCrc32"];
  if (!cacheFunctionsCrc32)
    var crc32 = null;
  var fieldsAsRaw = options["fieldsAsRaw"] == null ? null : options["fieldsAsRaw"];
  var raw = options["raw"] == null ? false : options["raw"];
  var bsonRegExp = typeof options["bsonRegExp"] === "boolean" ? options["bsonRegExp"] : false;
  var promoteBuffers = options["promoteBuffers"] == null ? false : options["promoteBuffers"];
  var promoteLongs = options["promoteLongs"] == null ? true : options["promoteLongs"];
  var promoteValues = options["promoteValues"] == null ? true : options["promoteValues"];
  var startIndex = index;
  if (buffer$$1.length < 5)
    throw new Error("corrupt bson message < 5 bytes long");
  var size = buffer$$1[index++] | buffer$$1[index++] << 8 | buffer$$1[index++] << 16 | buffer$$1[index++] << 24;
  if (size < 5 || size > buffer$$1.length)
    throw new Error("corrupt bson message");
  var object2 = isArray3 ? [] : {};
  var arrayIndex = 0;
  var done = false;
  while (!done) {
    var elementType = buffer$$1[index++];
    if (elementType === 0)
      break;
    var i3 = index;
    while (buffer$$1[i3] !== 0 && i3 < buffer$$1.length) {
      i3++;
    }
    if (i3 >= Buffer$4.byteLength(buffer$$1))
      throw new Error("Bad BSON Document: illegal CString");
    var name = isArray3 ? arrayIndex++ : buffer$$1.toString("utf8", index, i3);
    index = i3 + 1;
    if (elementType === constants.BSON_DATA_STRING) {
      var stringSize = buffer$$1[index++] | buffer$$1[index++] << 8 | buffer$$1[index++] << 16 | buffer$$1[index++] << 24;
      if (stringSize <= 0 || stringSize > buffer$$1.length - index || buffer$$1[index + stringSize - 1] !== 0)
        throw new Error("bad string length in bson");
      if (!validateUtf8$1(buffer$$1, index, index + stringSize - 1)) {
        throw new Error("Invalid UTF-8 string in BSON document");
      }
      var s = buffer$$1.toString("utf8", index, index + stringSize - 1);
      object2[name] = s;
      index = index + stringSize;
    } else if (elementType === constants.BSON_DATA_OID) {
      var oid = Buffer$4.alloc(12);
      buffer$$1.copy(oid, 0, index, index + 12);
      object2[name] = new objectid(oid);
      index = index + 12;
    } else if (elementType === constants.BSON_DATA_INT && promoteValues === false) {
      object2[name] = new int_32(buffer$$1[index++] | buffer$$1[index++] << 8 | buffer$$1[index++] << 16 | buffer$$1[index++] << 24);
    } else if (elementType === constants.BSON_DATA_INT) {
      object2[name] = buffer$$1[index++] | buffer$$1[index++] << 8 | buffer$$1[index++] << 16 | buffer$$1[index++] << 24;
    } else if (elementType === constants.BSON_DATA_NUMBER && promoteValues === false) {
      object2[name] = new double_1(buffer$$1.readDoubleLE(index));
      index = index + 8;
    } else if (elementType === constants.BSON_DATA_NUMBER) {
      object2[name] = buffer$$1.readDoubleLE(index);
      index = index + 8;
    } else if (elementType === constants.BSON_DATA_DATE) {
      var lowBits = buffer$$1[index++] | buffer$$1[index++] << 8 | buffer$$1[index++] << 16 | buffer$$1[index++] << 24;
      var highBits = buffer$$1[index++] | buffer$$1[index++] << 8 | buffer$$1[index++] << 16 | buffer$$1[index++] << 24;
      object2[name] = new Date(new long_1(lowBits, highBits).toNumber());
    } else if (elementType === constants.BSON_DATA_BOOLEAN) {
      if (buffer$$1[index] !== 0 && buffer$$1[index] !== 1)
        throw new Error("illegal boolean type value");
      object2[name] = buffer$$1[index++] === 1;
    } else if (elementType === constants.BSON_DATA_OBJECT) {
      var _index = index;
      var objectSize = buffer$$1[index] | buffer$$1[index + 1] << 8 | buffer$$1[index + 2] << 16 | buffer$$1[index + 3] << 24;
      if (objectSize <= 0 || objectSize > buffer$$1.length - index)
        throw new Error("bad embedded document length in bson");
      if (raw) {
        object2[name] = buffer$$1.slice(index, index + objectSize);
      } else {
        object2[name] = deserializeObject(buffer$$1, _index, options, false);
      }
      index = index + objectSize;
    } else if (elementType === constants.BSON_DATA_ARRAY) {
      var _index2 = index;
      var _objectSize = buffer$$1[index] | buffer$$1[index + 1] << 8 | buffer$$1[index + 2] << 16 | buffer$$1[index + 3] << 24;
      var arrayOptions = options;
      var stopIndex = index + _objectSize;
      if (fieldsAsRaw && fieldsAsRaw[name]) {
        arrayOptions = {};
        for (var n in options) {
          arrayOptions[n] = options[n];
        }
        arrayOptions["raw"] = true;
      }
      object2[name] = deserializeObject(buffer$$1, _index2, arrayOptions, true);
      index = index + _objectSize;
      if (buffer$$1[index - 1] !== 0)
        throw new Error("invalid array terminator byte");
      if (index !== stopIndex)
        throw new Error("corrupted array bson");
    } else if (elementType === constants.BSON_DATA_UNDEFINED) {
      object2[name] = void 0;
    } else if (elementType === constants.BSON_DATA_NULL) {
      object2[name] = null;
    } else if (elementType === constants.BSON_DATA_LONG) {
      var _lowBits = buffer$$1[index++] | buffer$$1[index++] << 8 | buffer$$1[index++] << 16 | buffer$$1[index++] << 24;
      var _highBits = buffer$$1[index++] | buffer$$1[index++] << 8 | buffer$$1[index++] << 16 | buffer$$1[index++] << 24;
      var long$$1 = new long_1(_lowBits, _highBits);
      if (promoteLongs && promoteValues === true) {
        object2[name] = long$$1.lessThanOrEqual(JS_INT_MAX_LONG) && long$$1.greaterThanOrEqual(JS_INT_MIN_LONG) ? long$$1.toNumber() : long$$1;
      } else {
        object2[name] = long$$1;
      }
    } else if (elementType === constants.BSON_DATA_DECIMAL128) {
      var bytes = Buffer$4.alloc(16);
      buffer$$1.copy(bytes, 0, index, index + 16);
      index = index + 16;
      var decimal128$$1 = new decimal128(bytes);
      object2[name] = decimal128$$1.toObject ? decimal128$$1.toObject() : decimal128$$1;
    } else if (elementType === constants.BSON_DATA_BINARY) {
      var binarySize = buffer$$1[index++] | buffer$$1[index++] << 8 | buffer$$1[index++] << 16 | buffer$$1[index++] << 24;
      var totalBinarySize = binarySize;
      var subType = buffer$$1[index++];
      if (binarySize < 0)
        throw new Error("Negative binary type element size found");
      if (binarySize > Buffer$4.byteLength(buffer$$1))
        throw new Error("Binary type size larger than document size");
      if (buffer$$1["slice"] != null) {
        if (subType === binary.SUBTYPE_BYTE_ARRAY) {
          binarySize = buffer$$1[index++] | buffer$$1[index++] << 8 | buffer$$1[index++] << 16 | buffer$$1[index++] << 24;
          if (binarySize < 0)
            throw new Error("Negative binary type element size found for subtype 0x02");
          if (binarySize > totalBinarySize - 4)
            throw new Error("Binary type with subtype 0x02 contains to long binary size");
          if (binarySize < totalBinarySize - 4)
            throw new Error("Binary type with subtype 0x02 contains to short binary size");
        }
        if (promoteBuffers && promoteValues) {
          object2[name] = buffer$$1.slice(index, index + binarySize);
        } else {
          object2[name] = new binary(buffer$$1.slice(index, index + binarySize), subType);
        }
      } else {
        var _buffer = typeof Uint8Array !== "undefined" ? new Uint8Array(new ArrayBuffer(binarySize)) : new Array(binarySize);
        if (subType === binary.SUBTYPE_BYTE_ARRAY) {
          binarySize = buffer$$1[index++] | buffer$$1[index++] << 8 | buffer$$1[index++] << 16 | buffer$$1[index++] << 24;
          if (binarySize < 0)
            throw new Error("Negative binary type element size found for subtype 0x02");
          if (binarySize > totalBinarySize - 4)
            throw new Error("Binary type with subtype 0x02 contains to long binary size");
          if (binarySize < totalBinarySize - 4)
            throw new Error("Binary type with subtype 0x02 contains to short binary size");
        }
        for (i3 = 0; i3 < binarySize; i3++) {
          _buffer[i3] = buffer$$1[index + i3];
        }
        if (promoteBuffers && promoteValues) {
          object2[name] = _buffer;
        } else {
          object2[name] = new binary(_buffer, subType);
        }
      }
      index = index + binarySize;
    } else if (elementType === constants.BSON_DATA_REGEXP && bsonRegExp === false) {
      i3 = index;
      while (buffer$$1[i3] !== 0 && i3 < buffer$$1.length) {
        i3++;
      }
      if (i3 >= buffer$$1.length)
        throw new Error("Bad BSON Document: illegal CString");
      var source = buffer$$1.toString("utf8", index, i3);
      index = i3 + 1;
      i3 = index;
      while (buffer$$1[i3] !== 0 && i3 < buffer$$1.length) {
        i3++;
      }
      if (i3 >= buffer$$1.length)
        throw new Error("Bad BSON Document: illegal CString");
      var regExpOptions = buffer$$1.toString("utf8", index, i3);
      index = i3 + 1;
      var optionsArray = new Array(regExpOptions.length);
      for (i3 = 0; i3 < regExpOptions.length; i3++) {
        switch (regExpOptions[i3]) {
          case "m":
            optionsArray[i3] = "m";
            break;
          case "s":
            optionsArray[i3] = "g";
            break;
          case "i":
            optionsArray[i3] = "i";
            break;
        }
      }
      object2[name] = new RegExp(source, optionsArray.join(""));
    } else if (elementType === constants.BSON_DATA_REGEXP && bsonRegExp === true) {
      i3 = index;
      while (buffer$$1[i3] !== 0 && i3 < buffer$$1.length) {
        i3++;
      }
      if (i3 >= buffer$$1.length)
        throw new Error("Bad BSON Document: illegal CString");
      var _source = buffer$$1.toString("utf8", index, i3);
      index = i3 + 1;
      i3 = index;
      while (buffer$$1[i3] !== 0 && i3 < buffer$$1.length) {
        i3++;
      }
      if (i3 >= buffer$$1.length)
        throw new Error("Bad BSON Document: illegal CString");
      var _regExpOptions = buffer$$1.toString("utf8", index, i3);
      index = i3 + 1;
      object2[name] = new regexp(_source, _regExpOptions);
    } else if (elementType === constants.BSON_DATA_SYMBOL) {
      var _stringSize = buffer$$1[index++] | buffer$$1[index++] << 8 | buffer$$1[index++] << 16 | buffer$$1[index++] << 24;
      if (_stringSize <= 0 || _stringSize > buffer$$1.length - index || buffer$$1[index + _stringSize - 1] !== 0)
        throw new Error("bad string length in bson");
      object2[name] = buffer$$1.toString("utf8", index, index + _stringSize - 1);
      index = index + _stringSize;
    } else if (elementType === constants.BSON_DATA_TIMESTAMP) {
      var _lowBits2 = buffer$$1[index++] | buffer$$1[index++] << 8 | buffer$$1[index++] << 16 | buffer$$1[index++] << 24;
      var _highBits2 = buffer$$1[index++] | buffer$$1[index++] << 8 | buffer$$1[index++] << 16 | buffer$$1[index++] << 24;
      object2[name] = new timestamp(_lowBits2, _highBits2);
    } else if (elementType === constants.BSON_DATA_MIN_KEY) {
      object2[name] = new min_key();
    } else if (elementType === constants.BSON_DATA_MAX_KEY) {
      object2[name] = new max_key();
    } else if (elementType === constants.BSON_DATA_CODE) {
      var _stringSize2 = buffer$$1[index++] | buffer$$1[index++] << 8 | buffer$$1[index++] << 16 | buffer$$1[index++] << 24;
      if (_stringSize2 <= 0 || _stringSize2 > buffer$$1.length - index || buffer$$1[index + _stringSize2 - 1] !== 0)
        throw new Error("bad string length in bson");
      var functionString2 = buffer$$1.toString("utf8", index, index + _stringSize2 - 1);
      if (evalFunctions) {
        if (cacheFunctions) {
          var hash2 = cacheFunctionsCrc32 ? crc32(functionString2) : functionString2;
          object2[name] = isolateEvalWithHash(functionCache2, hash2, functionString2, object2);
        } else {
          object2[name] = isolateEval(functionString2);
        }
      } else {
        object2[name] = new code(functionString2);
      }
      index = index + _stringSize2;
    } else if (elementType === constants.BSON_DATA_CODE_W_SCOPE) {
      var totalSize = buffer$$1[index++] | buffer$$1[index++] << 8 | buffer$$1[index++] << 16 | buffer$$1[index++] << 24;
      if (totalSize < 4 + 4 + 4 + 1) {
        throw new Error("code_w_scope total size shorter minimum expected length");
      }
      var _stringSize3 = buffer$$1[index++] | buffer$$1[index++] << 8 | buffer$$1[index++] << 16 | buffer$$1[index++] << 24;
      if (_stringSize3 <= 0 || _stringSize3 > buffer$$1.length - index || buffer$$1[index + _stringSize3 - 1] !== 0)
        throw new Error("bad string length in bson");
      var _functionString = buffer$$1.toString("utf8", index, index + _stringSize3 - 1);
      index = index + _stringSize3;
      var _index3 = index;
      var _objectSize2 = buffer$$1[index] | buffer$$1[index + 1] << 8 | buffer$$1[index + 2] << 16 | buffer$$1[index + 3] << 24;
      var scopeObject = deserializeObject(buffer$$1, _index3, options, false);
      index = index + _objectSize2;
      if (totalSize < 4 + 4 + _objectSize2 + _stringSize3) {
        throw new Error("code_w_scope total size is to short, truncating scope");
      }
      if (totalSize > 4 + 4 + _objectSize2 + _stringSize3) {
        throw new Error("code_w_scope total size is to long, clips outer document");
      }
      if (evalFunctions) {
        if (cacheFunctions) {
          var _hash = cacheFunctionsCrc32 ? crc32(_functionString) : _functionString;
          object2[name] = isolateEvalWithHash(functionCache2, _hash, _functionString, object2);
        } else {
          object2[name] = isolateEval(_functionString);
        }
        object2[name].scope = scopeObject;
      } else {
        object2[name] = new code(_functionString, scopeObject);
      }
    } else if (elementType === constants.BSON_DATA_DBPOINTER) {
      var _stringSize4 = buffer$$1[index++] | buffer$$1[index++] << 8 | buffer$$1[index++] << 16 | buffer$$1[index++] << 24;
      if (_stringSize4 <= 0 || _stringSize4 > buffer$$1.length - index || buffer$$1[index + _stringSize4 - 1] !== 0)
        throw new Error("bad string length in bson");
      if (!validateUtf8$1(buffer$$1, index, index + _stringSize4 - 1)) {
        throw new Error("Invalid UTF-8 string in BSON document");
      }
      var namespace = buffer$$1.toString("utf8", index, index + _stringSize4 - 1);
      index = index + _stringSize4;
      var oidBuffer = Buffer$4.alloc(12);
      buffer$$1.copy(oidBuffer, 0, index, index + 12);
      var _oid = new objectid(oidBuffer);
      index = index + 12;
      object2[name] = new db_ref(namespace, _oid);
    } else {
      throw new Error("Detected unknown BSON type " + elementType.toString(16) + ' for fieldname "' + name + '", are you using the latest BSON parser?');
    }
  }
  if (size !== index - startIndex) {
    if (isArray3)
      throw new Error("corrupt array bson");
    throw new Error("corrupt object bson");
  }
  var dollarKeys = Object.keys(object2).filter(function(k) {
    return k.startsWith("$");
  });
  var valid = true;
  dollarKeys.forEach(function(k) {
    if (["$ref", "$id", "$db"].indexOf(k) === -1)
      valid = false;
  });
  if (!valid)
    return object2;
  if (object2["$id"] != null && object2["$ref"] != null) {
    var copy = Object.assign({}, object2);
    delete copy.$ref;
    delete copy.$id;
    delete copy.$db;
    return new db_ref(object2.$ref, object2.$id, object2.$db || null, copy);
  }
  return object2;
}
function isolateEvalWithHash(functionCache, hash, functionString, object) {
  var value = null;
  if (functionCache[hash] == null) {
    eval("value = " + functionString);
    functionCache[hash] = value;
  }
  return functionCache[hash].bind(object);
}
function isolateEval(functionString) {
  var value = null;
  eval("value = " + functionString);
  return value;
}
var deserializer = deserialize$1;
function readIEEE754(buffer$$1, offset, endian, mLen, nBytes) {
  var e, m, bBE = endian === "big", eLen = nBytes * 8 - mLen - 1, eMax = (1 << eLen) - 1, eBias = eMax >> 1, nBits = -7, i3 = bBE ? 0 : nBytes - 1, d = bBE ? 1 : -1, s = buffer$$1[offset + i3];
  i3 += d;
  e = s & (1 << -nBits) - 1;
  s >>= -nBits;
  nBits += eLen;
  for (; nBits > 0; e = e * 256 + buffer$$1[offset + i3], i3 += d, nBits -= 8) {
  }
  m = e & (1 << -nBits) - 1;
  e >>= -nBits;
  nBits += mLen;
  for (; nBits > 0; m = m * 256 + buffer$$1[offset + i3], i3 += d, nBits -= 8) {
  }
  if (e === 0) {
    e = 1 - eBias;
  } else if (e === eMax) {
    return m ? NaN : (s ? -1 : 1) * Infinity;
  } else {
    m = m + Math.pow(2, mLen);
    e = e - eBias;
  }
  return (s ? -1 : 1) * m * Math.pow(2, e - mLen);
}
function writeIEEE754(buffer$$1, value2, offset, endian, mLen, nBytes) {
  var e, m, c, bBE = endian === "big", eLen = nBytes * 8 - mLen - 1, eMax = (1 << eLen) - 1, eBias = eMax >> 1, rt = mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0, i3 = bBE ? nBytes - 1 : 0, d = bBE ? -1 : 1, s = value2 < 0 || value2 === 0 && 1 / value2 < 0 ? 1 : 0;
  value2 = Math.abs(value2);
  if (isNaN(value2) || value2 === Infinity) {
    m = isNaN(value2) ? 1 : 0;
    e = eMax;
  } else {
    e = Math.floor(Math.log(value2) / Math.LN2);
    if (value2 * (c = Math.pow(2, -e)) < 1) {
      e--;
      c *= 2;
    }
    if (e + eBias >= 1) {
      value2 += rt / c;
    } else {
      value2 += rt * Math.pow(2, 1 - eBias);
    }
    if (value2 * c >= 2) {
      e++;
      c /= 2;
    }
    if (e + eBias >= eMax) {
      m = 0;
      e = eMax;
    } else if (e + eBias >= 1) {
      m = (value2 * c - 1) * Math.pow(2, mLen);
      e = e + eBias;
    } else {
      m = value2 * Math.pow(2, eBias - 1) * Math.pow(2, mLen);
      e = 0;
    }
  }
  if (isNaN(value2))
    m = 0;
  while (mLen >= 8) {
    buffer$$1[offset + i3] = m & 255;
    i3 += d;
    m /= 256;
    mLen -= 8;
  }
  e = e << mLen | m;
  if (isNaN(value2))
    e += 8;
  eLen += mLen;
  while (eLen > 0) {
    buffer$$1[offset + i3] = e & 255;
    i3 += d;
    e /= 256;
    eLen -= 8;
  }
  buffer$$1[offset + i3 - d] |= s * 128;
}
var float_parser = {
  readIEEE754,
  writeIEEE754
};
function _typeof$3(obj) {
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof$3 = function _typeof3(obj2) {
      return typeof obj2;
    };
  } else {
    _typeof$3 = function _typeof3(obj2) {
      return obj2 && typeof Symbol === "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
    };
  }
  return _typeof$3(obj);
}
var Buffer$5 = import_buffer.default.Buffer;
var writeIEEE754$1 = float_parser.writeIEEE754;
var normalizedFunctionString$1 = utils.normalizedFunctionString;
var regexp$1 = /\x00/;
var ignoreKeys = /* @__PURE__ */ new Set(["$db", "$ref", "$id", "$clusterTime"]);
var isDate$1 = function isDate2(d) {
  return _typeof$3(d) === "object" && Object.prototype.toString.call(d) === "[object Date]";
};
var isRegExp$1 = function isRegExp2(d) {
  return Object.prototype.toString.call(d) === "[object RegExp]";
};
function serializeString(buffer$$1, key, value2, index, isArray3) {
  buffer$$1[index++] = constants.BSON_DATA_STRING;
  var numberOfWrittenBytes = !isArray3 ? buffer$$1.write(key, index, "utf8") : buffer$$1.write(key, index, "ascii");
  index = index + numberOfWrittenBytes + 1;
  buffer$$1[index - 1] = 0;
  var size = buffer$$1.write(value2, index + 4, "utf8");
  buffer$$1[index + 3] = size + 1 >> 24 & 255;
  buffer$$1[index + 2] = size + 1 >> 16 & 255;
  buffer$$1[index + 1] = size + 1 >> 8 & 255;
  buffer$$1[index] = size + 1 & 255;
  index = index + 4 + size;
  buffer$$1[index++] = 0;
  return index;
}
function serializeNumber(buffer$$1, key, value2, index, isArray3) {
  if (Math.floor(value2) === value2 && value2 >= constants.JS_INT_MIN && value2 <= constants.JS_INT_MAX) {
    if (value2 >= constants.BSON_INT32_MIN && value2 <= constants.BSON_INT32_MAX) {
      buffer$$1[index++] = constants.BSON_DATA_INT;
      var numberOfWrittenBytes = !isArray3 ? buffer$$1.write(key, index, "utf8") : buffer$$1.write(key, index, "ascii");
      index = index + numberOfWrittenBytes;
      buffer$$1[index++] = 0;
      buffer$$1[index++] = value2 & 255;
      buffer$$1[index++] = value2 >> 8 & 255;
      buffer$$1[index++] = value2 >> 16 & 255;
      buffer$$1[index++] = value2 >> 24 & 255;
    } else if (value2 >= constants.JS_INT_MIN && value2 <= constants.JS_INT_MAX) {
      buffer$$1[index++] = constants.BSON_DATA_NUMBER;
      var _numberOfWrittenBytes = !isArray3 ? buffer$$1.write(key, index, "utf8") : buffer$$1.write(key, index, "ascii");
      index = index + _numberOfWrittenBytes;
      buffer$$1[index++] = 0;
      writeIEEE754$1(buffer$$1, value2, index, "little", 52, 8);
      index = index + 8;
    } else {
      buffer$$1[index++] = constants.BSON_DATA_LONG;
      var _numberOfWrittenBytes2 = !isArray3 ? buffer$$1.write(key, index, "utf8") : buffer$$1.write(key, index, "ascii");
      index = index + _numberOfWrittenBytes2;
      buffer$$1[index++] = 0;
      var longVal = long_1.fromNumber(value2);
      var lowBits = longVal.getLowBits();
      var highBits = longVal.getHighBits();
      buffer$$1[index++] = lowBits & 255;
      buffer$$1[index++] = lowBits >> 8 & 255;
      buffer$$1[index++] = lowBits >> 16 & 255;
      buffer$$1[index++] = lowBits >> 24 & 255;
      buffer$$1[index++] = highBits & 255;
      buffer$$1[index++] = highBits >> 8 & 255;
      buffer$$1[index++] = highBits >> 16 & 255;
      buffer$$1[index++] = highBits >> 24 & 255;
    }
  } else {
    buffer$$1[index++] = constants.BSON_DATA_NUMBER;
    var _numberOfWrittenBytes3 = !isArray3 ? buffer$$1.write(key, index, "utf8") : buffer$$1.write(key, index, "ascii");
    index = index + _numberOfWrittenBytes3;
    buffer$$1[index++] = 0;
    writeIEEE754$1(buffer$$1, value2, index, "little", 52, 8);
    index = index + 8;
  }
  return index;
}
function serializeNull(buffer$$1, key, value2, index, isArray3) {
  buffer$$1[index++] = constants.BSON_DATA_NULL;
  var numberOfWrittenBytes = !isArray3 ? buffer$$1.write(key, index, "utf8") : buffer$$1.write(key, index, "ascii");
  index = index + numberOfWrittenBytes;
  buffer$$1[index++] = 0;
  return index;
}
function serializeBoolean(buffer$$1, key, value2, index, isArray3) {
  buffer$$1[index++] = constants.BSON_DATA_BOOLEAN;
  var numberOfWrittenBytes = !isArray3 ? buffer$$1.write(key, index, "utf8") : buffer$$1.write(key, index, "ascii");
  index = index + numberOfWrittenBytes;
  buffer$$1[index++] = 0;
  buffer$$1[index++] = value2 ? 1 : 0;
  return index;
}
function serializeDate(buffer$$1, key, value2, index, isArray3) {
  buffer$$1[index++] = constants.BSON_DATA_DATE;
  var numberOfWrittenBytes = !isArray3 ? buffer$$1.write(key, index, "utf8") : buffer$$1.write(key, index, "ascii");
  index = index + numberOfWrittenBytes;
  buffer$$1[index++] = 0;
  var dateInMilis = long_1.fromNumber(value2.getTime());
  var lowBits = dateInMilis.getLowBits();
  var highBits = dateInMilis.getHighBits();
  buffer$$1[index++] = lowBits & 255;
  buffer$$1[index++] = lowBits >> 8 & 255;
  buffer$$1[index++] = lowBits >> 16 & 255;
  buffer$$1[index++] = lowBits >> 24 & 255;
  buffer$$1[index++] = highBits & 255;
  buffer$$1[index++] = highBits >> 8 & 255;
  buffer$$1[index++] = highBits >> 16 & 255;
  buffer$$1[index++] = highBits >> 24 & 255;
  return index;
}
function serializeRegExp(buffer$$1, key, value2, index, isArray3) {
  buffer$$1[index++] = constants.BSON_DATA_REGEXP;
  var numberOfWrittenBytes = !isArray3 ? buffer$$1.write(key, index, "utf8") : buffer$$1.write(key, index, "ascii");
  index = index + numberOfWrittenBytes;
  buffer$$1[index++] = 0;
  if (value2.source && value2.source.match(regexp$1) != null) {
    throw Error("value " + value2.source + " must not contain null bytes");
  }
  index = index + buffer$$1.write(value2.source, index, "utf8");
  buffer$$1[index++] = 0;
  if (value2.ignoreCase)
    buffer$$1[index++] = 105;
  if (value2.global)
    buffer$$1[index++] = 115;
  if (value2.multiline)
    buffer$$1[index++] = 109;
  buffer$$1[index++] = 0;
  return index;
}
function serializeBSONRegExp(buffer$$1, key, value2, index, isArray3) {
  buffer$$1[index++] = constants.BSON_DATA_REGEXP;
  var numberOfWrittenBytes = !isArray3 ? buffer$$1.write(key, index, "utf8") : buffer$$1.write(key, index, "ascii");
  index = index + numberOfWrittenBytes;
  buffer$$1[index++] = 0;
  if (value2.pattern.match(regexp$1) != null) {
    throw Error("pattern " + value2.pattern + " must not contain null bytes");
  }
  index = index + buffer$$1.write(value2.pattern, index, "utf8");
  buffer$$1[index++] = 0;
  index = index + buffer$$1.write(value2.options.split("").sort().join(""), index, "utf8");
  buffer$$1[index++] = 0;
  return index;
}
function serializeMinMax(buffer$$1, key, value2, index, isArray3) {
  if (value2 === null) {
    buffer$$1[index++] = constants.BSON_DATA_NULL;
  } else if (value2._bsontype === "MinKey") {
    buffer$$1[index++] = constants.BSON_DATA_MIN_KEY;
  } else {
    buffer$$1[index++] = constants.BSON_DATA_MAX_KEY;
  }
  var numberOfWrittenBytes = !isArray3 ? buffer$$1.write(key, index, "utf8") : buffer$$1.write(key, index, "ascii");
  index = index + numberOfWrittenBytes;
  buffer$$1[index++] = 0;
  return index;
}
function serializeObjectId(buffer$$1, key, value2, index, isArray3) {
  buffer$$1[index++] = constants.BSON_DATA_OID;
  var numberOfWrittenBytes = !isArray3 ? buffer$$1.write(key, index, "utf8") : buffer$$1.write(key, index, "ascii");
  index = index + numberOfWrittenBytes;
  buffer$$1[index++] = 0;
  if (typeof value2.id === "string") {
    buffer$$1.write(value2.id, index, "binary");
  } else if (value2.id && value2.id.copy) {
    value2.id.copy(buffer$$1, index, 0, 12);
  } else {
    throw new TypeError("object [" + JSON.stringify(value2) + "] is not a valid ObjectId");
  }
  return index + 12;
}
function serializeBuffer(buffer$$1, key, value2, index, isArray3) {
  buffer$$1[index++] = constants.BSON_DATA_BINARY;
  var numberOfWrittenBytes = !isArray3 ? buffer$$1.write(key, index, "utf8") : buffer$$1.write(key, index, "ascii");
  index = index + numberOfWrittenBytes;
  buffer$$1[index++] = 0;
  var size = value2.length;
  buffer$$1[index++] = size & 255;
  buffer$$1[index++] = size >> 8 & 255;
  buffer$$1[index++] = size >> 16 & 255;
  buffer$$1[index++] = size >> 24 & 255;
  buffer$$1[index++] = constants.BSON_BINARY_SUBTYPE_DEFAULT;
  value2.copy(buffer$$1, index, 0, size);
  index = index + size;
  return index;
}
function serializeObject(buffer$$1, key, value2, index, checkKeys, depth, serializeFunctions, ignoreUndefined, isArray3, path) {
  for (var i3 = 0; i3 < path.length; i3++) {
    if (path[i3] === value2)
      throw new Error("cyclic dependency detected");
  }
  path.push(value2);
  buffer$$1[index++] = Array.isArray(value2) ? constants.BSON_DATA_ARRAY : constants.BSON_DATA_OBJECT;
  var numberOfWrittenBytes = !isArray3 ? buffer$$1.write(key, index, "utf8") : buffer$$1.write(key, index, "ascii");
  index = index + numberOfWrittenBytes;
  buffer$$1[index++] = 0;
  var endIndex = serializeInto(buffer$$1, value2, checkKeys, index, depth + 1, serializeFunctions, ignoreUndefined, path);
  path.pop();
  return endIndex;
}
function serializeDecimal128(buffer$$1, key, value2, index, isArray3) {
  buffer$$1[index++] = constants.BSON_DATA_DECIMAL128;
  var numberOfWrittenBytes = !isArray3 ? buffer$$1.write(key, index, "utf8") : buffer$$1.write(key, index, "ascii");
  index = index + numberOfWrittenBytes;
  buffer$$1[index++] = 0;
  value2.bytes.copy(buffer$$1, index, 0, 16);
  return index + 16;
}
function serializeLong(buffer$$1, key, value2, index, isArray3) {
  buffer$$1[index++] = value2._bsontype === "Long" ? constants.BSON_DATA_LONG : constants.BSON_DATA_TIMESTAMP;
  var numberOfWrittenBytes = !isArray3 ? buffer$$1.write(key, index, "utf8") : buffer$$1.write(key, index, "ascii");
  index = index + numberOfWrittenBytes;
  buffer$$1[index++] = 0;
  var lowBits = value2.getLowBits();
  var highBits = value2.getHighBits();
  buffer$$1[index++] = lowBits & 255;
  buffer$$1[index++] = lowBits >> 8 & 255;
  buffer$$1[index++] = lowBits >> 16 & 255;
  buffer$$1[index++] = lowBits >> 24 & 255;
  buffer$$1[index++] = highBits & 255;
  buffer$$1[index++] = highBits >> 8 & 255;
  buffer$$1[index++] = highBits >> 16 & 255;
  buffer$$1[index++] = highBits >> 24 & 255;
  return index;
}
function serializeInt32(buffer$$1, key, value2, index, isArray3) {
  buffer$$1[index++] = constants.BSON_DATA_INT;
  var numberOfWrittenBytes = !isArray3 ? buffer$$1.write(key, index, "utf8") : buffer$$1.write(key, index, "ascii");
  index = index + numberOfWrittenBytes;
  buffer$$1[index++] = 0;
  buffer$$1[index++] = value2 & 255;
  buffer$$1[index++] = value2 >> 8 & 255;
  buffer$$1[index++] = value2 >> 16 & 255;
  buffer$$1[index++] = value2 >> 24 & 255;
  return index;
}
function serializeDouble(buffer$$1, key, value2, index, isArray3) {
  buffer$$1[index++] = constants.BSON_DATA_NUMBER;
  var numberOfWrittenBytes = !isArray3 ? buffer$$1.write(key, index, "utf8") : buffer$$1.write(key, index, "ascii");
  index = index + numberOfWrittenBytes;
  buffer$$1[index++] = 0;
  writeIEEE754$1(buffer$$1, value2.value, index, "little", 52, 8);
  index = index + 8;
  return index;
}
function serializeFunction(buffer$$1, key, value2, index, checkKeys, depth, isArray3) {
  buffer$$1[index++] = constants.BSON_DATA_CODE;
  var numberOfWrittenBytes = !isArray3 ? buffer$$1.write(key, index, "utf8") : buffer$$1.write(key, index, "ascii");
  index = index + numberOfWrittenBytes;
  buffer$$1[index++] = 0;
  var functionString2 = normalizedFunctionString$1(value2);
  var size = buffer$$1.write(functionString2, index + 4, "utf8") + 1;
  buffer$$1[index] = size & 255;
  buffer$$1[index + 1] = size >> 8 & 255;
  buffer$$1[index + 2] = size >> 16 & 255;
  buffer$$1[index + 3] = size >> 24 & 255;
  index = index + 4 + size - 1;
  buffer$$1[index++] = 0;
  return index;
}
function serializeCode(buffer$$1, key, value2, index, checkKeys, depth, serializeFunctions, ignoreUndefined, isArray3) {
  if (value2.scope && _typeof$3(value2.scope) === "object") {
    buffer$$1[index++] = constants.BSON_DATA_CODE_W_SCOPE;
    var numberOfWrittenBytes = !isArray3 ? buffer$$1.write(key, index, "utf8") : buffer$$1.write(key, index, "ascii");
    index = index + numberOfWrittenBytes;
    buffer$$1[index++] = 0;
    var startIndex = index;
    var functionString2 = typeof value2.code === "string" ? value2.code : value2.code.toString();
    index = index + 4;
    var codeSize = buffer$$1.write(functionString2, index + 4, "utf8") + 1;
    buffer$$1[index] = codeSize & 255;
    buffer$$1[index + 1] = codeSize >> 8 & 255;
    buffer$$1[index + 2] = codeSize >> 16 & 255;
    buffer$$1[index + 3] = codeSize >> 24 & 255;
    buffer$$1[index + 4 + codeSize - 1] = 0;
    index = index + codeSize + 4;
    var endIndex = serializeInto(buffer$$1, value2.scope, checkKeys, index, depth + 1, serializeFunctions, ignoreUndefined);
    index = endIndex - 1;
    var totalSize = endIndex - startIndex;
    buffer$$1[startIndex++] = totalSize & 255;
    buffer$$1[startIndex++] = totalSize >> 8 & 255;
    buffer$$1[startIndex++] = totalSize >> 16 & 255;
    buffer$$1[startIndex++] = totalSize >> 24 & 255;
    buffer$$1[index++] = 0;
  } else {
    buffer$$1[index++] = constants.BSON_DATA_CODE;
    var _numberOfWrittenBytes4 = !isArray3 ? buffer$$1.write(key, index, "utf8") : buffer$$1.write(key, index, "ascii");
    index = index + _numberOfWrittenBytes4;
    buffer$$1[index++] = 0;
    var _functionString = value2.code.toString();
    var size = buffer$$1.write(_functionString, index + 4, "utf8") + 1;
    buffer$$1[index] = size & 255;
    buffer$$1[index + 1] = size >> 8 & 255;
    buffer$$1[index + 2] = size >> 16 & 255;
    buffer$$1[index + 3] = size >> 24 & 255;
    index = index + 4 + size - 1;
    buffer$$1[index++] = 0;
  }
  return index;
}
function serializeBinary(buffer$$1, key, value2, index, isArray3) {
  buffer$$1[index++] = constants.BSON_DATA_BINARY;
  var numberOfWrittenBytes = !isArray3 ? buffer$$1.write(key, index, "utf8") : buffer$$1.write(key, index, "ascii");
  index = index + numberOfWrittenBytes;
  buffer$$1[index++] = 0;
  var data = value2.value(true);
  var size = value2.position;
  if (value2.sub_type === binary.SUBTYPE_BYTE_ARRAY)
    size = size + 4;
  buffer$$1[index++] = size & 255;
  buffer$$1[index++] = size >> 8 & 255;
  buffer$$1[index++] = size >> 16 & 255;
  buffer$$1[index++] = size >> 24 & 255;
  buffer$$1[index++] = value2.sub_type;
  if (value2.sub_type === binary.SUBTYPE_BYTE_ARRAY) {
    size = size - 4;
    buffer$$1[index++] = size & 255;
    buffer$$1[index++] = size >> 8 & 255;
    buffer$$1[index++] = size >> 16 & 255;
    buffer$$1[index++] = size >> 24 & 255;
  }
  data.copy(buffer$$1, index, 0, value2.position);
  index = index + value2.position;
  return index;
}
function serializeSymbol(buffer$$1, key, value2, index, isArray3) {
  buffer$$1[index++] = constants.BSON_DATA_SYMBOL;
  var numberOfWrittenBytes = !isArray3 ? buffer$$1.write(key, index, "utf8") : buffer$$1.write(key, index, "ascii");
  index = index + numberOfWrittenBytes;
  buffer$$1[index++] = 0;
  var size = buffer$$1.write(value2.value, index + 4, "utf8") + 1;
  buffer$$1[index] = size & 255;
  buffer$$1[index + 1] = size >> 8 & 255;
  buffer$$1[index + 2] = size >> 16 & 255;
  buffer$$1[index + 3] = size >> 24 & 255;
  index = index + 4 + size - 1;
  buffer$$1[index++] = 0;
  return index;
}
function serializeDBRef(buffer$$1, key, value2, index, depth, serializeFunctions, isArray3) {
  buffer$$1[index++] = constants.BSON_DATA_OBJECT;
  var numberOfWrittenBytes = !isArray3 ? buffer$$1.write(key, index, "utf8") : buffer$$1.write(key, index, "ascii");
  index = index + numberOfWrittenBytes;
  buffer$$1[index++] = 0;
  var startIndex = index;
  var endIndex;
  var output = {
    $ref: value2.collection || value2.namespace,
    // "namespace" was what library 1.x called "collection"
    $id: value2.oid
  };
  if (value2.db != null)
    output.$db = value2.db;
  output = Object.assign(output, value2.fields);
  endIndex = serializeInto(buffer$$1, output, false, index, depth + 1, serializeFunctions);
  var size = endIndex - startIndex;
  buffer$$1[startIndex++] = size & 255;
  buffer$$1[startIndex++] = size >> 8 & 255;
  buffer$$1[startIndex++] = size >> 16 & 255;
  buffer$$1[startIndex++] = size >> 24 & 255;
  return endIndex;
}
function serializeInto(buffer$$1, object2, checkKeys, startingIndex, depth, serializeFunctions, ignoreUndefined, path) {
  startingIndex = startingIndex || 0;
  path = path || [];
  path.push(object2);
  var index = startingIndex + 4;
  if (Array.isArray(object2)) {
    for (var i3 = 0; i3 < object2.length; i3++) {
      var key = "" + i3;
      var value2 = object2[i3];
      if (value2 && value2.toBSON) {
        if (typeof value2.toBSON !== "function")
          throw new TypeError("toBSON is not a function");
        value2 = value2.toBSON();
      }
      var type = _typeof$3(value2);
      if (type === "string") {
        index = serializeString(buffer$$1, key, value2, index, true);
      } else if (type === "number") {
        index = serializeNumber(buffer$$1, key, value2, index, true);
      } else if (type === "boolean") {
        index = serializeBoolean(buffer$$1, key, value2, index, true);
      } else if (value2 instanceof Date || isDate$1(value2)) {
        index = serializeDate(buffer$$1, key, value2, index, true);
      } else if (value2 === void 0) {
        index = serializeNull(buffer$$1, key, value2, index, true);
      } else if (value2 === null) {
        index = serializeNull(buffer$$1, key, value2, index, true);
      } else if (value2["_bsontype"] === "ObjectId" || value2["_bsontype"] === "ObjectID") {
        index = serializeObjectId(buffer$$1, key, value2, index, true);
      } else if (Buffer$5.isBuffer(value2)) {
        index = serializeBuffer(buffer$$1, key, value2, index, true);
      } else if (value2 instanceof RegExp || isRegExp$1(value2)) {
        index = serializeRegExp(buffer$$1, key, value2, index, true);
      } else if (type === "object" && value2["_bsontype"] == null) {
        index = serializeObject(buffer$$1, key, value2, index, checkKeys, depth, serializeFunctions, ignoreUndefined, true, path);
      } else if (type === "object" && value2["_bsontype"] === "Decimal128") {
        index = serializeDecimal128(buffer$$1, key, value2, index, true);
      } else if (value2["_bsontype"] === "Long" || value2["_bsontype"] === "Timestamp") {
        index = serializeLong(buffer$$1, key, value2, index, true);
      } else if (value2["_bsontype"] === "Double") {
        index = serializeDouble(buffer$$1, key, value2, index, true);
      } else if (typeof value2 === "function" && serializeFunctions) {
        index = serializeFunction(buffer$$1, key, value2, index, checkKeys, depth, serializeFunctions, true);
      } else if (value2["_bsontype"] === "Code") {
        index = serializeCode(buffer$$1, key, value2, index, checkKeys, depth, serializeFunctions, ignoreUndefined, true);
      } else if (value2["_bsontype"] === "Binary") {
        index = serializeBinary(buffer$$1, key, value2, index, true);
      } else if (value2["_bsontype"] === "Symbol") {
        index = serializeSymbol(buffer$$1, key, value2, index, true);
      } else if (value2["_bsontype"] === "DBRef") {
        index = serializeDBRef(buffer$$1, key, value2, index, depth, serializeFunctions, true);
      } else if (value2["_bsontype"] === "BSONRegExp") {
        index = serializeBSONRegExp(buffer$$1, key, value2, index, true);
      } else if (value2["_bsontype"] === "Int32") {
        index = serializeInt32(buffer$$1, key, value2, index, true);
      } else if (value2["_bsontype"] === "MinKey" || value2["_bsontype"] === "MaxKey") {
        index = serializeMinMax(buffer$$1, key, value2, index, true);
      } else if (typeof value2["_bsontype"] !== "undefined") {
        throw new TypeError("Unrecognized or invalid _bsontype: " + value2["_bsontype"]);
      }
    }
  } else if (object2 instanceof map) {
    var iterator = object2.entries();
    var done = false;
    while (!done) {
      var entry = iterator.next();
      done = entry.done;
      if (done)
        continue;
      var _key = entry.value[0];
      var _value = entry.value[1];
      var _type = _typeof$3(_value);
      if (typeof _key === "string" && !ignoreKeys.has(_key)) {
        if (_key.match(regexp$1) != null) {
          throw Error("key " + _key + " must not contain null bytes");
        }
        if (checkKeys) {
          if ("$" === _key[0]) {
            throw Error("key " + _key + " must not start with '$'");
          } else if (~_key.indexOf(".")) {
            throw Error("key " + _key + " must not contain '.'");
          }
        }
      }
      if (_type === "string") {
        index = serializeString(buffer$$1, _key, _value, index);
      } else if (_type === "number") {
        index = serializeNumber(buffer$$1, _key, _value, index);
      } else if (_type === "boolean") {
        index = serializeBoolean(buffer$$1, _key, _value, index);
      } else if (_value instanceof Date || isDate$1(_value)) {
        index = serializeDate(buffer$$1, _key, _value, index);
      } else if (_value === null || _value === void 0 && ignoreUndefined === false) {
        index = serializeNull(buffer$$1, _key, _value, index);
      } else if (_value["_bsontype"] === "ObjectId" || _value["_bsontype"] === "ObjectID") {
        index = serializeObjectId(buffer$$1, _key, _value, index);
      } else if (Buffer$5.isBuffer(_value)) {
        index = serializeBuffer(buffer$$1, _key, _value, index);
      } else if (_value instanceof RegExp || isRegExp$1(_value)) {
        index = serializeRegExp(buffer$$1, _key, _value, index);
      } else if (_type === "object" && _value["_bsontype"] == null) {
        index = serializeObject(buffer$$1, _key, _value, index, checkKeys, depth, serializeFunctions, ignoreUndefined, false, path);
      } else if (_type === "object" && _value["_bsontype"] === "Decimal128") {
        index = serializeDecimal128(buffer$$1, _key, _value, index);
      } else if (_value["_bsontype"] === "Long" || _value["_bsontype"] === "Timestamp") {
        index = serializeLong(buffer$$1, _key, _value, index);
      } else if (_value["_bsontype"] === "Double") {
        index = serializeDouble(buffer$$1, _key, _value, index);
      } else if (_value["_bsontype"] === "Code") {
        index = serializeCode(buffer$$1, _key, _value, index, checkKeys, depth, serializeFunctions, ignoreUndefined);
      } else if (typeof _value === "function" && serializeFunctions) {
        index = serializeFunction(buffer$$1, _key, _value, index, checkKeys, depth, serializeFunctions);
      } else if (_value["_bsontype"] === "Binary") {
        index = serializeBinary(buffer$$1, _key, _value, index);
      } else if (_value["_bsontype"] === "Symbol") {
        index = serializeSymbol(buffer$$1, _key, _value, index);
      } else if (_value["_bsontype"] === "DBRef") {
        index = serializeDBRef(buffer$$1, _key, _value, index, depth, serializeFunctions);
      } else if (_value["_bsontype"] === "BSONRegExp") {
        index = serializeBSONRegExp(buffer$$1, _key, _value, index);
      } else if (_value["_bsontype"] === "Int32") {
        index = serializeInt32(buffer$$1, _key, _value, index);
      } else if (_value["_bsontype"] === "MinKey" || _value["_bsontype"] === "MaxKey") {
        index = serializeMinMax(buffer$$1, _key, _value, index);
      } else if (typeof _value["_bsontype"] !== "undefined") {
        throw new TypeError("Unrecognized or invalid _bsontype: " + _value["_bsontype"]);
      }
    }
  } else {
    if (object2.toBSON) {
      if (typeof object2.toBSON !== "function")
        throw new TypeError("toBSON is not a function");
      object2 = object2.toBSON();
      if (object2 != null && _typeof$3(object2) !== "object")
        throw new TypeError("toBSON function did not return an object");
    }
    for (var _key2 in object2) {
      var _value2 = object2[_key2];
      if (_value2 && _value2.toBSON) {
        if (typeof _value2.toBSON !== "function")
          throw new TypeError("toBSON is not a function");
        _value2 = _value2.toBSON();
      }
      var _type2 = _typeof$3(_value2);
      if (typeof _key2 === "string" && !ignoreKeys.has(_key2)) {
        if (_key2.match(regexp$1) != null) {
          throw Error("key " + _key2 + " must not contain null bytes");
        }
        if (checkKeys) {
          if ("$" === _key2[0]) {
            throw Error("key " + _key2 + " must not start with '$'");
          } else if (~_key2.indexOf(".")) {
            throw Error("key " + _key2 + " must not contain '.'");
          }
        }
      }
      if (_type2 === "string") {
        index = serializeString(buffer$$1, _key2, _value2, index);
      } else if (_type2 === "number") {
        index = serializeNumber(buffer$$1, _key2, _value2, index);
      } else if (_type2 === "boolean") {
        index = serializeBoolean(buffer$$1, _key2, _value2, index);
      } else if (_value2 instanceof Date || isDate$1(_value2)) {
        index = serializeDate(buffer$$1, _key2, _value2, index);
      } else if (_value2 === void 0) {
        if (ignoreUndefined === false)
          index = serializeNull(buffer$$1, _key2, _value2, index);
      } else if (_value2 === null) {
        index = serializeNull(buffer$$1, _key2, _value2, index);
      } else if (_value2["_bsontype"] === "ObjectId" || _value2["_bsontype"] === "ObjectID") {
        index = serializeObjectId(buffer$$1, _key2, _value2, index);
      } else if (Buffer$5.isBuffer(_value2)) {
        index = serializeBuffer(buffer$$1, _key2, _value2, index);
      } else if (_value2 instanceof RegExp || isRegExp$1(_value2)) {
        index = serializeRegExp(buffer$$1, _key2, _value2, index);
      } else if (_type2 === "object" && _value2["_bsontype"] == null) {
        index = serializeObject(buffer$$1, _key2, _value2, index, checkKeys, depth, serializeFunctions, ignoreUndefined, false, path);
      } else if (_type2 === "object" && _value2["_bsontype"] === "Decimal128") {
        index = serializeDecimal128(buffer$$1, _key2, _value2, index);
      } else if (_value2["_bsontype"] === "Long" || _value2["_bsontype"] === "Timestamp") {
        index = serializeLong(buffer$$1, _key2, _value2, index);
      } else if (_value2["_bsontype"] === "Double") {
        index = serializeDouble(buffer$$1, _key2, _value2, index);
      } else if (_value2["_bsontype"] === "Code") {
        index = serializeCode(buffer$$1, _key2, _value2, index, checkKeys, depth, serializeFunctions, ignoreUndefined);
      } else if (typeof _value2 === "function" && serializeFunctions) {
        index = serializeFunction(buffer$$1, _key2, _value2, index, checkKeys, depth, serializeFunctions);
      } else if (_value2["_bsontype"] === "Binary") {
        index = serializeBinary(buffer$$1, _key2, _value2, index);
      } else if (_value2["_bsontype"] === "Symbol") {
        index = serializeSymbol(buffer$$1, _key2, _value2, index);
      } else if (_value2["_bsontype"] === "DBRef") {
        index = serializeDBRef(buffer$$1, _key2, _value2, index, depth, serializeFunctions);
      } else if (_value2["_bsontype"] === "BSONRegExp") {
        index = serializeBSONRegExp(buffer$$1, _key2, _value2, index);
      } else if (_value2["_bsontype"] === "Int32") {
        index = serializeInt32(buffer$$1, _key2, _value2, index);
      } else if (_value2["_bsontype"] === "MinKey" || _value2["_bsontype"] === "MaxKey") {
        index = serializeMinMax(buffer$$1, _key2, _value2, index);
      } else if (typeof _value2["_bsontype"] !== "undefined") {
        throw new TypeError("Unrecognized or invalid _bsontype: " + _value2["_bsontype"]);
      }
    }
  }
  path.pop();
  buffer$$1[index++] = 0;
  var size = index - startingIndex;
  buffer$$1[startingIndex++] = size & 255;
  buffer$$1[startingIndex++] = size >> 8 & 255;
  buffer$$1[startingIndex++] = size >> 16 & 255;
  buffer$$1[startingIndex++] = size >> 24 & 255;
  return index;
}
var serializer = serializeInto;
function _typeof$4(obj) {
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof$4 = function _typeof3(obj2) {
      return typeof obj2;
    };
  } else {
    _typeof$4 = function _typeof3(obj2) {
      return obj2 && typeof Symbol === "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
    };
  }
  return _typeof$4(obj);
}
var Buffer$6 = import_buffer.default.Buffer;
var normalizedFunctionString$2 = utils.normalizedFunctionString;
function isDate$2(d) {
  return _typeof$4(d) === "object" && Object.prototype.toString.call(d) === "[object Date]";
}
function calculateObjectSize(object2, serializeFunctions, ignoreUndefined) {
  var totalLength = 4 + 1;
  if (Array.isArray(object2)) {
    for (var i3 = 0; i3 < object2.length; i3++) {
      totalLength += calculateElement(i3.toString(), object2[i3], serializeFunctions, true, ignoreUndefined);
    }
  } else {
    if (object2.toBSON) {
      object2 = object2.toBSON();
    }
    for (var key in object2) {
      totalLength += calculateElement(key, object2[key], serializeFunctions, false, ignoreUndefined);
    }
  }
  return totalLength;
}
function calculateElement(name, value2, serializeFunctions, isArray3, ignoreUndefined) {
  if (value2 && value2.toBSON) {
    value2 = value2.toBSON();
  }
  switch (_typeof$4(value2)) {
    case "string":
      return 1 + Buffer$6.byteLength(name, "utf8") + 1 + 4 + Buffer$6.byteLength(value2, "utf8") + 1;
    case "number":
      if (Math.floor(value2) === value2 && value2 >= constants.JS_INT_MIN && value2 <= constants.JS_INT_MAX) {
        if (value2 >= constants.BSON_INT32_MIN && value2 <= constants.BSON_INT32_MAX) {
          return (name != null ? Buffer$6.byteLength(name, "utf8") + 1 : 0) + (4 + 1);
        } else {
          return (name != null ? Buffer$6.byteLength(name, "utf8") + 1 : 0) + (8 + 1);
        }
      } else {
        return (name != null ? Buffer$6.byteLength(name, "utf8") + 1 : 0) + (8 + 1);
      }
    case "undefined":
      if (isArray3 || !ignoreUndefined)
        return (name != null ? Buffer$6.byteLength(name, "utf8") + 1 : 0) + 1;
      return 0;
    case "boolean":
      return (name != null ? Buffer$6.byteLength(name, "utf8") + 1 : 0) + (1 + 1);
    case "object":
      if (value2 == null || value2["_bsontype"] === "MinKey" || value2["_bsontype"] === "MaxKey") {
        return (name != null ? Buffer$6.byteLength(name, "utf8") + 1 : 0) + 1;
      } else if (value2["_bsontype"] === "ObjectId" || value2["_bsontype"] === "ObjectID") {
        return (name != null ? Buffer$6.byteLength(name, "utf8") + 1 : 0) + (12 + 1);
      } else if (value2 instanceof Date || isDate$2(value2)) {
        return (name != null ? Buffer$6.byteLength(name, "utf8") + 1 : 0) + (8 + 1);
      } else if (typeof Buffer$6 !== "undefined" && Buffer$6.isBuffer(value2)) {
        return (name != null ? Buffer$6.byteLength(name, "utf8") + 1 : 0) + (1 + 4 + 1) + value2.length;
      } else if (value2["_bsontype"] === "Long" || value2["_bsontype"] === "Double" || value2["_bsontype"] === "Timestamp") {
        return (name != null ? Buffer$6.byteLength(name, "utf8") + 1 : 0) + (8 + 1);
      } else if (value2["_bsontype"] === "Decimal128") {
        return (name != null ? Buffer$6.byteLength(name, "utf8") + 1 : 0) + (16 + 1);
      } else if (value2["_bsontype"] === "Code") {
        if (value2.scope != null && Object.keys(value2.scope).length > 0) {
          return (name != null ? Buffer$6.byteLength(name, "utf8") + 1 : 0) + 1 + 4 + 4 + Buffer$6.byteLength(value2.code.toString(), "utf8") + 1 + calculateObjectSize(value2.scope, serializeFunctions, ignoreUndefined);
        } else {
          return (name != null ? Buffer$6.byteLength(name, "utf8") + 1 : 0) + 1 + 4 + Buffer$6.byteLength(value2.code.toString(), "utf8") + 1;
        }
      } else if (value2["_bsontype"] === "Binary") {
        if (value2.sub_type === binary.SUBTYPE_BYTE_ARRAY) {
          return (name != null ? Buffer$6.byteLength(name, "utf8") + 1 : 0) + (value2.position + 1 + 4 + 1 + 4);
        } else {
          return (name != null ? Buffer$6.byteLength(name, "utf8") + 1 : 0) + (value2.position + 1 + 4 + 1);
        }
      } else if (value2["_bsontype"] === "Symbol") {
        return (name != null ? Buffer$6.byteLength(name, "utf8") + 1 : 0) + Buffer$6.byteLength(value2.value, "utf8") + 4 + 1 + 1;
      } else if (value2["_bsontype"] === "DBRef") {
        var ordered_values = Object.assign({
          $ref: value2.collection,
          $id: value2.oid
        }, value2.fields);
        if (value2.db != null) {
          ordered_values["$db"] = value2.db;
        }
        return (name != null ? Buffer$6.byteLength(name, "utf8") + 1 : 0) + 1 + calculateObjectSize(ordered_values, serializeFunctions, ignoreUndefined);
      } else if (value2 instanceof RegExp || Object.prototype.toString.call(value2) === "[object RegExp]") {
        return (name != null ? Buffer$6.byteLength(name, "utf8") + 1 : 0) + 1 + Buffer$6.byteLength(value2.source, "utf8") + 1 + (value2.global ? 1 : 0) + (value2.ignoreCase ? 1 : 0) + (value2.multiline ? 1 : 0) + 1;
      } else if (value2["_bsontype"] === "BSONRegExp") {
        return (name != null ? Buffer$6.byteLength(name, "utf8") + 1 : 0) + 1 + Buffer$6.byteLength(value2.pattern, "utf8") + 1 + Buffer$6.byteLength(value2.options, "utf8") + 1;
      } else {
        return (name != null ? Buffer$6.byteLength(name, "utf8") + 1 : 0) + calculateObjectSize(value2, serializeFunctions, ignoreUndefined) + 1;
      }
    case "function":
      if (value2 instanceof RegExp || Object.prototype.toString.call(value2) === "[object RegExp]" || String.call(value2) === "[object RegExp]") {
        return (name != null ? Buffer$6.byteLength(name, "utf8") + 1 : 0) + 1 + Buffer$6.byteLength(value2.source, "utf8") + 1 + (value2.global ? 1 : 0) + (value2.ignoreCase ? 1 : 0) + (value2.multiline ? 1 : 0) + 1;
      } else {
        if (serializeFunctions && value2.scope != null && Object.keys(value2.scope).length > 0) {
          return (name != null ? Buffer$6.byteLength(name, "utf8") + 1 : 0) + 1 + 4 + 4 + Buffer$6.byteLength(normalizedFunctionString$2(value2), "utf8") + 1 + calculateObjectSize(value2.scope, serializeFunctions, ignoreUndefined);
        } else if (serializeFunctions) {
          return (name != null ? Buffer$6.byteLength(name, "utf8") + 1 : 0) + 1 + 4 + Buffer$6.byteLength(normalizedFunctionString$2(value2), "utf8") + 1;
        }
      }
  }
  return 0;
}
var calculate_size = calculateObjectSize;
var Buffer$7 = import_buffer.default.Buffer;
var ensure_buffer = function ensureBuffer(potentialBuffer) {
  if (potentialBuffer instanceof Buffer$7) {
    return potentialBuffer;
  }
  if (potentialBuffer instanceof Uint8Array) {
    return Buffer$7.from(potentialBuffer.buffer);
  }
  throw new TypeError("Must use either Buffer or Uint8Array");
};
var Buffer$8 = import_buffer.default.Buffer;
var MAXSIZE = 1024 * 1024 * 17;
var buffer$1 = Buffer$8.alloc(MAXSIZE);
function setInternalBufferSize(size) {
  if (buffer$1.length < size) {
    buffer$1 = Buffer$8.alloc(size);
  }
}
function serialize$1(object2, options) {
  options = options || {};
  var checkKeys = typeof options.checkKeys === "boolean" ? options.checkKeys : false;
  var serializeFunctions = typeof options.serializeFunctions === "boolean" ? options.serializeFunctions : false;
  var ignoreUndefined = typeof options.ignoreUndefined === "boolean" ? options.ignoreUndefined : true;
  var minInternalBufferSize = typeof options.minInternalBufferSize === "number" ? options.minInternalBufferSize : MAXSIZE;
  if (buffer$1.length < minInternalBufferSize) {
    buffer$1 = Buffer$8.alloc(minInternalBufferSize);
  }
  var serializationIndex = serializer(buffer$1, object2, checkKeys, 0, 0, serializeFunctions, ignoreUndefined, []);
  var finishedBuffer = Buffer$8.alloc(serializationIndex);
  buffer$1.copy(finishedBuffer, 0, 0, finishedBuffer.length);
  return finishedBuffer;
}
function serializeWithBufferAndIndex(object2, finalBuffer, options) {
  options = options || {};
  var checkKeys = typeof options.checkKeys === "boolean" ? options.checkKeys : false;
  var serializeFunctions = typeof options.serializeFunctions === "boolean" ? options.serializeFunctions : false;
  var ignoreUndefined = typeof options.ignoreUndefined === "boolean" ? options.ignoreUndefined : true;
  var startIndex = typeof options.index === "number" ? options.index : 0;
  var serializationIndex = serializer(buffer$1, object2, checkKeys, 0, 0, serializeFunctions, ignoreUndefined);
  buffer$1.copy(finalBuffer, startIndex, 0, serializationIndex);
  return startIndex + serializationIndex - 1;
}
function deserialize$2(buffer$$1, options) {
  buffer$$1 = ensure_buffer(buffer$$1);
  return deserializer(buffer$$1, options);
}
function calculateObjectSize$1(object2, options) {
  options = options || {};
  var serializeFunctions = typeof options.serializeFunctions === "boolean" ? options.serializeFunctions : false;
  var ignoreUndefined = typeof options.ignoreUndefined === "boolean" ? options.ignoreUndefined : true;
  return calculate_size(object2, serializeFunctions, ignoreUndefined);
}
function deserializeStream(data, startIndex, numberOfDocuments, documents, docStartIndex, options) {
  options = Object.assign({
    allowObjectSmallerThanBufferSize: true
  }, options);
  data = ensure_buffer(data);
  var index = startIndex;
  for (var i3 = 0; i3 < numberOfDocuments; i3++) {
    var size = data[index] | data[index + 1] << 8 | data[index + 2] << 16 | data[index + 3] << 24;
    options.index = index;
    documents[docStartIndex + i3] = deserializer(data, options);
    index = index + size;
  }
  return index;
}
var bson = {
  // constants
  // NOTE: this is done this way because rollup can't resolve an `Object.assign`ed export
  BSON_INT32_MAX: constants.BSON_INT32_MAX,
  BSON_INT32_MIN: constants.BSON_INT32_MIN,
  BSON_INT64_MAX: constants.BSON_INT64_MAX,
  BSON_INT64_MIN: constants.BSON_INT64_MIN,
  JS_INT_MAX: constants.JS_INT_MAX,
  JS_INT_MIN: constants.JS_INT_MIN,
  BSON_DATA_NUMBER: constants.BSON_DATA_NUMBER,
  BSON_DATA_STRING: constants.BSON_DATA_STRING,
  BSON_DATA_OBJECT: constants.BSON_DATA_OBJECT,
  BSON_DATA_ARRAY: constants.BSON_DATA_ARRAY,
  BSON_DATA_BINARY: constants.BSON_DATA_BINARY,
  BSON_DATA_UNDEFINED: constants.BSON_DATA_UNDEFINED,
  BSON_DATA_OID: constants.BSON_DATA_OID,
  BSON_DATA_BOOLEAN: constants.BSON_DATA_BOOLEAN,
  BSON_DATA_DATE: constants.BSON_DATA_DATE,
  BSON_DATA_NULL: constants.BSON_DATA_NULL,
  BSON_DATA_REGEXP: constants.BSON_DATA_REGEXP,
  BSON_DATA_DBPOINTER: constants.BSON_DATA_DBPOINTER,
  BSON_DATA_CODE: constants.BSON_DATA_CODE,
  BSON_DATA_SYMBOL: constants.BSON_DATA_SYMBOL,
  BSON_DATA_CODE_W_SCOPE: constants.BSON_DATA_CODE_W_SCOPE,
  BSON_DATA_INT: constants.BSON_DATA_INT,
  BSON_DATA_TIMESTAMP: constants.BSON_DATA_TIMESTAMP,
  BSON_DATA_LONG: constants.BSON_DATA_LONG,
  BSON_DATA_DECIMAL128: constants.BSON_DATA_DECIMAL128,
  BSON_DATA_MIN_KEY: constants.BSON_DATA_MIN_KEY,
  BSON_DATA_MAX_KEY: constants.BSON_DATA_MAX_KEY,
  BSON_BINARY_SUBTYPE_DEFAULT: constants.BSON_BINARY_SUBTYPE_DEFAULT,
  BSON_BINARY_SUBTYPE_FUNCTION: constants.BSON_BINARY_SUBTYPE_FUNCTION,
  BSON_BINARY_SUBTYPE_BYTE_ARRAY: constants.BSON_BINARY_SUBTYPE_BYTE_ARRAY,
  BSON_BINARY_SUBTYPE_UUID: constants.BSON_BINARY_SUBTYPE_UUID,
  BSON_BINARY_SUBTYPE_MD5: constants.BSON_BINARY_SUBTYPE_MD5,
  BSON_BINARY_SUBTYPE_USER_DEFINED: constants.BSON_BINARY_SUBTYPE_USER_DEFINED,
  // wrapped types
  Code: code,
  Map: map,
  BSONSymbol: symbol,
  DBRef: db_ref,
  Binary: binary,
  ObjectId: objectid,
  Long: long_1,
  Timestamp: timestamp,
  Double: double_1,
  Int32: int_32,
  MinKey: min_key,
  MaxKey: max_key,
  BSONRegExp: regexp,
  Decimal128: decimal128,
  // methods
  serialize: serialize$1,
  serializeWithBufferAndIndex,
  deserialize: deserialize$2,
  calculateObjectSize: calculateObjectSize$1,
  deserializeStream,
  setInternalBufferSize,
  // legacy support
  ObjectID: objectid,
  // Extended JSON
  EJSON: extended_json
};
var bson_1 = bson.BSON_INT32_MAX;
var bson_2 = bson.BSON_INT32_MIN;
var bson_3 = bson.BSON_INT64_MAX;
var bson_4 = bson.BSON_INT64_MIN;
var bson_5 = bson.JS_INT_MAX;
var bson_6 = bson.JS_INT_MIN;
var bson_7 = bson.BSON_DATA_NUMBER;
var bson_8 = bson.BSON_DATA_STRING;
var bson_9 = bson.BSON_DATA_OBJECT;
var bson_10 = bson.BSON_DATA_ARRAY;
var bson_11 = bson.BSON_DATA_BINARY;
var bson_12 = bson.BSON_DATA_UNDEFINED;
var bson_13 = bson.BSON_DATA_OID;
var bson_14 = bson.BSON_DATA_BOOLEAN;
var bson_15 = bson.BSON_DATA_DATE;
var bson_16 = bson.BSON_DATA_NULL;
var bson_17 = bson.BSON_DATA_REGEXP;
var bson_18 = bson.BSON_DATA_DBPOINTER;
var bson_19 = bson.BSON_DATA_CODE;
var bson_20 = bson.BSON_DATA_SYMBOL;
var bson_21 = bson.BSON_DATA_CODE_W_SCOPE;
var bson_22 = bson.BSON_DATA_INT;
var bson_23 = bson.BSON_DATA_TIMESTAMP;
var bson_24 = bson.BSON_DATA_LONG;
var bson_25 = bson.BSON_DATA_DECIMAL128;
var bson_26 = bson.BSON_DATA_MIN_KEY;
var bson_27 = bson.BSON_DATA_MAX_KEY;
var bson_28 = bson.BSON_BINARY_SUBTYPE_DEFAULT;
var bson_29 = bson.BSON_BINARY_SUBTYPE_FUNCTION;
var bson_30 = bson.BSON_BINARY_SUBTYPE_BYTE_ARRAY;
var bson_31 = bson.BSON_BINARY_SUBTYPE_UUID;
var bson_32 = bson.BSON_BINARY_SUBTYPE_MD5;
var bson_33 = bson.BSON_BINARY_SUBTYPE_USER_DEFINED;
var bson_34 = bson.Code;
var bson_35 = bson.BSONSymbol;
var bson_36 = bson.DBRef;
var bson_37 = bson.Binary;
var bson_38 = bson.ObjectId;
var bson_39 = bson.Long;
var bson_40 = bson.Timestamp;
var bson_41 = bson.Double;
var bson_42 = bson.Int32;
var bson_43 = bson.MinKey;
var bson_44 = bson.MaxKey;
var bson_45 = bson.BSONRegExp;
var bson_46 = bson.Decimal128;
var bson_47 = bson.serialize;
var bson_48 = bson.serializeWithBufferAndIndex;
var bson_49 = bson.deserialize;
var bson_50 = bson.calculateObjectSize;
var bson_51 = bson.deserializeStream;
var bson_52 = bson.setInternalBufferSize;
var bson_53 = bson.ObjectID;
var bson_54 = bson.EJSON;
var bson_browser_esm_default = bson;

// node_modules/mongodb-stitch-core-sdk/dist/esm/auth/internal/AuthEvent.js
var AuthEventKind;
(function(AuthEventKind2) {
  AuthEventKind2[AuthEventKind2["ActiveUserChanged"] = 0] = "ActiveUserChanged";
  AuthEventKind2[AuthEventKind2["ListenerRegistered"] = 1] = "ListenerRegistered";
  AuthEventKind2[AuthEventKind2["UserAdded"] = 2] = "UserAdded";
  AuthEventKind2[AuthEventKind2["UserLinked"] = 3] = "UserLinked";
  AuthEventKind2[AuthEventKind2["UserLoggedIn"] = 4] = "UserLoggedIn";
  AuthEventKind2[AuthEventKind2["UserLoggedOut"] = 5] = "UserLoggedOut";
  AuthEventKind2[AuthEventKind2["UserRemoved"] = 6] = "UserRemoved";
})(AuthEventKind || (AuthEventKind = {}));

// node_modules/mongodb-stitch-core-sdk/dist/esm/auth/internal/AuthInfo.js
var AuthInfo = function() {
  function AuthInfo2(userId, deviceId, accessToken, refreshToken, loggedInProviderType, loggedInProviderName, lastAuthActivity, userProfile) {
    this.userId = userId;
    this.deviceId = deviceId;
    this.accessToken = accessToken;
    this.refreshToken = refreshToken;
    this.loggedInProviderType = loggedInProviderType;
    this.loggedInProviderName = loggedInProviderName;
    this.lastAuthActivity = lastAuthActivity;
    this.userProfile = userProfile;
  }
  AuthInfo2.empty = function() {
    return new AuthInfo2(void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0);
  };
  Object.defineProperty(AuthInfo2.prototype, "hasUser", {
    get: function() {
      return this.userId !== void 0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AuthInfo2.prototype, "isEmpty", {
    get: function() {
      return this.deviceId === void 0;
    },
    enumerable: true,
    configurable: true
  });
  AuthInfo2.prototype.loggedOut = function() {
    return new AuthInfo2(this.userId, this.deviceId, void 0, void 0, this.loggedInProviderType, this.loggedInProviderName, /* @__PURE__ */ new Date(), this.userProfile);
  };
  AuthInfo2.prototype.withClearedUser = function() {
    return new AuthInfo2(void 0, this.deviceId, void 0, void 0, void 0, void 0, void 0, void 0);
  };
  AuthInfo2.prototype.withAuthProvider = function(providerType, providerName) {
    return new AuthInfo2(this.userId, this.deviceId, this.accessToken, this.refreshToken, providerType, providerName, /* @__PURE__ */ new Date(), this.userProfile);
  };
  AuthInfo2.prototype.withNewAuthActivityTime = function() {
    return new AuthInfo2(this.userId, this.deviceId, this.accessToken, this.refreshToken, this.loggedInProviderType, this.loggedInProviderName, /* @__PURE__ */ new Date(), this.userProfile);
  };
  Object.defineProperty(AuthInfo2.prototype, "isLoggedIn", {
    get: function() {
      return this.accessToken !== void 0 && this.refreshToken !== void 0;
    },
    enumerable: true,
    configurable: true
  });
  AuthInfo2.prototype.merge = function(newInfo) {
    return new AuthInfo2(newInfo.userId === void 0 ? this.userId : newInfo.userId, newInfo.deviceId === void 0 ? this.deviceId : newInfo.deviceId, newInfo.accessToken === void 0 ? this.accessToken : newInfo.accessToken, newInfo.refreshToken === void 0 ? this.refreshToken : newInfo.refreshToken, newInfo.loggedInProviderType === void 0 ? this.loggedInProviderType : newInfo.loggedInProviderType, newInfo.loggedInProviderName === void 0 ? this.loggedInProviderName : newInfo.loggedInProviderName, newInfo.lastAuthActivity === void 0 ? this.lastAuthActivity : newInfo.lastAuthActivity, newInfo.userProfile === void 0 ? this.userProfile : newInfo.userProfile);
  };
  return AuthInfo2;
}();
var AuthInfo_default = AuthInfo;

// node_modules/mongodb-stitch-core-sdk/dist/esm/StitchError.js
var __extends = function() {
  var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d, b) {
    d.__proto__ = b;
  } || function(d, b) {
    for (var p in b)
      if (b.hasOwnProperty(p))
        d[p] = b[p];
  };
  return function(d, b) {
    extendStatics(d, b);
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();
var _Error = function(message) {
  Error.call(this, message);
  if (Error.captureStackTrace) {
    Error.captureStackTrace(this);
  }
  this.message = message;
  this.name = this.constructor.name;
};
_Error.prototype = Object.create(Error.prototype);
var StitchError = function(_super) {
  __extends(StitchError2, _super);
  function StitchError2() {
    return _super !== null && _super.apply(this, arguments) || this;
  }
  return StitchError2;
}(_Error);
var StitchError_default = StitchError;

// node_modules/mongodb-stitch-core-sdk/dist/esm/StitchRequestErrorCode.js
var _a;
var StitchRequestErrorCode;
(function(StitchRequestErrorCode2) {
  StitchRequestErrorCode2[StitchRequestErrorCode2["TRANSPORT_ERROR"] = 0] = "TRANSPORT_ERROR";
  StitchRequestErrorCode2[StitchRequestErrorCode2["DECODING_ERROR"] = 1] = "DECODING_ERROR";
  StitchRequestErrorCode2[StitchRequestErrorCode2["ENCODING_ERROR"] = 2] = "ENCODING_ERROR";
})(StitchRequestErrorCode || (StitchRequestErrorCode = {}));
var requestErrorCodeDescs = (_a = {}, _a[StitchRequestErrorCode.TRANSPORT_ERROR] = "the request transport encountered an error communicating with Stitch", _a[StitchRequestErrorCode.DECODING_ERROR] = "an error occurred while decoding a response from Stitch", _a[StitchRequestErrorCode.ENCODING_ERROR] = "an error occurred while encoding a request for Stitch", _a);

// node_modules/mongodb-stitch-core-sdk/dist/esm/StitchRequestError.js
var __extends2 = function() {
  var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d, b) {
    d.__proto__ = b;
  } || function(d, b) {
    for (var p in b)
      if (b.hasOwnProperty(p))
        d[p] = b[p];
  };
  return function(d, b) {
    extendStatics(d, b);
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();
var StitchRequestError = function(_super) {
  __extends2(StitchRequestError2, _super);
  function StitchRequestError2(underlyingError, errorCode) {
    var _this = this;
    var message = "(" + StitchRequestErrorCode[errorCode] + "): " + requestErrorCodeDescs[errorCode] + ": " + underlyingError.message;
    _this = _super.call(this, message) || this;
    _this.underlyingError = underlyingError;
    _this.errorCode = errorCode;
    _this.errorCodeName = StitchRequestErrorCode[errorCode];
    return _this;
  }
  return StitchRequestError2;
}(StitchError_default);
var StitchRequestError_default = StitchRequestError;

// node_modules/mongodb-stitch-core-sdk/dist/esm/StitchServiceErrorCode.js
var StitchServiceErrorCode;
(function(StitchServiceErrorCode2) {
  StitchServiceErrorCode2[StitchServiceErrorCode2["MissingAuthReq"] = 0] = "MissingAuthReq";
  StitchServiceErrorCode2[StitchServiceErrorCode2["InvalidSession"] = 1] = "InvalidSession";
  StitchServiceErrorCode2[StitchServiceErrorCode2["UserAppDomainMismatch"] = 2] = "UserAppDomainMismatch";
  StitchServiceErrorCode2[StitchServiceErrorCode2["DomainNotAllowed"] = 3] = "DomainNotAllowed";
  StitchServiceErrorCode2[StitchServiceErrorCode2["ReadSizeLimitExceeded"] = 4] = "ReadSizeLimitExceeded";
  StitchServiceErrorCode2[StitchServiceErrorCode2["InvalidParameter"] = 5] = "InvalidParameter";
  StitchServiceErrorCode2[StitchServiceErrorCode2["MissingParameter"] = 6] = "MissingParameter";
  StitchServiceErrorCode2[StitchServiceErrorCode2["TwilioError"] = 7] = "TwilioError";
  StitchServiceErrorCode2[StitchServiceErrorCode2["GCMError"] = 8] = "GCMError";
  StitchServiceErrorCode2[StitchServiceErrorCode2["HTTPError"] = 9] = "HTTPError";
  StitchServiceErrorCode2[StitchServiceErrorCode2["AWSError"] = 10] = "AWSError";
  StitchServiceErrorCode2[StitchServiceErrorCode2["MongoDBError"] = 11] = "MongoDBError";
  StitchServiceErrorCode2[StitchServiceErrorCode2["ArgumentsNotAllowed"] = 12] = "ArgumentsNotAllowed";
  StitchServiceErrorCode2[StitchServiceErrorCode2["FunctionExecutionError"] = 13] = "FunctionExecutionError";
  StitchServiceErrorCode2[StitchServiceErrorCode2["NoMatchingRuleFound"] = 14] = "NoMatchingRuleFound";
  StitchServiceErrorCode2[StitchServiceErrorCode2["InternalServerError"] = 15] = "InternalServerError";
  StitchServiceErrorCode2[StitchServiceErrorCode2["AuthProviderNotFound"] = 16] = "AuthProviderNotFound";
  StitchServiceErrorCode2[StitchServiceErrorCode2["AuthProviderAlreadyExists"] = 17] = "AuthProviderAlreadyExists";
  StitchServiceErrorCode2[StitchServiceErrorCode2["ServiceNotFound"] = 18] = "ServiceNotFound";
  StitchServiceErrorCode2[StitchServiceErrorCode2["ServiceTypeNotFound"] = 19] = "ServiceTypeNotFound";
  StitchServiceErrorCode2[StitchServiceErrorCode2["ServiceAlreadyExists"] = 20] = "ServiceAlreadyExists";
  StitchServiceErrorCode2[StitchServiceErrorCode2["ServiceCommandNotFound"] = 21] = "ServiceCommandNotFound";
  StitchServiceErrorCode2[StitchServiceErrorCode2["ValueNotFound"] = 22] = "ValueNotFound";
  StitchServiceErrorCode2[StitchServiceErrorCode2["ValueAlreadyExists"] = 23] = "ValueAlreadyExists";
  StitchServiceErrorCode2[StitchServiceErrorCode2["ValueDuplicateName"] = 24] = "ValueDuplicateName";
  StitchServiceErrorCode2[StitchServiceErrorCode2["FunctionNotFound"] = 25] = "FunctionNotFound";
  StitchServiceErrorCode2[StitchServiceErrorCode2["FunctionAlreadyExists"] = 26] = "FunctionAlreadyExists";
  StitchServiceErrorCode2[StitchServiceErrorCode2["FunctionDuplicateName"] = 27] = "FunctionDuplicateName";
  StitchServiceErrorCode2[StitchServiceErrorCode2["FunctionSyntaxError"] = 28] = "FunctionSyntaxError";
  StitchServiceErrorCode2[StitchServiceErrorCode2["FunctionInvalid"] = 29] = "FunctionInvalid";
  StitchServiceErrorCode2[StitchServiceErrorCode2["IncomingWebhookNotFound"] = 30] = "IncomingWebhookNotFound";
  StitchServiceErrorCode2[StitchServiceErrorCode2["IncomingWebhookAlreadyExists"] = 31] = "IncomingWebhookAlreadyExists";
  StitchServiceErrorCode2[StitchServiceErrorCode2["IncomingWebhookDuplicateName"] = 32] = "IncomingWebhookDuplicateName";
  StitchServiceErrorCode2[StitchServiceErrorCode2["RuleNotFound"] = 33] = "RuleNotFound";
  StitchServiceErrorCode2[StitchServiceErrorCode2["ApiKeyNotFound"] = 34] = "ApiKeyNotFound";
  StitchServiceErrorCode2[StitchServiceErrorCode2["RuleAlreadyExists"] = 35] = "RuleAlreadyExists";
  StitchServiceErrorCode2[StitchServiceErrorCode2["RuleDuplicateName"] = 36] = "RuleDuplicateName";
  StitchServiceErrorCode2[StitchServiceErrorCode2["AuthProviderDuplicateName"] = 37] = "AuthProviderDuplicateName";
  StitchServiceErrorCode2[StitchServiceErrorCode2["RestrictedHost"] = 38] = "RestrictedHost";
  StitchServiceErrorCode2[StitchServiceErrorCode2["ApiKeyAlreadyExists"] = 39] = "ApiKeyAlreadyExists";
  StitchServiceErrorCode2[StitchServiceErrorCode2["IncomingWebhookAuthFailed"] = 40] = "IncomingWebhookAuthFailed";
  StitchServiceErrorCode2[StitchServiceErrorCode2["ExecutionTimeLimitExceeded"] = 41] = "ExecutionTimeLimitExceeded";
  StitchServiceErrorCode2[StitchServiceErrorCode2["FunctionNotCallable"] = 42] = "FunctionNotCallable";
  StitchServiceErrorCode2[StitchServiceErrorCode2["UserAlreadyConfirmed"] = 43] = "UserAlreadyConfirmed";
  StitchServiceErrorCode2[StitchServiceErrorCode2["UserNotFound"] = 44] = "UserNotFound";
  StitchServiceErrorCode2[StitchServiceErrorCode2["UserDisabled"] = 45] = "UserDisabled";
  StitchServiceErrorCode2[StitchServiceErrorCode2["Unknown"] = 46] = "Unknown";
})(StitchServiceErrorCode || (StitchServiceErrorCode = {}));
var apiErrorCodes = {
  APIKeyAlreadyExists: StitchServiceErrorCode.ApiKeyAlreadyExists,
  APIKeyNotFound: StitchServiceErrorCode.ApiKeyNotFound,
  AWSError: StitchServiceErrorCode.AWSError,
  ArgumentsNotAllowed: StitchServiceErrorCode.ArgumentsNotAllowed,
  AuthProviderAlreadyExists: StitchServiceErrorCode.AuthProviderAlreadyExists,
  AuthProviderDuplicateName: StitchServiceErrorCode.AuthProviderDuplicateName,
  AuthProviderNotFound: StitchServiceErrorCode.AuthProviderNotFound,
  DomainNotAllowed: StitchServiceErrorCode.DomainNotAllowed,
  ExecutionTimeLimitExceeded: StitchServiceErrorCode.ExecutionTimeLimitExceeded,
  FunctionAlreadyExists: StitchServiceErrorCode.FunctionAlreadyExists,
  FunctionDuplicateName: StitchServiceErrorCode.FunctionDuplicateName,
  FunctionExecutionError: StitchServiceErrorCode.FunctionExecutionError,
  FunctionInvalid: StitchServiceErrorCode.FunctionInvalid,
  FunctionNotCallable: StitchServiceErrorCode.FunctionNotCallable,
  FunctionNotFound: StitchServiceErrorCode.FunctionNotFound,
  FunctionSyntaxError: StitchServiceErrorCode.FunctionSyntaxError,
  GCMError: StitchServiceErrorCode.GCMError,
  HTTPError: StitchServiceErrorCode.HTTPError,
  IncomingWebhookAlreadyExists: StitchServiceErrorCode.IncomingWebhookAlreadyExists,
  IncomingWebhookAuthFailed: StitchServiceErrorCode.IncomingWebhookAuthFailed,
  IncomingWebhookDuplicateName: StitchServiceErrorCode.IncomingWebhookDuplicateName,
  IncomingWebhookNotFound: StitchServiceErrorCode.IncomingWebhookNotFound,
  InternalServerError: StitchServiceErrorCode.InternalServerError,
  InvalidParameter: StitchServiceErrorCode.InvalidParameter,
  InvalidSession: StitchServiceErrorCode.InvalidSession,
  MissingAuthReq: StitchServiceErrorCode.MissingAuthReq,
  MissingParameter: StitchServiceErrorCode.MissingParameter,
  MongoDBError: StitchServiceErrorCode.MongoDBError,
  NoMatchingRuleFound: StitchServiceErrorCode.NoMatchingRuleFound,
  ReadSizeLimitExceeded: StitchServiceErrorCode.ReadSizeLimitExceeded,
  RestrictedHost: StitchServiceErrorCode.RestrictedHost,
  RuleAlreadyExists: StitchServiceErrorCode.RuleAlreadyExists,
  RuleDuplicateName: StitchServiceErrorCode.RuleDuplicateName,
  RuleNotFound: StitchServiceErrorCode.RuleNotFound,
  ServiceAlreadyExists: StitchServiceErrorCode.ServiceAlreadyExists,
  ServiceCommandNotFound: StitchServiceErrorCode.ServiceCommandNotFound,
  ServiceNotFound: StitchServiceErrorCode.ServiceNotFound,
  ServiceTypeNotFound: StitchServiceErrorCode.ServiceTypeNotFound,
  TwilioError: StitchServiceErrorCode.TwilioError,
  UserAlreadyConfirmed: StitchServiceErrorCode.UserAlreadyConfirmed,
  UserAppDomainMismatch: StitchServiceErrorCode.UserAppDomainMismatch,
  UserDisabled: StitchServiceErrorCode.UserDisabled,
  UserNotFound: StitchServiceErrorCode.UserNotFound,
  ValueAlreadyExists: StitchServiceErrorCode.ValueAlreadyExists,
  ValueDuplicateName: StitchServiceErrorCode.ValueDuplicateName,
  ValueNotFound: StitchServiceErrorCode.ValueNotFound
};
function stitchServiceErrorCodeFromApi(code3) {
  if (!(code3 in apiErrorCodes)) {
    return StitchServiceErrorCode.Unknown;
  }
  return apiErrorCodes[code3];
}

// node_modules/mongodb-stitch-core-sdk/dist/esm/StitchServiceError.js
var __extends3 = function() {
  var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d, b) {
    d.__proto__ = b;
  } || function(d, b) {
    for (var p in b)
      if (b.hasOwnProperty(p))
        d[p] = b[p];
  };
  return function(d, b) {
    extendStatics(d, b);
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();
var StitchServiceError = function(_super) {
  __extends3(StitchServiceError2, _super);
  function StitchServiceError2(message, errorCode) {
    if (errorCode === void 0) {
      errorCode = StitchServiceErrorCode.Unknown;
    }
    var _this = _super.call(this, message) || this;
    _this.message = message;
    _this.errorCode = errorCode;
    _this.errorCodeName = StitchServiceErrorCode[errorCode];
    return _this;
  }
  return StitchServiceError2;
}(StitchError_default);
var StitchServiceError_default = StitchServiceError;

// node_modules/mongodb-stitch-core-sdk/dist/esm/internal/net/ContentTypes.js
var ContentTypes = function() {
  function ContentTypes2() {
  }
  ContentTypes2.APPLICATION_JSON = "application/json";
  ContentTypes2.TEXT_EVENT_STREAM = "text/event-stream";
  return ContentTypes2;
}();
var ContentTypes_default = ContentTypes;

// node_modules/mongodb-stitch-core-sdk/dist/esm/internal/net/Headers.js
var Headers = function() {
  function Headers3() {
  }
  Headers3.getAuthorizationBearer = function(value2) {
    return Headers3.AUTHORIZATION_BEARER + " " + value2;
  };
  Headers3.CONTENT_TYPE_CANON = "Content-Type";
  Headers3.CONTENT_TYPE = Headers3.CONTENT_TYPE_CANON.toLocaleLowerCase();
  Headers3.AUTHORIZATION_CANON = "Authorization";
  Headers3.AUTHORIZATION = Headers3.AUTHORIZATION_CANON.toLocaleLowerCase();
  Headers3.ACCEPT_CANON = "Accept";
  Headers3.ACCEPT = Headers3.ACCEPT_CANON.toLocaleLowerCase();
  Headers3.AUTHORIZATION_BEARER = "Bearer";
  return Headers3;
}();
var Headers_default = Headers;

// node_modules/mongodb-stitch-core-sdk/dist/esm/internal/common/StitchErrorUtils.js
var Fields;
(function(Fields16) {
  Fields16["ERROR"] = "error";
  Fields16["ERROR_CODE"] = "error_code";
})(Fields || (Fields = {}));
function wrapDecodingError(err) {
  if (err instanceof StitchError_default) {
    return err;
  }
  return new StitchRequestError_default(err, StitchRequestErrorCode.DECODING_ERROR);
}
function handleRequestError(response) {
  if (response.body === void 0) {
    throw new StitchServiceError_default("received unexpected status code " + response.statusCode, StitchServiceErrorCode.Unknown);
  }
  var body;
  try {
    body = response.body;
  } catch (e) {
    throw new StitchServiceError_default("received unexpected status code " + response.statusCode, StitchServiceErrorCode.Unknown);
  }
  var errorMsg = handleRichError(response, body);
  throw new StitchServiceError_default(errorMsg, StitchServiceErrorCode.Unknown);
}
function handleRichError(response, body) {
  if (response.headers[Headers_default.CONTENT_TYPE] === void 0 || response.headers[Headers_default.CONTENT_TYPE] !== void 0 && response.headers[Headers_default.CONTENT_TYPE] !== ContentTypes_default.APPLICATION_JSON) {
    return body;
  }
  var bsonObj = JSON.parse(body);
  if (!(bsonObj instanceof Object)) {
    return body;
  }
  var doc = bsonObj;
  if (doc[Fields.ERROR] === void 0) {
    return body;
  }
  var errorMsg = doc[Fields.ERROR];
  if (doc[Fields.ERROR_CODE] === void 0) {
    return errorMsg;
  }
  var errorCode = doc[Fields.ERROR_CODE];
  throw new StitchServiceError_default(errorMsg, stitchServiceErrorCodeFromApi(errorCode));
}

// node_modules/mongodb-stitch-core-sdk/dist/esm/internal/net/Method.js
var Method;
(function(Method2) {
  Method2["GET"] = "GET";
  Method2["POST"] = "POST";
  Method2["PUT"] = "PUT";
  Method2["DELETE"] = "DELETE";
  Method2["HEAD"] = "HEAD";
  Method2["OPTIONS"] = "OPTIONS";
  Method2["TRACE"] = "TRACE";
  Method2["PATCH"] = "PATCH";
})(Method || (Method = {}));
var Method_default = Method;

// node_modules/mongodb-stitch-core-sdk/dist/esm/internal/net/StitchRequest.js
var StitchRequest = function() {
  function StitchRequest2(method, path, headers, startedAt, body) {
    this.method = method;
    this.path = path;
    this.headers = headers;
    this.body = body;
    this.startedAt = startedAt;
  }
  Object.defineProperty(StitchRequest2.prototype, "builder", {
    get: function() {
      return new StitchRequest2.Builder(this);
    },
    enumerable: true,
    configurable: true
  });
  return StitchRequest2;
}();
(function(StitchRequest2) {
  var Builder = function() {
    function Builder2(request) {
      if (request !== void 0) {
        this.method = request.method;
        this.path = request.path;
        this.headers = request.headers;
        this.body = request.body;
        this.startedAt = request.startedAt;
      }
    }
    Builder2.prototype.withMethod = function(method) {
      this.method = method;
      return this;
    };
    Builder2.prototype.withPath = function(path) {
      this.path = path;
      return this;
    };
    Builder2.prototype.withHeaders = function(headers) {
      this.headers = headers;
      return this;
    };
    Builder2.prototype.withBody = function(body) {
      this.body = body;
      return this;
    };
    Builder2.prototype.build = function() {
      if (this.method === void 0) {
        throw Error("must set method");
      }
      if (this.path === void 0) {
        throw Error("must set non-empty path");
      }
      if (this.startedAt === void 0) {
        this.startedAt = Date.now() / 1e3;
      }
      return new StitchRequest2(this.method, this.path, this.headers === void 0 ? {} : this.headers, this.startedAt, this.body);
    };
    return Builder2;
  }();
  StitchRequest2.Builder = Builder;
})(StitchRequest || (StitchRequest = {}));

// node_modules/mongodb-stitch-core-sdk/dist/esm/internal/net/StitchAuthRequest.js
var __extends4 = function() {
  var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d, b) {
    d.__proto__ = b;
  } || function(d, b) {
    for (var p in b)
      if (b.hasOwnProperty(p))
        d[p] = b[p];
  };
  return function(d, b) {
    extendStatics(d, b);
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();
var StitchAuthRequest = function(_super) {
  __extends4(StitchAuthRequest2, _super);
  function StitchAuthRequest2(request, useRefreshToken, shouldRefreshOnFailure) {
    if (useRefreshToken === void 0) {
      useRefreshToken = false;
    }
    if (shouldRefreshOnFailure === void 0) {
      shouldRefreshOnFailure = true;
    }
    var _this = _super.call(this, request.method, request.path, request.headers, request.startedAt, request.body) || this;
    _this.useRefreshToken = useRefreshToken;
    _this.shouldRefreshOnFailure = shouldRefreshOnFailure;
    return _this;
  }
  Object.defineProperty(StitchAuthRequest2.prototype, "builder", {
    get: function() {
      return new StitchAuthRequest2.Builder(this);
    },
    enumerable: true,
    configurable: true
  });
  return StitchAuthRequest2;
}(StitchRequest);
(function(StitchAuthRequest2) {
  var Builder = function(_super) {
    __extends4(Builder2, _super);
    function Builder2(request) {
      return _super.call(this, request) || this;
    }
    Builder2.prototype.withAccessToken = function() {
      this.useRefreshToken = false;
      return this;
    };
    Builder2.prototype.withRefreshToken = function() {
      this.useRefreshToken = true;
      return this;
    };
    Builder2.prototype.withShouldRefreshOnFailure = function(shouldRefreshOnFailure) {
      this.shouldRefreshOnFailure = shouldRefreshOnFailure;
      return this;
    };
    Builder2.prototype.build = function() {
      if (this.useRefreshToken) {
        this.shouldRefreshOnFailure = false;
      }
      return new StitchAuthRequest2(_super.prototype.build.call(this), this.useRefreshToken, this.shouldRefreshOnFailure);
    };
    return Builder2;
  }(StitchRequest.Builder);
  StitchAuthRequest2.Builder = Builder;
})(StitchAuthRequest || (StitchAuthRequest = {}));

// node_modules/mongodb-stitch-core-sdk/dist/esm/internal/net/StitchAuthDocRequest.js
var __extends5 = function() {
  var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d, b) {
    d.__proto__ = b;
  } || function(d, b) {
    for (var p in b)
      if (b.hasOwnProperty(p))
        d[p] = b[p];
  };
  return function(d, b) {
    extendStatics(d, b);
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();
var StitchAuthDocRequest = function(_super) {
  __extends5(StitchAuthDocRequest2, _super);
  function StitchAuthDocRequest2(request, document) {
    var _this = this;
    request instanceof StitchAuthRequest ? _this = _super.call(this, request, request.useRefreshToken, request.shouldRefreshOnFailure) || this : _this = _super.call(this, request) || this;
    _this.document = document;
    return _this;
  }
  Object.defineProperty(StitchAuthDocRequest2.prototype, "builder", {
    get: function() {
      return new StitchAuthDocRequest2.Builder(this);
    },
    enumerable: true,
    configurable: true
  });
  return StitchAuthDocRequest2;
}(StitchAuthRequest);
(function(StitchAuthDocRequest2) {
  var Builder = function(_super) {
    __extends5(Builder2, _super);
    function Builder2(request) {
      var _this = _super.call(this, request) || this;
      if (request !== void 0) {
        _this.document = request.document;
        _this.useRefreshToken = request.useRefreshToken;
      }
      return _this;
    }
    Builder2.prototype.withDocument = function(document) {
      this.document = document;
      return this;
    };
    Builder2.prototype.withAccessToken = function() {
      this.useRefreshToken = false;
      return this;
    };
    Builder2.prototype.build = function() {
      if (this.document === void 0 || !(this.document instanceof Object)) {
        throw new Error("document must be set: " + this.document);
      }
      if (this.headers === void 0) {
        this.withHeaders({});
      }
      this.headers[Headers_default.CONTENT_TYPE] = ContentTypes_default.APPLICATION_JSON;
      this.withBody(bson_54.stringify(this.document, { relaxed: false }));
      return new StitchAuthDocRequest2(_super.prototype.build.call(this), this.document);
    };
    return Builder2;
  }(StitchAuthRequest.Builder);
  StitchAuthDocRequest2.Builder = Builder;
})(StitchAuthDocRequest || (StitchAuthDocRequest = {}));

// node_modules/mongodb-stitch-core-sdk/dist/esm/internal/net/StitchDocRequest.js
var __extends6 = function() {
  var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d, b) {
    d.__proto__ = b;
  } || function(d, b) {
    for (var p in b)
      if (b.hasOwnProperty(p))
        d[p] = b[p];
  };
  return function(d, b) {
    extendStatics(d, b);
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();
var StitchDocRequest = function(_super) {
  __extends6(StitchDocRequest2, _super);
  function StitchDocRequest2(request, document) {
    var _this = _super.call(this, request.method, request.path, request.headers, request.startedAt, request.body) || this;
    _this.document = document;
    return _this;
  }
  Object.defineProperty(StitchDocRequest2.prototype, "builder", {
    get: function() {
      return new StitchDocRequest2.Builder(this);
    },
    enumerable: true,
    configurable: true
  });
  return StitchDocRequest2;
}(StitchRequest);
(function(StitchDocRequest2) {
  var Builder = function(_super) {
    __extends6(Builder2, _super);
    function Builder2(request) {
      var _this = _super.call(this, request) || this;
      if (request !== void 0) {
        _this.document = request.document;
      }
      return _this;
    }
    Builder2.prototype.withDocument = function(document) {
      this.document = document;
      return this;
    };
    Builder2.prototype.build = function() {
      if (this.document === void 0 || !(this.document instanceof Object)) {
        throw new Error("document must be set");
      }
      if (this.headers === void 0) {
        this.withHeaders({});
      }
      this.headers[Headers_default.CONTENT_TYPE] = ContentTypes_default.APPLICATION_JSON;
      this.withBody(bson_54.stringify(this.document, { relaxed: false }));
      return new StitchDocRequest2(_super.prototype.build.call(this), this.document);
    };
    return Builder2;
  }(StitchRequest.Builder);
  StitchDocRequest2.Builder = Builder;
})(StitchDocRequest || (StitchDocRequest = {}));

// node_modules/mongodb-stitch-core-sdk/dist/esm/StitchClientErrorCode.js
var _a2;
var StitchClientErrorCode;
(function(StitchClientErrorCode2) {
  StitchClientErrorCode2[StitchClientErrorCode2["LoggedOutDuringRequest"] = 0] = "LoggedOutDuringRequest";
  StitchClientErrorCode2[StitchClientErrorCode2["MustAuthenticateFirst"] = 1] = "MustAuthenticateFirst";
  StitchClientErrorCode2[StitchClientErrorCode2["UserNoLongerValid"] = 2] = "UserNoLongerValid";
  StitchClientErrorCode2[StitchClientErrorCode2["UserNotFound"] = 3] = "UserNotFound";
  StitchClientErrorCode2[StitchClientErrorCode2["UserNotLoggedIn"] = 4] = "UserNotLoggedIn";
  StitchClientErrorCode2[StitchClientErrorCode2["CouldNotLoadPersistedAuthInfo"] = 5] = "CouldNotLoadPersistedAuthInfo";
  StitchClientErrorCode2[StitchClientErrorCode2["CouldNotPersistAuthInfo"] = 6] = "CouldNotPersistAuthInfo";
  StitchClientErrorCode2[StitchClientErrorCode2["StreamingNotSupported"] = 7] = "StreamingNotSupported";
  StitchClientErrorCode2[StitchClientErrorCode2["StreamClosed"] = 8] = "StreamClosed";
  StitchClientErrorCode2[StitchClientErrorCode2["UnexpectedArguments"] = 9] = "UnexpectedArguments";
})(StitchClientErrorCode || (StitchClientErrorCode = {}));
var clientErrorCodeDescs = (_a2 = {}, _a2[StitchClientErrorCode.LoggedOutDuringRequest] = "logged out while making a request to Stitch", _a2[StitchClientErrorCode.MustAuthenticateFirst] = "method called requires being authenticated", _a2[StitchClientErrorCode.UserNoLongerValid] = "user instance being accessed is no longer valid; please get a new user with auth.getUser()", _a2[StitchClientErrorCode.UserNotFound] = "user not found in list of users", _a2[StitchClientErrorCode.UserNotLoggedIn] = "cannot make the active user a logged out user; please use loginWithCredential() to switch to this user", _a2[StitchClientErrorCode.CouldNotLoadPersistedAuthInfo] = "failed to load stored auth information for Stitch", _a2[StitchClientErrorCode.CouldNotPersistAuthInfo] = "failed to save auth information for Stitch", _a2[StitchClientErrorCode.StreamingNotSupported] = "streaming not supported in this SDK", _a2[StitchClientErrorCode.StreamClosed] = "stream is closed", _a2[StitchClientErrorCode.UnexpectedArguments] = "function does not accept arguments", _a2);

// node_modules/mongodb-stitch-core-sdk/dist/esm/StitchClientError.js
var __extends7 = function() {
  var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d, b) {
    d.__proto__ = b;
  } || function(d, b) {
    for (var p in b)
      if (b.hasOwnProperty(p))
        d[p] = b[p];
  };
  return function(d, b) {
    extendStatics(d, b);
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();
var StitchClientError = function(_super) {
  __extends7(StitchClientError2, _super);
  function StitchClientError2(errorCode) {
    var _this = this;
    var message = "(" + StitchClientErrorCode[errorCode] + "): " + clientErrorCodeDescs[errorCode];
    _this = _super.call(this, message) || this;
    _this.errorCode = errorCode;
    _this.errorCodeName = StitchClientErrorCode[errorCode];
    return _this;
  }
  return StitchClientError2;
}(StitchError_default);
var StitchClientError_default = StitchClientError;

// node_modules/mongodb-stitch-core-sdk/dist/esm/internal/net/Event.js
var Event = function() {
  function Event2(eventName, data) {
    this.eventName = eventName;
    this.data = data;
  }
  Event2.MESSAGE_EVENT = "message";
  return Event2;
}();
var Event_default = Event;

// node_modules/mongodb-stitch-core-sdk/dist/esm/internal/net/StitchEvent.js
var StitchEvent = function() {
  function StitchEvent2(eventName, data, decoder) {
    this.eventName = eventName;
    data = data ? data : "";
    var decodedStringBuffer = [];
    for (var chIdx = 0; chIdx < data.length; chIdx++) {
      var c = data[chIdx];
      switch (c) {
        case "%":
          if (chIdx + 2 >= data.length) {
            break;
          }
          var code3 = data.substring(chIdx + 1, chIdx + 3);
          var found = void 0;
          switch (code3) {
            case "25":
              found = true;
              decodedStringBuffer.push("%");
              break;
            case "0A":
              found = true;
              decodedStringBuffer.push("\n");
              break;
            case "0D":
              found = true;
              decodedStringBuffer.push("\r");
              break;
            default:
              found = false;
          }
          if (found) {
            chIdx += 2;
            continue;
          }
          break;
        default:
          break;
      }
      decodedStringBuffer.push(c);
    }
    var decodedData = decodedStringBuffer.join("");
    switch (this.eventName) {
      case StitchEvent2.ERROR_EVENT_NAME:
        var errorMsg = void 0;
        var errorCode = void 0;
        try {
          var errorDoc = bson_54.parse(decodedData, { strict: false });
          errorMsg = errorDoc[ErrorFields.Error];
          errorCode = stitchServiceErrorCodeFromApi(errorDoc[ErrorFields.ErrorCode]);
        } catch (error) {
          errorMsg = decodedData;
          errorCode = StitchServiceErrorCode.Unknown;
        }
        this.error = new StitchServiceError_default(errorMsg, errorCode);
        break;
      case Event_default.MESSAGE_EVENT:
        this.data = bson_54.parse(decodedData, { strict: false });
        if (decoder) {
          this.data = decoder.decode(this.data);
        }
        break;
    }
  }
  StitchEvent2.fromEvent = function(event, decoder) {
    return new StitchEvent2(event.eventName, event.data, decoder);
  };
  StitchEvent2.ERROR_EVENT_NAME = "error";
  return StitchEvent2;
}();
var StitchEvent_default = StitchEvent;
var ErrorFields;
(function(ErrorFields2) {
  ErrorFields2["Error"] = "error";
  ErrorFields2["ErrorCode"] = "error_code";
})(ErrorFields || (ErrorFields = {}));

// node_modules/mongodb-stitch-core-sdk/dist/esm/Stream.js
var Stream = function() {
  function Stream2(eventStream, decoder) {
    this.eventStream = eventStream;
    this.decoder = decoder;
    this.listeners = [];
  }
  Stream2.prototype.next = function() {
    var _this = this;
    return this.eventStream.nextEvent().then(function(event) {
      var se = StitchEvent_default.fromEvent(event, _this.decoder);
      if (se.eventName === StitchEvent_default.ERROR_EVENT_NAME) {
        throw se.error;
      }
      if (se.eventName === Event_default.MESSAGE_EVENT) {
        return se.data;
      }
      return _this.next();
    });
  };
  Stream2.prototype.onNext = function(callback) {
    var _this = this;
    var wrapper = {
      onEvent: function(e) {
        var se = StitchEvent_default.fromEvent(e, _this.decoder);
        if (se.eventName !== Event_default.MESSAGE_EVENT) {
          return;
        }
        callback(se.data);
      }
    };
    this.eventStream.addListener(wrapper);
  };
  Stream2.prototype.onError = function(callback) {
    var _this = this;
    var wrapper = {
      onEvent: function(e) {
        var se = StitchEvent_default.fromEvent(e, _this.decoder);
        if (se.eventName === StitchEvent_default.ERROR_EVENT_NAME) {
          callback(se.error);
        }
      }
    };
    this.eventStream.addListener(wrapper);
  };
  Stream2.prototype.addListener = function(listener) {
    var _this = this;
    var wrapper = {
      onEvent: function(e) {
        var se = StitchEvent_default.fromEvent(e, _this.decoder);
        if (se.eventName === StitchEvent_default.ERROR_EVENT_NAME) {
          if (listener.onError) {
            listener.onError(se.error);
          }
        } else {
          if (listener.onNext) {
            listener.onNext(se.data);
          }
        }
      }
    };
    this.listeners.push([listener, wrapper]);
    this.eventStream.addListener(wrapper);
  };
  Stream2.prototype.removeListener = function(listener) {
    var index = -1;
    for (var i3 = 0; i3 < this.listeners.length; i3++) {
      if (this.listeners[i3][0] === listener) {
        index = i3;
        break;
      }
    }
    if (index === -1) {
      return;
    }
    var wrapper = this.listeners[index][1];
    this.listeners.splice(index, 1);
    this.eventStream.removeListener(wrapper);
  };
  Stream2.prototype.isOpen = function() {
    return this.eventStream.isOpen();
  };
  Stream2.prototype.close = function() {
    this.eventStream.close();
  };
  return Stream2;
}();
var Stream_default = Stream;

// node_modules/mongodb-stitch-core-sdk/dist/esm/auth/internal/StitchUserProfileImpl.js
var NAME = "name";
var EMAIL = "email";
var PICTURE_URL = "picture";
var FIRST_NAME = "first_name";
var LAST_NAME = "last_name";
var GENDER = "gender";
var BIRTHDAY = "birthday";
var MIN_AGE = "min_age";
var MAX_AGE = "max_age";
var StitchUserProfileImpl = function() {
  function StitchUserProfileImpl2(userType, data, identities) {
    if (data === void 0) {
      data = {};
    }
    if (identities === void 0) {
      identities = [];
    }
    this.userType = userType;
    this.data = data;
    this.identities = identities;
  }
  StitchUserProfileImpl2.empty = function() {
    return new StitchUserProfileImpl2();
  };
  Object.defineProperty(StitchUserProfileImpl2.prototype, "name", {
    get: function() {
      return this.data[NAME];
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(StitchUserProfileImpl2.prototype, "email", {
    get: function() {
      return this.data[EMAIL];
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(StitchUserProfileImpl2.prototype, "pictureUrl", {
    get: function() {
      return this.data[PICTURE_URL];
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(StitchUserProfileImpl2.prototype, "firstName", {
    get: function() {
      return this.data[FIRST_NAME];
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(StitchUserProfileImpl2.prototype, "lastName", {
    get: function() {
      return this.data[LAST_NAME];
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(StitchUserProfileImpl2.prototype, "gender", {
    get: function() {
      return this.data[GENDER];
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(StitchUserProfileImpl2.prototype, "birthday", {
    get: function() {
      return this.data[BIRTHDAY];
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(StitchUserProfileImpl2.prototype, "minAge", {
    get: function() {
      var age = this.data[MIN_AGE];
      if (age === void 0) {
        return void 0;
      }
      return age;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(StitchUserProfileImpl2.prototype, "maxAge", {
    get: function() {
      var age = this.data[MAX_AGE];
      if (age === void 0) {
        return void 0;
      }
      return age;
    },
    enumerable: true,
    configurable: true
  });
  return StitchUserProfileImpl2;
}();
var StitchUserProfileImpl_default = StitchUserProfileImpl;

// node_modules/mongodb-stitch-core-sdk/dist/esm/auth/internal/CoreStitchUserImpl.js
var CoreStitchUserImpl = function() {
  function CoreStitchUserImpl2(id, loggedInProviderType, loggedInProviderName, isLoggedIn, lastAuthActivity, profile, customData) {
    this.id = id;
    this.loggedInProviderType = loggedInProviderType;
    this.loggedInProviderName = loggedInProviderName;
    this.profile = profile === void 0 ? StitchUserProfileImpl_default.empty() : profile;
    this.isLoggedIn = isLoggedIn;
    this.lastAuthActivity = lastAuthActivity;
    this.customData = customData === void 0 ? {} : customData;
  }
  Object.defineProperty(CoreStitchUserImpl2.prototype, "userType", {
    get: function() {
      return this.profile.userType;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CoreStitchUserImpl2.prototype, "identities", {
    get: function() {
      return this.profile.identities;
    },
    enumerable: true,
    configurable: true
  });
  CoreStitchUserImpl2.prototype.equals = function(other) {
    return this.id === other.id && JSON.stringify(this.identities) === JSON.stringify(other.identities) && this.isLoggedIn === other.isLoggedIn && this.loggedInProviderName === other.loggedInProviderName && this.loggedInProviderType === other.loggedInProviderType && JSON.stringify(this.profile) === JSON.stringify(other.profile);
  };
  return CoreStitchUserImpl2;
}();
var CoreStitchUserImpl_default = CoreStitchUserImpl;

// node_modules/mongodb-stitch-core-sdk/dist/esm/auth/providers/anonymous/AnonymousAuthProvider.js
var AnonymousAuthProvider = function() {
  function AnonymousAuthProvider2() {
  }
  AnonymousAuthProvider2.TYPE = "anon-user";
  AnonymousAuthProvider2.DEFAULT_NAME = "anon-user";
  return AnonymousAuthProvider2;
}();
var AnonymousAuthProvider_default = AnonymousAuthProvider;

// node_modules/mongodb-stitch-core-sdk/dist/esm/auth/providers/internal/StitchAuthResponseCredential.js
var StitchAuthResponseCredential = function() {
  function StitchAuthResponseCredential2(authInfo, providerType, providerName, asLink) {
    this.authInfo = authInfo;
    this.providerType = providerType;
    this.providerName = providerName;
    this.asLink = asLink;
  }
  return StitchAuthResponseCredential2;
}();
var StitchAuthResponseCredential_default = StitchAuthResponseCredential;

// node_modules/mongodb-stitch-core-sdk/dist/esm/internal/common/Base64.js
var import_base64_js = __toESM(require_base64_js());
function base64Decode(str) {
  var unevenBytes = str.length % 4;
  var strToDecode;
  if (unevenBytes != 0) {
    var paddingNeeded = 4 - unevenBytes;
    strToDecode = str + "=".repeat(paddingNeeded);
  } else {
    strToDecode = str;
  }
  var bytes = (0, import_base64_js.toByteArray)(strToDecode);
  return utf8Slice(bytes, 0, bytes.length);
}
function base64Encode(str) {
  var result;
  if ("undefined" === typeof Uint8Array) {
    result = utf8ToBytes(str);
  }
  result = new Uint8Array(utf8ToBytes(str));
  return (0, import_base64_js.fromByteArray)(result);
}
function utf8ToBytes(string) {
  var units = Infinity;
  var codePoint;
  var length = string.length;
  var leadSurrogate = null;
  var bytes = [];
  var i3 = 0;
  for (; i3 < length; i3++) {
    codePoint = string.charCodeAt(i3);
    if (codePoint > 55295 && codePoint < 57344) {
      if (leadSurrogate) {
        if (codePoint < 56320) {
          if ((units -= 3) > -1) {
            bytes.push(239, 191, 189);
          }
          leadSurrogate = codePoint;
          continue;
        } else {
          codePoint = leadSurrogate - 55296 << 10 | codePoint - 56320 | 65536;
          leadSurrogate = null;
        }
      } else {
        if (codePoint > 56319) {
          if ((units -= 3) > -1) {
            bytes.push(239, 191, 189);
          }
          continue;
        } else if (i3 + 1 === length) {
          if ((units -= 3) > -1) {
            bytes.push(239, 191, 189);
          }
          continue;
        } else {
          leadSurrogate = codePoint;
          continue;
        }
      }
    } else if (leadSurrogate) {
      if ((units -= 3) > -1) {
        bytes.push(239, 191, 189);
      }
      leadSurrogate = null;
    }
    if (codePoint < 128) {
      if ((units -= 1) < 0) {
        break;
      }
      bytes.push(codePoint);
    } else if (codePoint < 2048) {
      if ((units -= 2) < 0) {
        break;
      }
      bytes.push(codePoint >> 6 | 192, codePoint & 63 | 128);
    } else if (codePoint < 65536) {
      if ((units -= 3) < 0) {
        break;
      }
      bytes.push(codePoint >> 12 | 224, codePoint >> 6 & 63 | 128, codePoint & 63 | 128);
    } else if (codePoint < 2097152) {
      if ((units -= 4) < 0) {
        break;
      }
      bytes.push(codePoint >> 18 | 240, codePoint >> 12 & 63 | 128, codePoint >> 6 & 63 | 128, codePoint & 63 | 128);
    } else {
      throw new Error("Invalid code point");
    }
  }
  return bytes;
}
function utf8Slice(buf, start, end) {
  var res = "";
  var tmp = "";
  end = Math.min(buf.length, end || Infinity);
  start = start || 0;
  for (var i3 = start; i3 < end; i3++) {
    if (buf[i3] <= 127) {
      res += decodeUtf8Char(tmp) + String.fromCharCode(buf[i3]);
      tmp = "";
    } else {
      tmp += "%" + buf[i3].toString(16);
    }
  }
  return res + decodeUtf8Char(tmp);
}
function decodeUtf8Char(str) {
  try {
    return decodeURIComponent(str);
  } catch (err) {
    return String.fromCharCode(65533);
  }
}

// node_modules/mongodb-stitch-core-sdk/dist/esm/auth/internal/JWT.js
var EXPIRES = "exp";
var ISSUED_AT = "iat";
var USER_DATA = "user_data";
var JWT = function() {
  function JWT2(expires, issuedAt, userData) {
    this.expires = expires;
    this.issuedAt = issuedAt;
    this.userData = userData;
  }
  JWT2.fromEncoded = function(encodedJWT) {
    var parts = JWT2.splitToken(encodedJWT);
    var json = JSON.parse(base64Decode(parts[1]));
    var expires = json[EXPIRES];
    var iat = json[ISSUED_AT];
    var userData = json[USER_DATA];
    return new JWT2(expires, iat, userData);
  };
  JWT2.splitToken = function(jwt) {
    var parts = jwt.split(".");
    if (parts.length !== 3) {
      throw new Error("Malformed JWT token. The string " + jwt + " should have 3 parts.");
    }
    return parts;
  };
  return JWT2;
}();
var JWT_default = JWT;

// node_modules/mongodb-stitch-core-sdk/dist/esm/auth/internal/AccessTokenRefresher.js
var SLEEP_MILLIS = 6e4;
var EXPIRATION_WINDOW_SECS = 300;
var AccessTokenRefresher = function() {
  function AccessTokenRefresher2(auth) {
    this.auth = auth;
  }
  AccessTokenRefresher2.prototype.shouldRefresh = function() {
    var auth = this.auth;
    if (auth === void 0) {
      return false;
    }
    if (!auth.isLoggedIn) {
      return false;
    }
    var info = auth.authInfo;
    if (info === void 0) {
      return false;
    }
    if (!info.isLoggedIn) {
      return false;
    }
    var jwt;
    try {
      jwt = JWT_default.fromEncoded(info.accessToken);
    } catch (e) {
      console.log(e);
      return false;
    }
    if (Date.now() / 1e3 < jwt.expires - EXPIRATION_WINDOW_SECS) {
      return false;
    }
    return true;
  };
  AccessTokenRefresher2.prototype.run = function() {
    var _this = this;
    if (!this.shouldRefresh()) {
      this.nextTimeout = setTimeout(function() {
        return _this.run();
      }, SLEEP_MILLIS);
    } else {
      this.auth.refreshAccessToken().then(function() {
        _this.nextTimeout = setTimeout(function() {
          return _this.run();
        }, SLEEP_MILLIS);
      }).catch(function() {
        _this.nextTimeout = setTimeout(function() {
          return _this.run();
        }, SLEEP_MILLIS);
      });
    }
  };
  AccessTokenRefresher2.prototype.stop = function() {
    clearTimeout(this.nextTimeout);
  };
  return AccessTokenRefresher2;
}();
var AccessTokenRefresher_default = AccessTokenRefresher;

// node_modules/mongodb-stitch-core-sdk/dist/esm/auth/internal/models/ApiAuthInfo.js
var __extends8 = function() {
  var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d, b) {
    d.__proto__ = b;
  } || function(d, b) {
    for (var p in b)
      if (b.hasOwnProperty(p))
        d[p] = b[p];
  };
  return function(d, b) {
    extendStatics(d, b);
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();
var Fields2;
(function(Fields16) {
  Fields16["USER_ID"] = "user_id";
  Fields16["DEVICE_ID"] = "device_id";
  Fields16["ACCESS_TOKEN"] = "access_token";
  Fields16["REFRESH_TOKEN"] = "refresh_token";
})(Fields2 || (Fields2 = {}));
var ApiAuthInfo = function(_super) {
  __extends8(ApiAuthInfo2, _super);
  function ApiAuthInfo2(userId, deviceId, accessToken, refreshToken) {
    return _super.call(this, userId, deviceId, accessToken, refreshToken) || this;
  }
  ApiAuthInfo2.fromJSON = function(json) {
    return new ApiAuthInfo2(json[Fields2.USER_ID], json[Fields2.DEVICE_ID], json[Fields2.ACCESS_TOKEN], json[Fields2.REFRESH_TOKEN]);
  };
  ApiAuthInfo2.prototype.toJSON = function() {
    var _a3;
    return _a3 = {}, _a3[Fields2.USER_ID] = this.userId, _a3[Fields2.DEVICE_ID] = this.deviceId, _a3[Fields2.ACCESS_TOKEN] = this.accessToken, _a3[Fields2.REFRESH_TOKEN] = this.refreshToken, _a3;
  };
  return ApiAuthInfo2;
}(AuthInfo_default);
var ApiAuthInfo_default = ApiAuthInfo;

// node_modules/mongodb-stitch-core-sdk/dist/esm/internal/common/Assertions.js
var Assertions = function() {
  function Assertions2() {
  }
  Assertions2.keyPresent = function(key, object2) {
    if (object2[key] === void 0) {
      throw new Error("expected " + key + " to be present");
    }
  };
  return Assertions2;
}();
var Assertions_default = Assertions;

// node_modules/mongodb-stitch-core-sdk/dist/esm/auth/StitchUserIdentity.js
var StitchUserIdentity = function() {
  function StitchUserIdentity2(id, providerType) {
    this.id = id;
    this.providerType = providerType;
  }
  return StitchUserIdentity2;
}();
var StitchUserIdentity_default = StitchUserIdentity;

// node_modules/mongodb-stitch-core-sdk/dist/esm/auth/internal/models/ApiStitchUserIdentity.js
var __extends9 = function() {
  var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d, b) {
    d.__proto__ = b;
  } || function(d, b) {
    for (var p in b)
      if (b.hasOwnProperty(p))
        d[p] = b[p];
  };
  return function(d, b) {
    extendStatics(d, b);
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();
var Fields3;
(function(Fields16) {
  Fields16["ID"] = "id";
  Fields16["PROVIDER_TYPE"] = "provider_type";
})(Fields3 || (Fields3 = {}));
var ApiStitchUserIdentity = function(_super) {
  __extends9(ApiStitchUserIdentity2, _super);
  function ApiStitchUserIdentity2(id, providerType) {
    return _super.call(this, id, providerType) || this;
  }
  ApiStitchUserIdentity2.fromJSON = function(json) {
    return new ApiStitchUserIdentity2(json[Fields3.ID], json[Fields3.PROVIDER_TYPE]);
  };
  ApiStitchUserIdentity2.prototype.toJSON = function() {
    var _a3;
    return _a3 = {}, _a3[Fields3.ID] = this.id, _a3[Fields3.PROVIDER_TYPE] = this.providerType, _a3;
  };
  return ApiStitchUserIdentity2;
}(StitchUserIdentity_default);
var ApiStitchUserIdentity_default = ApiStitchUserIdentity;

// node_modules/mongodb-stitch-core-sdk/dist/esm/auth/internal/models/ApiCoreUserProfile.js
var __extends10 = function() {
  var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d, b) {
    d.__proto__ = b;
  } || function(d, b) {
    for (var p in b)
      if (b.hasOwnProperty(p))
        d[p] = b[p];
  };
  return function(d, b) {
    extendStatics(d, b);
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();
var Fields4;
(function(Fields16) {
  Fields16["DATA"] = "data";
  Fields16["USER_TYPE"] = "type";
  Fields16["IDENTITIES"] = "identities";
})(Fields4 || (Fields4 = {}));
var ApiCoreUserProfile = function(_super) {
  __extends10(ApiCoreUserProfile2, _super);
  function ApiCoreUserProfile2(userType, data, identities) {
    return _super.call(this, userType, data, identities) || this;
  }
  ApiCoreUserProfile2.fromJSON = function(json) {
    Assertions_default.keyPresent(Fields4.USER_TYPE, json);
    Assertions_default.keyPresent(Fields4.DATA, json);
    Assertions_default.keyPresent(Fields4.IDENTITIES, json);
    return new ApiCoreUserProfile2(json[Fields4.USER_TYPE], json[Fields4.DATA], json[Fields4.IDENTITIES].map(ApiStitchUserIdentity_default.fromJSON));
  };
  ApiCoreUserProfile2.prototype.toJSON = function() {
    var _a3;
    return _a3 = {}, _a3[Fields4.DATA] = this.data, _a3[Fields4.USER_TYPE] = this.userType, _a3[Fields4.IDENTITIES] = this.identities, _a3;
  };
  return ApiCoreUserProfile2;
}(StitchUserProfileImpl_default);
var ApiCoreUserProfile_default = ApiCoreUserProfile;

// node_modules/mongodb-stitch-core-sdk/dist/esm/auth/internal/models/StoreStitchUserIdentity.js
var __extends11 = function() {
  var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d, b) {
    d.__proto__ = b;
  } || function(d, b) {
    for (var p in b)
      if (b.hasOwnProperty(p))
        d[p] = b[p];
  };
  return function(d, b) {
    extendStatics(d, b);
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();
var Fields5;
(function(Fields16) {
  Fields16["ID"] = "id";
  Fields16["PROVIDER_TYPE"] = "provider_type";
})(Fields5 || (Fields5 = {}));
var StoreStitchUserIdentity = function(_super) {
  __extends11(StoreStitchUserIdentity2, _super);
  function StoreStitchUserIdentity2(id, providerType) {
    return _super.call(this, id, providerType) || this;
  }
  StoreStitchUserIdentity2.decode = function(from) {
    return new StoreStitchUserIdentity2(from[Fields5.ID], from[Fields5.PROVIDER_TYPE]);
  };
  StoreStitchUserIdentity2.prototype.encode = function() {
    var _a3;
    return _a3 = {}, _a3[Fields5.ID] = this.id, _a3[Fields5.PROVIDER_TYPE] = this.providerType, _a3;
  };
  return StoreStitchUserIdentity2;
}(StitchUserIdentity_default);
var StoreStitchUserIdentity_default = StoreStitchUserIdentity;

// node_modules/mongodb-stitch-core-sdk/dist/esm/auth/internal/models/StoreCoreUserProfile.js
var __extends12 = function() {
  var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d, b) {
    d.__proto__ = b;
  } || function(d, b) {
    for (var p in b)
      if (b.hasOwnProperty(p))
        d[p] = b[p];
  };
  return function(d, b) {
    extendStatics(d, b);
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();
var Fields6;
(function(Fields16) {
  Fields16["DATA"] = "data";
  Fields16["USER_TYPE"] = "type";
  Fields16["IDENTITIES"] = "identities";
})(Fields6 || (Fields6 = {}));
var StoreCoreUserProfile = function(_super) {
  __extends12(StoreCoreUserProfile2, _super);
  function StoreCoreUserProfile2(userType, data, identities) {
    var _this = _super.call(this, userType, data, identities) || this;
    _this.userType = userType;
    _this.data = data;
    _this.identities = identities;
    return _this;
  }
  StoreCoreUserProfile2.decode = function(from) {
    return from ? new StoreCoreUserProfile2(from[Fields6.USER_TYPE], from[Fields6.DATA], from[Fields6.IDENTITIES].map(function(identity) {
      return StoreStitchUserIdentity_default.decode(identity);
    })) : void 0;
  };
  StoreCoreUserProfile2.prototype.encode = function() {
    var _a3;
    return _a3 = {}, _a3[Fields6.DATA] = this.data, _a3[Fields6.USER_TYPE] = this.userType, _a3[Fields6.IDENTITIES] = this.identities.map(function(identity) {
      return identity.encode();
    }), _a3;
  };
  return StoreCoreUserProfile2;
}(StitchUserProfileImpl_default);
var StoreCoreUserProfile_default = StoreCoreUserProfile;

// node_modules/mongodb-stitch-core-sdk/dist/esm/auth/internal/models/StoreAuthInfo.js
var __extends13 = function() {
  var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d, b) {
    d.__proto__ = b;
  } || function(d, b) {
    for (var p in b)
      if (b.hasOwnProperty(p))
        d[p] = b[p];
  };
  return function(d, b) {
    extendStatics(d, b);
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();
var Fields7;
(function(Fields16) {
  Fields16["USER_ID"] = "user_id";
  Fields16["DEVICE_ID"] = "device_id";
  Fields16["ACCESS_TOKEN"] = "access_token";
  Fields16["REFRESH_TOKEN"] = "refresh_token";
  Fields16["LAST_AUTH_ACTIVITY"] = "last_auth_activity";
  Fields16["LOGGED_IN_PROVIDER_TYPE"] = "logged_in_provider_type";
  Fields16["LOGGED_IN_PROVIDER_NAME"] = "logged_in_provider_name";
  Fields16["USER_PROFILE"] = "user_profile";
})(Fields7 || (Fields7 = {}));
function readActiveUserFromStorage(storage) {
  var rawInfo = storage.get(StoreAuthInfo.ACTIVE_USER_STORAGE_NAME);
  if (!rawInfo) {
    return void 0;
  }
  return StoreAuthInfo.decode(JSON.parse(rawInfo));
}
function readCurrentUsersFromStorage(storage) {
  var rawInfo = storage.get(StoreAuthInfo.ALL_USERS_STORAGE_NAME);
  if (!rawInfo) {
    return /* @__PURE__ */ new Map();
  }
  var rawArray = JSON.parse(rawInfo);
  if (!Array.isArray(rawArray)) {
    throw new StitchClientError_default(StitchClientErrorCode.CouldNotLoadPersistedAuthInfo);
  }
  var userIdToAuthInfoMap = /* @__PURE__ */ new Map();
  rawArray.forEach(function(rawEntry) {
    var authInfo = StoreAuthInfo.decode(rawEntry);
    userIdToAuthInfoMap.set(authInfo.userId, authInfo);
  });
  return userIdToAuthInfoMap;
}
function writeActiveUserAuthInfoToStorage(authInfo, storage) {
  if (authInfo.isEmpty) {
    storage.remove(StoreAuthInfo.ACTIVE_USER_STORAGE_NAME);
    return;
  }
  var info = new StoreAuthInfo(authInfo.userId, authInfo.deviceId, authInfo.accessToken, authInfo.refreshToken, authInfo.loggedInProviderType, authInfo.loggedInProviderName, authInfo.lastAuthActivity, authInfo.userProfile ? new StoreCoreUserProfile_default(authInfo.userProfile.userType, authInfo.userProfile.data, authInfo.userProfile.identities.map(function(identity) {
    return new StoreStitchUserIdentity_default(identity.id, identity.providerType);
  })) : void 0);
  storage.set(StoreAuthInfo.ACTIVE_USER_STORAGE_NAME, JSON.stringify(info.encode()));
}
function writeAllUsersAuthInfoToStorage(currentUsersAuthInfo, storage) {
  var encodedStoreInfos = [];
  currentUsersAuthInfo.forEach(function(authInfo, userId) {
    var storeInfo = new StoreAuthInfo(userId, authInfo.deviceId, authInfo.accessToken, authInfo.refreshToken, authInfo.loggedInProviderType, authInfo.loggedInProviderName, authInfo.lastAuthActivity, authInfo.userProfile ? new StoreCoreUserProfile_default(authInfo.userProfile.userType, authInfo.userProfile.data, authInfo.userProfile.identities.map(function(identity) {
      return new StoreStitchUserIdentity_default(identity.id, identity.providerType);
    })) : void 0);
    encodedStoreInfos.push(storeInfo.encode());
  });
  storage.set(StoreAuthInfo.ALL_USERS_STORAGE_NAME, JSON.stringify(encodedStoreInfos));
}
var StoreAuthInfo = function(_super) {
  __extends13(StoreAuthInfo2, _super);
  function StoreAuthInfo2(userId, deviceId, accessToken, refreshToken, loggedInProviderType, loggedInProviderName, lastAuthActivity, userProfile) {
    var _this = _super.call(this, userId, deviceId, accessToken, refreshToken, loggedInProviderType, loggedInProviderName, lastAuthActivity, userProfile) || this;
    _this.userProfile = userProfile;
    return _this;
  }
  StoreAuthInfo2.decode = function(from) {
    var userId = from[Fields7.USER_ID];
    var deviceId = from[Fields7.DEVICE_ID];
    var accessToken = from[Fields7.ACCESS_TOKEN];
    var refreshToken = from[Fields7.REFRESH_TOKEN];
    var loggedInProviderType = from[Fields7.LOGGED_IN_PROVIDER_TYPE];
    var loggedInProviderName = from[Fields7.LOGGED_IN_PROVIDER_NAME];
    var userProfile = from[Fields7.USER_PROFILE];
    var lastAuthActivityMillisSinceEpoch = from[Fields7.LAST_AUTH_ACTIVITY];
    return new StoreAuthInfo2(userId, deviceId, accessToken, refreshToken, loggedInProviderType, loggedInProviderName, new Date(lastAuthActivityMillisSinceEpoch), StoreCoreUserProfile_default.decode(userProfile));
  };
  StoreAuthInfo2.prototype.encode = function() {
    var to = {};
    to[Fields7.USER_ID] = this.userId;
    to[Fields7.ACCESS_TOKEN] = this.accessToken;
    to[Fields7.REFRESH_TOKEN] = this.refreshToken;
    to[Fields7.DEVICE_ID] = this.deviceId;
    to[Fields7.LOGGED_IN_PROVIDER_NAME] = this.loggedInProviderName;
    to[Fields7.LOGGED_IN_PROVIDER_TYPE] = this.loggedInProviderType;
    to[Fields7.LAST_AUTH_ACTIVITY] = this.lastAuthActivity ? this.lastAuthActivity.getTime() : void 0;
    to[Fields7.USER_PROFILE] = this.userProfile ? this.userProfile.encode() : void 0;
    return to;
  };
  StoreAuthInfo2.ACTIVE_USER_STORAGE_NAME = "auth_info";
  StoreAuthInfo2.ALL_USERS_STORAGE_NAME = "all_auth_infos";
  return StoreAuthInfo2;
}(AuthInfo_default);

// node_modules/mongodb-stitch-core-sdk/dist/esm/auth/internal/CoreStitchAuth.js
var __values = function(o) {
  var m = typeof Symbol === "function" && o[Symbol.iterator], i3 = 0;
  if (m)
    return m.call(o);
  return {
    next: function() {
      if (o && i3 >= o.length)
        o = void 0;
      return { value: o && o[i3++], done: !o };
    }
  };
};
var __read = function(o, n) {
  var m = typeof Symbol === "function" && o[Symbol.iterator];
  if (!m)
    return o;
  var i3 = m.call(o), r, ar = [], e;
  try {
    while ((n === void 0 || n-- > 0) && !(r = i3.next()).done)
      ar.push(r.value);
  } catch (error) {
    e = { error };
  } finally {
    try {
      if (r && !r.done && (m = i3["return"]))
        m.call(i3);
    } finally {
      if (e)
        throw e.error;
    }
  }
  return ar;
};
var OPTIONS = "options";
var DEVICE = "device";
var CoreStitchAuth = function() {
  function CoreStitchAuth2(requestClient, authRoutes, storage, useTokenRefresher) {
    if (useTokenRefresher === void 0) {
      useTokenRefresher = true;
    }
    this.requestClient = requestClient;
    this.authRoutes = authRoutes;
    this.storage = storage;
    var allUsersAuthInfo;
    try {
      allUsersAuthInfo = readCurrentUsersFromStorage(storage);
    } catch (e) {
      throw new StitchClientError_default(StitchClientErrorCode.CouldNotLoadPersistedAuthInfo);
    }
    this.allUsersAuthInfo = allUsersAuthInfo;
    var activeUserAuthInfo;
    try {
      activeUserAuthInfo = readActiveUserFromStorage(storage);
    } catch (e) {
      throw new StitchClientError_default(StitchClientErrorCode.CouldNotLoadPersistedAuthInfo);
    }
    this.activeUserAuthInfo = activeUserAuthInfo === void 0 ? AuthInfo_default.empty() : activeUserAuthInfo;
    if (this.activeUserAuthInfo.hasUser) {
      this.currentUser = this.prepUser(this.activeUserAuthInfo);
    }
    if (useTokenRefresher) {
      this.accessTokenRefresher = new AccessTokenRefresher_default(this);
      this.accessTokenRefresher.run();
    }
  }
  Object.defineProperty(CoreStitchAuth2.prototype, "authInfo", {
    get: function() {
      return this.activeUserAuthInfo;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CoreStitchAuth2.prototype, "isLoggedIn", {
    get: function() {
      return this.currentUser !== void 0 && this.currentUser.isLoggedIn;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CoreStitchAuth2.prototype, "user", {
    get: function() {
      return this.currentUser;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CoreStitchAuth2.prototype, "hasDeviceId", {
    get: function() {
      return this.activeUserAuthInfo.deviceId !== void 0 && this.activeUserAuthInfo.deviceId !== "" && this.activeUserAuthInfo.deviceId !== "000000000000000000000000";
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CoreStitchAuth2.prototype, "deviceId", {
    get: function() {
      if (!this.hasDeviceId) {
        return void 0;
      }
      return this.activeUserAuthInfo.deviceId;
    },
    enumerable: true,
    configurable: true
  });
  CoreStitchAuth2.prototype.listUsers = function() {
    var _this = this;
    var list = [];
    this.allUsersAuthInfo.forEach(function(authInfo) {
      list.push(_this.prepUser(authInfo));
    });
    return list;
  };
  CoreStitchAuth2.prototype.doAuthenticatedRequest = function(stitchReq, authInfo) {
    var _this = this;
    try {
      return this.requestClient.doRequest(this.prepareAuthRequest(stitchReq, authInfo || this.activeUserAuthInfo)).catch(function(err) {
        return _this.handleAuthFailure(err, stitchReq);
      });
    } catch (err) {
      return Promise.reject(err);
    }
  };
  CoreStitchAuth2.prototype.doAuthenticatedRequestWithDecoder = function(stitchReq, decoder) {
    return this.doAuthenticatedRequest(stitchReq).then(function(response) {
      var obj = bson_54.parse(response.body, { strict: false });
      if (decoder) {
        return decoder.decode(obj);
      }
      return obj;
    }).catch(function(err) {
      throw wrapDecodingError(err);
    });
  };
  CoreStitchAuth2.prototype.openAuthenticatedEventStream = function(stitchReq, open) {
    var _this = this;
    if (open === void 0) {
      open = true;
    }
    if (!this.isLoggedIn) {
      throw new StitchClientError_default(StitchClientErrorCode.MustAuthenticateFirst);
    }
    var authToken = stitchReq.useRefreshToken ? this.activeUserAuthInfo.refreshToken : this.activeUserAuthInfo.accessToken;
    return this.requestClient.doStreamRequest(stitchReq.builder.withPath(stitchReq.path + "&stitch_at=" + authToken).build(), open, function() {
      return _this.openAuthenticatedEventStream(stitchReq, false);
    }).catch(function(err) {
      return _this.handleAuthFailureForEventStream(err, stitchReq, open);
    });
  };
  CoreStitchAuth2.prototype.openAuthenticatedStreamWithDecoder = function(stitchReq, decoder) {
    return this.openAuthenticatedEventStream(stitchReq).then(function(eventStream) {
      return new Stream_default(eventStream, decoder);
    });
  };
  CoreStitchAuth2.prototype.refreshAccessToken = function() {
    var _this = this;
    var reqBuilder = new StitchAuthRequest.Builder().withRefreshToken().withPath(this.authRoutes.sessionRoute).withMethod(Method_default.POST);
    return this.doAuthenticatedRequest(reqBuilder.build()).then(function(response) {
      try {
        var partialInfo = ApiAuthInfo_default.fromJSON(JSON.parse(response.body));
        _this.activeUserAuthInfo = _this.activeUserAuthInfo.merge(partialInfo);
        if (partialInfo.accessToken && _this.user instanceof CoreStitchUserImpl_default) {
          var userData = JWT_default.fromEncoded(partialInfo.accessToken).userData;
          _this.user.customData = userData === void 0 ? {} : userData;
        }
      } catch (err) {
        throw new StitchRequestError_default(err, StitchRequestErrorCode.DECODING_ERROR);
      }
      try {
        writeActiveUserAuthInfoToStorage(_this.activeUserAuthInfo, _this.storage);
        _this.allUsersAuthInfo.set(_this.activeUserAuthInfo.userId, _this.activeUserAuthInfo);
        writeAllUsersAuthInfoToStorage(_this.allUsersAuthInfo, _this.storage);
      } catch (err) {
        throw new StitchClientError_default(StitchClientErrorCode.CouldNotPersistAuthInfo);
      }
    });
  };
  CoreStitchAuth2.prototype.switchToUserWithId = function(userId) {
    var authInfo = this.allUsersAuthInfo.get(userId);
    if (authInfo === void 0) {
      throw new StitchClientError_default(StitchClientErrorCode.UserNotFound);
    }
    if (!authInfo.isLoggedIn) {
      throw new StitchClientError_default(StitchClientErrorCode.UserNotLoggedIn);
    }
    if (this.activeUserAuthInfo.hasUser) {
      this.allUsersAuthInfo.set(this.activeUserAuthInfo.userId, this.activeUserAuthInfo.withNewAuthActivityTime());
    }
    var newAuthInfo = authInfo.withNewAuthActivityTime();
    this.allUsersAuthInfo.set(userId, newAuthInfo);
    writeActiveUserAuthInfoToStorage(newAuthInfo, this.storage);
    this.activeUserAuthInfo = newAuthInfo;
    var previousUser = this.currentUser;
    this.currentUser = this.prepUser(newAuthInfo);
    this.onAuthEvent();
    this.dispatchAuthEvent({
      currentActiveUser: this.currentUser,
      kind: AuthEventKind.ActiveUserChanged,
      previousActiveUser: previousUser
    });
    return this.currentUser;
  };
  CoreStitchAuth2.prototype.loginWithCredentialInternal = function(credential) {
    var _this = this;
    var e_1, _a3;
    if (credential instanceof StitchAuthResponseCredential_default) {
      return this.processLogin(credential, credential.authInfo, credential.asLink).then(function(user) {
        _this.dispatchAuthEvent({
          kind: AuthEventKind.UserLoggedIn,
          loggedInUser: user
        });
        return user;
      });
    }
    if (credential.providerCapabilities.reusesExistingSession) {
      try {
        for (var _b = __values(this.allUsersAuthInfo), _c = _b.next(); !_c.done; _c = _b.next()) {
          var _d = __read(_c.value, 2), userId = _d[0], authInfo = _d[1];
          if (authInfo.loggedInProviderType === credential.providerType) {
            if (authInfo.isLoggedIn) {
              try {
                return Promise.resolve(this.switchToUserWithId(userId));
              } catch (error) {
                return Promise.reject(error);
              }
            }
            if (authInfo.userId !== void 0) {
              this.removeUserWithIdInternal(authInfo.userId);
            }
          }
        }
      } catch (e_1_1) {
        e_1 = { error: e_1_1 };
      } finally {
        try {
          if (_c && !_c.done && (_a3 = _b.return))
            _a3.call(_b);
        } finally {
          if (e_1)
            throw e_1.error;
        }
      }
    }
    return this.doLogin(credential, false);
  };
  CoreStitchAuth2.prototype.linkUserWithCredentialInternal = function(user, credential) {
    if (this.currentUser !== void 0 && user.id !== this.currentUser.id) {
      return Promise.reject(new StitchClientError_default(StitchClientErrorCode.UserNoLongerValid));
    }
    return this.doLogin(credential, true);
  };
  CoreStitchAuth2.prototype.logoutInternal = function() {
    if (!this.isLoggedIn || !this.currentUser) {
      return Promise.resolve();
    }
    return this.logoutUserWithIdInternal(this.currentUser.id);
  };
  CoreStitchAuth2.prototype.logoutUserWithIdInternal = function(userId) {
    var _this = this;
    var authInfo = this.allUsersAuthInfo.get(userId);
    if (authInfo === void 0) {
      return Promise.reject(new StitchClientError_default(StitchClientErrorCode.UserNotFound));
    }
    if (!authInfo.isLoggedIn) {
      return Promise.resolve();
    }
    var clearAuthBlock = function() {
      _this.clearUserAuthTokens(authInfo.userId);
      if (authInfo.loggedInProviderType === AnonymousAuthProvider_default.TYPE) {
        _this.removeUserWithIdInternal(authInfo.userId);
      }
    };
    return this.doLogout(authInfo).then(function() {
      clearAuthBlock();
    }).catch(function() {
      clearAuthBlock();
    });
  };
  CoreStitchAuth2.prototype.removeUserInternal = function() {
    if (!this.isLoggedIn || this.currentUser === void 0) {
      return Promise.resolve();
    }
    return this.removeUserWithIdInternal(this.currentUser.id);
  };
  CoreStitchAuth2.prototype.removeUserWithIdInternal = function(userId) {
    var _this = this;
    var authInfo = this.allUsersAuthInfo.get(userId);
    if (authInfo === void 0) {
      return Promise.reject(new StitchClientError_default(StitchClientErrorCode.UserNotFound));
    }
    var removeBlock = function() {
      _this.clearUserAuthTokens(authInfo.userId);
      _this.allUsersAuthInfo.delete(userId);
      writeAllUsersAuthInfoToStorage(_this.allUsersAuthInfo, _this.storage);
      var removedUser = _this.prepUser(authInfo.loggedOut());
      _this.onAuthEvent();
      _this.dispatchAuthEvent({
        kind: AuthEventKind.UserRemoved,
        removedUser
      });
    };
    if (authInfo.isLoggedIn) {
      return this.doLogout(authInfo).then(function() {
        removeBlock();
      }).catch(function(err) {
        removeBlock();
      });
    }
    removeBlock();
    return Promise.resolve();
  };
  CoreStitchAuth2.prototype.close = function() {
    if (this.accessTokenRefresher) {
      this.accessTokenRefresher.stop();
    }
  };
  CoreStitchAuth2.prototype.prepareAuthRequest = function(stitchReq, authInfo) {
    if (!authInfo.isLoggedIn) {
      throw new StitchClientError_default(StitchClientErrorCode.MustAuthenticateFirst);
    }
    var newReq = stitchReq.builder;
    var newHeaders = newReq.headers || {};
    if (stitchReq.useRefreshToken) {
      newHeaders[Headers_default.AUTHORIZATION] = Headers_default.getAuthorizationBearer(authInfo.refreshToken);
    } else {
      newHeaders[Headers_default.AUTHORIZATION] = Headers_default.getAuthorizationBearer(authInfo.accessToken);
    }
    newReq.withHeaders(newHeaders);
    return newReq.build();
  };
  CoreStitchAuth2.prototype.handleAuthFailureForEventStream = function(ex, req, open) {
    var _this = this;
    if (open === void 0) {
      open = true;
    }
    if (!(ex instanceof StitchServiceError_default) || ex.errorCode !== StitchServiceErrorCode.InvalidSession) {
      throw ex;
    }
    if (req.useRefreshToken || !req.shouldRefreshOnFailure) {
      this.clearActiveUserAuth();
      throw ex;
    }
    return this.tryRefreshAccessToken(req.startedAt).then(function() {
      return _this.openAuthenticatedEventStream(req.builder.withShouldRefreshOnFailure(false).build(), open);
    });
  };
  CoreStitchAuth2.prototype.handleAuthFailure = function(ex, req) {
    var _this = this;
    if (!(ex instanceof StitchServiceError_default) || ex.errorCode !== StitchServiceErrorCode.InvalidSession) {
      throw ex;
    }
    if (req.useRefreshToken || !req.shouldRefreshOnFailure) {
      this.clearActiveUserAuth();
      throw ex;
    }
    return this.tryRefreshAccessToken(req.startedAt).then(function() {
      return _this.doAuthenticatedRequest(req.builder.withShouldRefreshOnFailure(false).build());
    });
  };
  CoreStitchAuth2.prototype.tryRefreshAccessToken = function(reqStartedAt) {
    if (!this.isLoggedIn) {
      throw new StitchClientError_default(StitchClientErrorCode.LoggedOutDuringRequest);
    }
    try {
      var jwt = JWT_default.fromEncoded(this.activeUserAuthInfo.accessToken);
      if (jwt.issuedAt >= reqStartedAt) {
        return Promise.resolve();
      }
    } catch (e) {
    }
    return this.refreshAccessToken();
  };
  CoreStitchAuth2.prototype.prepUser = function(authInfo) {
    return this.userFactory.makeUser(authInfo.userId, authInfo.loggedInProviderType, authInfo.loggedInProviderName, authInfo.isLoggedIn, authInfo.lastAuthActivity, authInfo.userProfile);
  };
  CoreStitchAuth2.prototype.attachAuthOptions = function(authBody) {
    var options = {};
    options[DEVICE] = this.deviceInfo;
    authBody[OPTIONS] = options;
  };
  CoreStitchAuth2.prototype.doLogin = function(credential, asLinkRequest) {
    var _this = this;
    var previousActiveUser = this.currentUser;
    return this.doLoginRequest(credential, asLinkRequest).then(function(response) {
      return _this.processLoginResponse(credential, response, asLinkRequest);
    }).then(function(user) {
      _this.onAuthEvent();
      if (asLinkRequest) {
        _this.dispatchAuthEvent({
          kind: AuthEventKind.UserLinked,
          linkedUser: user
        });
      } else {
        _this.dispatchAuthEvent({
          kind: AuthEventKind.UserLoggedIn,
          loggedInUser: user
        });
        _this.dispatchAuthEvent({
          currentActiveUser: user,
          kind: AuthEventKind.ActiveUserChanged,
          previousActiveUser
        });
      }
      return user;
    });
  };
  CoreStitchAuth2.prototype.doLoginRequest = function(credential, asLinkRequest) {
    var reqBuilder = new StitchDocRequest.Builder();
    reqBuilder.withMethod(Method_default.POST);
    if (asLinkRequest) {
      reqBuilder.withPath(this.authRoutes.getAuthProviderLinkRoute(credential.providerName));
    } else {
      reqBuilder.withPath(this.authRoutes.getAuthProviderLoginRoute(credential.providerName));
    }
    var material = credential.material;
    this.attachAuthOptions(material);
    reqBuilder.withDocument(material);
    if (!asLinkRequest) {
      return this.requestClient.doRequest(reqBuilder.build());
    }
    var linkRequest = new StitchAuthDocRequest(reqBuilder.build(), reqBuilder.document);
    return this.doAuthenticatedRequest(linkRequest);
  };
  CoreStitchAuth2.prototype.processLogin = function(credential, newAuthInfo, asLinkRequest) {
    var _this = this;
    var oldActiveUserInfo = this.activeUserAuthInfo;
    var oldActiveUser = this.currentUser;
    newAuthInfo = this.activeUserAuthInfo.merge(new AuthInfo_default(newAuthInfo.userId, newAuthInfo.deviceId, newAuthInfo.accessToken, newAuthInfo.refreshToken, credential.providerType, credential.providerName, void 0, void 0));
    this.activeUserAuthInfo = newAuthInfo;
    this.currentUser = this.userFactory.makeUser(this.activeUserAuthInfo.userId, credential.providerType, credential.providerName, this.activeUserAuthInfo.isLoggedIn, /* @__PURE__ */ new Date(), void 0, JWT_default.fromEncoded(newAuthInfo.accessToken).userData);
    return this.doGetUserProfile().then(function(profile) {
      if (oldActiveUserInfo.hasUser) {
        _this.allUsersAuthInfo.set(oldActiveUserInfo.userId, oldActiveUserInfo.withNewAuthActivityTime());
      }
      newAuthInfo = newAuthInfo.merge(new AuthInfo_default(newAuthInfo.userId, newAuthInfo.deviceId, newAuthInfo.accessToken, newAuthInfo.refreshToken, credential.providerType, credential.providerName, /* @__PURE__ */ new Date(), profile));
      var newUserAdded = !_this.allUsersAuthInfo.has(newAuthInfo.userId);
      try {
        writeActiveUserAuthInfoToStorage(newAuthInfo, _this.storage);
        _this.allUsersAuthInfo.set(newAuthInfo.userId, newAuthInfo);
        writeAllUsersAuthInfoToStorage(_this.allUsersAuthInfo, _this.storage);
      } catch (err) {
        _this.activeUserAuthInfo = oldActiveUserInfo;
        _this.currentUser = oldActiveUser;
        if (newAuthInfo.userId !== oldActiveUserInfo.userId && newAuthInfo.userId) {
          _this.allUsersAuthInfo.delete(newAuthInfo.userId);
        }
        throw new StitchClientError_default(StitchClientErrorCode.CouldNotPersistAuthInfo);
      }
      _this.activeUserAuthInfo = newAuthInfo;
      _this.currentUser = _this.userFactory.makeUser(_this.activeUserAuthInfo.userId, credential.providerType, credential.providerName, _this.activeUserAuthInfo.isLoggedIn, _this.activeUserAuthInfo.lastAuthActivity, profile, JWT_default.fromEncoded(newAuthInfo.accessToken).userData);
      if (newUserAdded) {
        _this.onAuthEvent();
        _this.dispatchAuthEvent({
          addedUser: _this.currentUser,
          kind: AuthEventKind.UserAdded
        });
      }
      return _this.currentUser;
    }).catch(function(err) {
      if (err instanceof StitchClientError_default) {
        throw err;
      }
      if (asLinkRequest || oldActiveUserInfo.hasUser) {
        var linkedAuthInfo = _this.activeUserAuthInfo;
        _this.activeUserAuthInfo = oldActiveUserInfo;
        _this.currentUser = oldActiveUser;
        if (asLinkRequest) {
          _this.activeUserAuthInfo = _this.activeUserAuthInfo.withAuthProvider(linkedAuthInfo.loggedInProviderType, linkedAuthInfo.loggedInProviderName);
        }
      } else {
        _this.clearActiveUserAuth();
      }
      throw err;
    });
  };
  CoreStitchAuth2.prototype.processLoginResponse = function(credential, response, asLinkRequest) {
    try {
      if (!response) {
        throw new StitchServiceError_default("the login response could not be processed for credential: " + credential + ";response was undefined");
      }
      if (!response.body) {
        throw new StitchServiceError_default("response with status code " + response.statusCode + " has empty body");
      }
      return this.processLogin(credential, ApiAuthInfo_default.fromJSON(JSON.parse(response.body)), asLinkRequest);
    } catch (err) {
      throw new StitchRequestError_default(err, StitchRequestErrorCode.DECODING_ERROR);
    }
  };
  CoreStitchAuth2.prototype.doGetUserProfile = function() {
    var reqBuilder = new StitchAuthRequest.Builder();
    reqBuilder.withMethod(Method_default.GET).withPath(this.authRoutes.profileRoute);
    return this.doAuthenticatedRequest(reqBuilder.build()).then(function(response) {
      return ApiCoreUserProfile_default.fromJSON(JSON.parse(response.body));
    }).catch(function(err) {
      if (err instanceof StitchError_default) {
        throw err;
      } else {
        throw new StitchRequestError_default(err, StitchRequestErrorCode.DECODING_ERROR);
      }
    });
  };
  CoreStitchAuth2.prototype.doLogout = function(authInfo) {
    var reqBuilder = new StitchAuthRequest.Builder();
    reqBuilder.withRefreshToken().withPath(this.authRoutes.sessionRoute).withMethod(Method_default.DELETE);
    return this.doAuthenticatedRequest(reqBuilder.build(), authInfo).then(function() {
      return;
    });
  };
  CoreStitchAuth2.prototype.clearActiveUserAuth = function() {
    if (!this.isLoggedIn) {
      return;
    }
    this.clearUserAuthTokens(this.activeUserAuthInfo.userId);
  };
  CoreStitchAuth2.prototype.clearUserAuthTokens = function(userId) {
    var unclearedAuthInfo = this.allUsersAuthInfo.get(userId);
    if (unclearedAuthInfo === void 0) {
      if (this.activeUserAuthInfo.userId !== userId) {
        throw new StitchClientError_default(StitchClientErrorCode.UserNotFound);
      }
    } else if (!unclearedAuthInfo.isLoggedIn) {
      return;
    }
    try {
      var loggedOutUser = void 0;
      if (unclearedAuthInfo) {
        var loggedOutAuthInfo = unclearedAuthInfo.loggedOut();
        this.allUsersAuthInfo.set(userId, loggedOutAuthInfo);
        writeAllUsersAuthInfoToStorage(this.allUsersAuthInfo, this.storage);
        loggedOutUser = this.userFactory.makeUser(loggedOutAuthInfo.userId, loggedOutAuthInfo.loggedInProviderType, loggedOutAuthInfo.loggedInProviderName, loggedOutAuthInfo.isLoggedIn, loggedOutAuthInfo.lastAuthActivity, loggedOutAuthInfo.userProfile);
      }
      var wasActiveUser = false;
      if (this.activeUserAuthInfo.hasUser && this.activeUserAuthInfo.userId === userId) {
        wasActiveUser = true;
        this.activeUserAuthInfo = this.activeUserAuthInfo.withClearedUser();
        this.currentUser = void 0;
        writeActiveUserAuthInfoToStorage(this.activeUserAuthInfo, this.storage);
      }
      if (loggedOutUser) {
        this.onAuthEvent();
        this.dispatchAuthEvent({
          kind: AuthEventKind.UserLoggedOut,
          loggedOutUser
        });
        if (wasActiveUser) {
          this.dispatchAuthEvent({
            currentActiveUser: void 0,
            kind: AuthEventKind.ActiveUserChanged,
            previousActiveUser: loggedOutUser
          });
        }
      }
    } catch (err) {
      throw new StitchClientError_default(StitchClientErrorCode.CouldNotPersistAuthInfo);
    }
  };
  return CoreStitchAuth2;
}();
var CoreStitchAuth_default = CoreStitchAuth;

// node_modules/mongodb-stitch-core-sdk/dist/esm/auth/internal/DeviceFields.js
var DeviceFields;
(function(DeviceFields2) {
  DeviceFields2["DEVICE_ID"] = "deviceId";
  DeviceFields2["APP_ID"] = "appId";
  DeviceFields2["APP_VERSION"] = "appVersion";
  DeviceFields2["PLATFORM"] = "platform";
  DeviceFields2["PLATFORM_VERSION"] = "platformVersion";
  DeviceFields2["SDK_VERSION"] = "sdkVersion";
})(DeviceFields || (DeviceFields = {}));
var DeviceFields_default = DeviceFields;

// node_modules/mongodb-stitch-core-sdk/dist/esm/auth/ProviderCapabilities.js
var ProviderCapabilities = function() {
  function ProviderCapabilities2(reusesExistingSession) {
    if (reusesExistingSession === void 0) {
      reusesExistingSession = false;
    }
    this.reusesExistingSession = reusesExistingSession;
  }
  return ProviderCapabilities2;
}();
var ProviderCapabilities_default = ProviderCapabilities;

// node_modules/mongodb-stitch-core-sdk/dist/esm/auth/providers/anonymous/AnonymousCredential.js
var AnonymousCredential = function() {
  function AnonymousCredential2(providerName) {
    if (providerName === void 0) {
      providerName = AnonymousAuthProvider_default.DEFAULT_NAME;
    }
    this.providerType = AnonymousAuthProvider_default.TYPE;
    this.material = {};
    this.providerCapabilities = new ProviderCapabilities_default(true);
    this.providerName = providerName;
  }
  return AnonymousCredential2;
}();
var AnonymousCredential_default = AnonymousCredential;

// node_modules/mongodb-stitch-core-sdk/dist/esm/auth/providers/custom/CustomAuthProvider.js
var CustomAuthProvider = function() {
  function CustomAuthProvider2() {
  }
  CustomAuthProvider2.TYPE = "custom-token";
  CustomAuthProvider2.DEFAULT_NAME = "custom-token";
  return CustomAuthProvider2;
}();
var CustomAuthProvider_default = CustomAuthProvider;

// node_modules/mongodb-stitch-core-sdk/dist/esm/auth/providers/custom/CustomCredential.js
var Fields8;
(function(Fields16) {
  Fields16["TOKEN"] = "token";
})(Fields8 || (Fields8 = {}));
var CustomCredential = function() {
  function CustomCredential2(token, providerName) {
    var _a3;
    if (providerName === void 0) {
      providerName = CustomAuthProvider_default.DEFAULT_NAME;
    }
    this.providerType = CustomAuthProvider_default.TYPE;
    this.providerCapabilities = new ProviderCapabilities_default(false);
    this.providerName = providerName;
    this.token = token;
    this.material = (_a3 = {}, _a3[Fields8.TOKEN] = this.token, _a3);
  }
  return CustomCredential2;
}();
var CustomCredential_default = CustomCredential;

// node_modules/mongodb-stitch-core-sdk/dist/esm/auth/providers/facebook/FacebookAuthProvider.js
var FacebookAuthProvider = function() {
  function FacebookAuthProvider2() {
  }
  FacebookAuthProvider2.TYPE = "oauth2-facebook";
  FacebookAuthProvider2.DEFAULT_NAME = "oauth2-facebook";
  return FacebookAuthProvider2;
}();
var FacebookAuthProvider_default = FacebookAuthProvider;

// node_modules/mongodb-stitch-core-sdk/dist/esm/auth/providers/facebook/FacebookCredential.js
var Fields9;
(function(Fields16) {
  Fields16["ACCESS_TOKEN"] = "accessToken";
})(Fields9 || (Fields9 = {}));
var FacebookCredential = function() {
  function FacebookCredential2(accessToken, providerName) {
    var _a3;
    if (providerName === void 0) {
      providerName = FacebookAuthProvider_default.DEFAULT_NAME;
    }
    this.providerType = FacebookAuthProvider_default.TYPE;
    this.providerName = providerName;
    this.accessToken = accessToken;
    this.material = (_a3 = {}, _a3[Fields9.ACCESS_TOKEN] = this.accessToken, _a3);
  }
  Object.defineProperty(FacebookCredential2.prototype, "providerCapabilities", {
    get: function() {
      return new ProviderCapabilities_default(false);
    },
    enumerable: true,
    configurable: true
  });
  return FacebookCredential2;
}();
var FacebookCredential_default = FacebookCredential;

// node_modules/mongodb-stitch-core-sdk/dist/esm/auth/providers/function/FunctionAuthProvider.js
var FunctionAuthProvider = function() {
  function FunctionAuthProvider2() {
  }
  FunctionAuthProvider2.TYPE = "custom-function";
  FunctionAuthProvider2.DEFAULT_NAME = "custom-function";
  return FunctionAuthProvider2;
}();
var FunctionAuthProvider_default = FunctionAuthProvider;

// node_modules/mongodb-stitch-core-sdk/dist/esm/auth/providers/function/FunctionCredential.js
var FunctionCredential = function() {
  function FunctionCredential2(payload, providerName) {
    if (providerName === void 0) {
      providerName = FunctionAuthProvider_default.DEFAULT_NAME;
    }
    this.providerType = FunctionAuthProvider_default.TYPE;
    this.providerName = providerName;
    this.material = payload;
  }
  Object.defineProperty(FunctionCredential2.prototype, "providerCapabilities", {
    get: function() {
      return new ProviderCapabilities_default(false);
    },
    enumerable: true,
    configurable: true
  });
  return FunctionCredential2;
}();
var FunctionCredential_default = FunctionCredential;

// node_modules/mongodb-stitch-core-sdk/dist/esm/auth/providers/google/GoogleAuthProvider.js
var GoogleAuthProvider = function() {
  function GoogleAuthProvider2() {
  }
  GoogleAuthProvider2.TYPE = "oauth2-google";
  GoogleAuthProvider2.DEFAULT_NAME = "oauth2-google";
  return GoogleAuthProvider2;
}();
var GoogleAuthProvider_default = GoogleAuthProvider;

// node_modules/mongodb-stitch-core-sdk/dist/esm/auth/providers/google/GoogleCredential.js
var Fields10;
(function(Fields16) {
  Fields16["AUTH_CODE"] = "authCode";
})(Fields10 || (Fields10 = {}));
var GoogleCredential = function() {
  function GoogleCredential2(authCode, providerName) {
    var _a3;
    if (providerName === void 0) {
      providerName = GoogleAuthProvider_default.DEFAULT_NAME;
    }
    this.providerType = GoogleAuthProvider_default.TYPE;
    this.providerCapabilities = new ProviderCapabilities_default(false);
    this.providerName = providerName;
    this.authCode = authCode;
    this.material = (_a3 = {}, _a3[Fields10.AUTH_CODE] = this.authCode, _a3);
  }
  return GoogleCredential2;
}();
var GoogleCredential_default = GoogleCredential;

// node_modules/mongodb-stitch-core-sdk/dist/esm/auth/providers/serverapikey/ServerApiKeyAuthProvider.js
var ServerApiKeyAuthProvider = function() {
  function ServerApiKeyAuthProvider2() {
  }
  ServerApiKeyAuthProvider2.TYPE = "api-key";
  ServerApiKeyAuthProvider2.DEFAULT_NAME = "api-key";
  return ServerApiKeyAuthProvider2;
}();
var ServerApiKeyAuthProvider_default = ServerApiKeyAuthProvider;

// node_modules/mongodb-stitch-core-sdk/dist/esm/auth/providers/serverapikey/ServerApiKeyCredential.js
var Fields11;
(function(Fields16) {
  Fields16["KEY"] = "key";
})(Fields11 || (Fields11 = {}));
var ServerApiKeyCredential = function() {
  function ServerApiKeyCredential2(key, providerName) {
    var _a3;
    if (providerName === void 0) {
      providerName = ServerApiKeyAuthProvider_default.DEFAULT_NAME;
    }
    this.providerType = ServerApiKeyAuthProvider_default.TYPE;
    this.providerCapabilities = new ProviderCapabilities_default(false);
    this.providerName = providerName;
    this.key = key;
    this.material = (_a3 = {}, _a3[Fields11.KEY] = this.key, _a3);
  }
  return ServerApiKeyCredential2;
}();
var ServerApiKeyCredential_default = ServerApiKeyCredential;

// node_modules/mongodb-stitch-core-sdk/dist/esm/auth/providers/internal/CoreAuthProviderClient.js
var CoreAuthProviderClient = function() {
  function CoreAuthProviderClient2(providerName, requestClient, baseRoute) {
    this.providerName = providerName;
    this.requestClient = requestClient;
    this.baseRoute = baseRoute;
  }
  return CoreAuthProviderClient2;
}();
var CoreAuthProviderClient_default = CoreAuthProviderClient;

// node_modules/mongodb-stitch-core-sdk/dist/esm/auth/providers/userapikey/models/UserApiKey.js
var Fields12;
(function(Fields16) {
  Fields16["ID"] = "_id";
  Fields16["KEY"] = "key";
  Fields16["NAME"] = "name";
  Fields16["DISABLED"] = "disabled";
})(Fields12 || (Fields12 = {}));
var UserApiKey = function() {
  function UserApiKey2(id, key, name, disabled) {
    this.id = bson_browser_esm_default.ObjectID.createFromHexString(id);
    this.key = key;
    this.name = name;
    this.disabled = disabled;
  }
  UserApiKey2.readFromApi = function(json) {
    var body = typeof json === "string" ? JSON.parse(json) : json;
    Assertions_default.keyPresent(Fields12.ID, body);
    Assertions_default.keyPresent(Fields12.NAME, body);
    Assertions_default.keyPresent(Fields12.DISABLED, body);
    return new UserApiKey2(body[Fields12.ID], body[Fields12.KEY], body[Fields12.NAME], body[Fields12.DISABLED]);
  };
  UserApiKey2.prototype.toJSON = function() {
    var _a3;
    return _a3 = {}, _a3[Fields12.ID] = this.id, _a3[Fields12.KEY] = this.key, _a3[Fields12.NAME] = this.name, _a3[Fields12.DISABLED] = this.disabled, _a3;
  };
  return UserApiKey2;
}();
var UserApiKey_default = UserApiKey;

// node_modules/mongodb-stitch-core-sdk/dist/esm/auth/providers/userapikey/UserApiKeyAuthProvider.js
var UserApiKeyAuthProvider = function() {
  function UserApiKeyAuthProvider2() {
  }
  UserApiKeyAuthProvider2.TYPE = "api-key";
  UserApiKeyAuthProvider2.DEFAULT_NAME = "api-key";
  return UserApiKeyAuthProvider2;
}();
var UserApiKeyAuthProvider_default = UserApiKeyAuthProvider;

// node_modules/mongodb-stitch-core-sdk/dist/esm/auth/providers/userapikey/CoreUserApiKeyAuthProviderClient.js
var __extends14 = function() {
  var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d, b) {
    d.__proto__ = b;
  } || function(d, b) {
    for (var p in b)
      if (b.hasOwnProperty(p))
        d[p] = b[p];
  };
  return function(d, b) {
    extendStatics(d, b);
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();
var ApiKeyFields;
(function(ApiKeyFields2) {
  ApiKeyFields2["NAME"] = "name";
})(ApiKeyFields || (ApiKeyFields = {}));
var CoreUserApiKeyAuthProviderClient = function(_super) {
  __extends14(CoreUserApiKeyAuthProviderClient2, _super);
  function CoreUserApiKeyAuthProviderClient2(requestClient, authRoutes) {
    var _this = this;
    var baseRoute = authRoutes.baseAuthRoute + "/api_keys";
    var name = UserApiKeyAuthProvider_default.DEFAULT_NAME;
    _this = _super.call(this, name, requestClient, baseRoute) || this;
    return _this;
  }
  CoreUserApiKeyAuthProviderClient2.prototype.createApiKey = function(name) {
    var _a3;
    var reqBuilder = new StitchAuthDocRequest.Builder();
    reqBuilder.withMethod(Method_default.POST).withPath(this.baseRoute).withDocument((_a3 = {}, _a3[ApiKeyFields.NAME] = name, _a3)).withRefreshToken();
    return this.requestClient.doAuthenticatedRequest(reqBuilder.build()).then(function(response) {
      return UserApiKey_default.readFromApi(response.body);
    }).catch(function(err) {
      throw wrapDecodingError(err);
    });
  };
  CoreUserApiKeyAuthProviderClient2.prototype.fetchApiKey = function(keyId) {
    var reqBuilder = new StitchAuthRequest.Builder();
    reqBuilder.withMethod(Method_default.GET).withPath(this.getApiKeyRoute(keyId.toHexString()));
    reqBuilder.withRefreshToken();
    return this.requestClient.doAuthenticatedRequest(reqBuilder.build()).then(function(response) {
      return UserApiKey_default.readFromApi(response.body);
    }).catch(function(err) {
      throw wrapDecodingError(err);
    });
  };
  CoreUserApiKeyAuthProviderClient2.prototype.fetchApiKeys = function() {
    var reqBuilder = new StitchAuthRequest.Builder();
    reqBuilder.withMethod(Method_default.GET).withPath(this.baseRoute);
    reqBuilder.withRefreshToken();
    return this.requestClient.doAuthenticatedRequest(reqBuilder.build()).then(function(response) {
      var json = JSON.parse(response.body);
      if (Array.isArray(json)) {
        return json.map(function(value2) {
          return UserApiKey_default.readFromApi(value2);
        });
      }
      throw new StitchRequestError_default(new Error("unexpected non-array response from server"), StitchRequestErrorCode.DECODING_ERROR);
    }).catch(function(err) {
      throw wrapDecodingError(err);
    });
  };
  CoreUserApiKeyAuthProviderClient2.prototype.deleteApiKey = function(keyId) {
    var reqBuilder = new StitchAuthRequest.Builder();
    reqBuilder.withMethod(Method_default.DELETE).withPath(this.getApiKeyRoute(keyId.toHexString()));
    reqBuilder.withRefreshToken();
    return this.requestClient.doAuthenticatedRequest(reqBuilder.build()).then(function() {
    });
  };
  CoreUserApiKeyAuthProviderClient2.prototype.enableApiKey = function(keyId) {
    var reqBuilder = new StitchAuthRequest.Builder();
    reqBuilder.withMethod(Method_default.PUT).withPath(this.getApiKeyEnableRoute(keyId.toHexString()));
    reqBuilder.withRefreshToken();
    return this.requestClient.doAuthenticatedRequest(reqBuilder.build()).then(function() {
    });
  };
  CoreUserApiKeyAuthProviderClient2.prototype.disableApiKey = function(keyId) {
    var reqBuilder = new StitchAuthRequest.Builder();
    reqBuilder.withMethod(Method_default.PUT).withPath(this.getApiKeyDisableRoute(keyId.toHexString()));
    reqBuilder.withRefreshToken();
    return this.requestClient.doAuthenticatedRequest(reqBuilder.build()).then(function() {
    });
  };
  CoreUserApiKeyAuthProviderClient2.prototype.getApiKeyRoute = function(keyId) {
    return this.baseRoute + "/" + keyId;
  };
  CoreUserApiKeyAuthProviderClient2.prototype.getApiKeyEnableRoute = function(keyId) {
    return this.getApiKeyRoute(keyId) + "/enable";
  };
  CoreUserApiKeyAuthProviderClient2.prototype.getApiKeyDisableRoute = function(keyId) {
    return this.getApiKeyRoute(keyId) + "/disable";
  };
  return CoreUserApiKeyAuthProviderClient2;
}(CoreAuthProviderClient_default);
var CoreUserApiKeyAuthProviderClient_default = CoreUserApiKeyAuthProviderClient;

// node_modules/mongodb-stitch-core-sdk/dist/esm/auth/providers/userapikey/UserApiKeyCredential.js
var Fields13;
(function(Fields16) {
  Fields16["KEY"] = "key";
})(Fields13 || (Fields13 = {}));
var UserApiKeyCredential = function() {
  function UserApiKeyCredential2(key, providerName) {
    var _a3;
    if (providerName === void 0) {
      providerName = UserApiKeyAuthProvider_default.DEFAULT_NAME;
    }
    this.providerType = UserApiKeyAuthProvider_default.TYPE;
    this.providerCapabilities = new ProviderCapabilities_default(false);
    this.providerName = providerName;
    this.key = key;
    this.material = (_a3 = {}, _a3[Fields13.KEY] = this.key, _a3);
  }
  return UserApiKeyCredential2;
}();
var UserApiKeyCredential_default = UserApiKeyCredential;

// node_modules/mongodb-stitch-core-sdk/dist/esm/auth/providers/userpass/UserPasswordAuthProvider.js
var UserPasswordAuthProvider = function() {
  function UserPasswordAuthProvider2() {
  }
  UserPasswordAuthProvider2.TYPE = "local-userpass";
  UserPasswordAuthProvider2.DEFAULT_NAME = "local-userpass";
  return UserPasswordAuthProvider2;
}();
var UserPasswordAuthProvider_default = UserPasswordAuthProvider;

// node_modules/mongodb-stitch-core-sdk/dist/esm/auth/providers/userpass/CoreUserPasswordAuthProviderClient.js
var __extends15 = function() {
  var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d, b) {
    d.__proto__ = b;
  } || function(d, b) {
    for (var p in b)
      if (b.hasOwnProperty(p))
        d[p] = b[p];
  };
  return function(d, b) {
    extendStatics(d, b);
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();
var RegistrationFields;
(function(RegistrationFields2) {
  RegistrationFields2["EMAIL"] = "email";
  RegistrationFields2["PASSWORD"] = "password";
})(RegistrationFields || (RegistrationFields = {}));
var ActionFields;
(function(ActionFields2) {
  ActionFields2["EMAIL"] = "email";
  ActionFields2["PASSWORD"] = "password";
  ActionFields2["TOKEN"] = "token";
  ActionFields2["TOKEN_ID"] = "tokenId";
  ActionFields2["ARGS"] = "arguments";
})(ActionFields || (ActionFields = {}));
var CoreUserPasswordAuthProviderClient = function(_super) {
  __extends15(CoreUserPasswordAuthProviderClient2, _super);
  function CoreUserPasswordAuthProviderClient2(providerName, requestClient, authRoutes) {
    if (providerName === void 0) {
      providerName = UserPasswordAuthProvider_default.DEFAULT_NAME;
    }
    var _this = this;
    var baseRoute = authRoutes.getAuthProviderRoute(providerName);
    _this = _super.call(this, providerName, requestClient, baseRoute) || this;
    return _this;
  }
  CoreUserPasswordAuthProviderClient2.prototype.registerWithEmailInternal = function(email, password) {
    var _a3;
    var reqBuilder = new StitchDocRequest.Builder();
    reqBuilder.withMethod(Method_default.POST).withPath(this.getRegisterWithEmailRoute());
    reqBuilder.withDocument((_a3 = {}, _a3[RegistrationFields.EMAIL] = email, _a3[RegistrationFields.PASSWORD] = password, _a3));
    return this.requestClient.doRequest(reqBuilder.build()).then(function() {
    });
  };
  CoreUserPasswordAuthProviderClient2.prototype.confirmUserInternal = function(token, tokenId) {
    var _a3;
    var reqBuilder = new StitchDocRequest.Builder();
    reqBuilder.withMethod(Method_default.POST).withPath(this.getConfirmUserRoute());
    reqBuilder.withDocument((_a3 = {}, _a3[ActionFields.TOKEN] = token, _a3[ActionFields.TOKEN_ID] = tokenId, _a3));
    return this.requestClient.doRequest(reqBuilder.build()).then(function() {
    });
  };
  CoreUserPasswordAuthProviderClient2.prototype.resendConfirmationEmailInternal = function(email) {
    var _a3;
    var reqBuilder = new StitchDocRequest.Builder();
    reqBuilder.withMethod(Method_default.POST).withPath(this.getResendConfirmationEmailRoute());
    reqBuilder.withDocument((_a3 = {}, _a3[ActionFields.EMAIL] = email, _a3));
    return this.requestClient.doRequest(reqBuilder.build()).then(function() {
    });
  };
  CoreUserPasswordAuthProviderClient2.prototype.resetPasswordInternal = function(token, tokenId, password) {
    var _a3;
    var reqBuilder = new StitchDocRequest.Builder();
    reqBuilder.withMethod(Method_default.POST).withPath(this.getResetPasswordRoute());
    reqBuilder.withDocument((_a3 = {}, _a3[ActionFields.TOKEN] = token, _a3[ActionFields.TOKEN_ID] = tokenId, _a3[ActionFields.PASSWORD] = password, _a3));
    return this.requestClient.doRequest(reqBuilder.build()).then(function() {
    });
  };
  CoreUserPasswordAuthProviderClient2.prototype.sendResetPasswordEmailInternal = function(email) {
    var _a3;
    var reqBuilder = new StitchDocRequest.Builder();
    reqBuilder.withMethod(Method_default.POST).withPath(this.getSendResetPasswordEmailRoute());
    reqBuilder.withDocument((_a3 = {}, _a3[ActionFields.EMAIL] = email, _a3));
    return this.requestClient.doRequest(reqBuilder.build()).then(function() {
    });
  };
  CoreUserPasswordAuthProviderClient2.prototype.callResetPasswordFunctionInternal = function(email, password, args) {
    var _a3;
    var reqBuilder = new StitchDocRequest.Builder();
    reqBuilder.withMethod(Method_default.POST).withPath(this.getCallResetPasswordFunctionRoute());
    reqBuilder.withDocument((_a3 = {}, _a3[ActionFields.EMAIL] = email, _a3[ActionFields.PASSWORD] = password, _a3[ActionFields.ARGS] = args, _a3));
    return this.requestClient.doRequest(reqBuilder.build()).then(function() {
    });
  };
  CoreUserPasswordAuthProviderClient2.prototype.getRegisterWithEmailRoute = function() {
    return this.getExtensionRoute("register");
  };
  CoreUserPasswordAuthProviderClient2.prototype.getConfirmUserRoute = function() {
    return this.getExtensionRoute("confirm");
  };
  CoreUserPasswordAuthProviderClient2.prototype.getResendConfirmationEmailRoute = function() {
    return this.getExtensionRoute("confirm/send");
  };
  CoreUserPasswordAuthProviderClient2.prototype.getResetPasswordRoute = function() {
    return this.getExtensionRoute("reset");
  };
  CoreUserPasswordAuthProviderClient2.prototype.getSendResetPasswordEmailRoute = function() {
    return this.getExtensionRoute("reset/send");
  };
  CoreUserPasswordAuthProviderClient2.prototype.getCallResetPasswordFunctionRoute = function() {
    return this.getExtensionRoute("reset/call");
  };
  CoreUserPasswordAuthProviderClient2.prototype.getExtensionRoute = function(path) {
    return this.baseRoute + "/" + path;
  };
  return CoreUserPasswordAuthProviderClient2;
}(CoreAuthProviderClient_default);
var CoreUserPasswordAuthProviderClient_default = CoreUserPasswordAuthProviderClient;

// node_modules/mongodb-stitch-core-sdk/dist/esm/auth/providers/userpass/UserPasswordCredential.js
var Fields14;
(function(Fields16) {
  Fields16["USERNAME"] = "username";
  Fields16["PASSWORD"] = "password";
})(Fields14 || (Fields14 = {}));
var UserPasswordCredential = function() {
  function UserPasswordCredential2(username, password, providerName) {
    var _a3;
    if (providerName === void 0) {
      providerName = UserPasswordAuthProvider_default.DEFAULT_NAME;
    }
    this.username = username;
    this.password = password;
    this.providerName = providerName;
    this.providerType = UserPasswordAuthProvider_default.TYPE;
    this.providerCapabilities = new ProviderCapabilities_default(false);
    this.material = (_a3 = {}, _a3[Fields14.USERNAME] = this.username, _a3[Fields14.PASSWORD] = this.password, _a3);
  }
  return UserPasswordCredential2;
}();
var UserPasswordCredential_default = UserPasswordCredential;

// node_modules/mongodb-stitch-core-sdk/dist/esm/auth/UserType.js
var UserType;
(function(UserType2) {
  UserType2["Normal"] = "normal";
  UserType2["Server"] = "server";
  UserType2["Unknown"] = "unknown";
})(UserType || (UserType = {}));
var UserType_default = UserType;

// node_modules/mongodb-stitch-core-sdk/dist/esm/internal/common/Storage.js
var MemoryStorage = function() {
  function MemoryStorage2(suiteName) {
    this.suiteName = suiteName;
    this.storage = {};
  }
  MemoryStorage2.prototype.get = function(key) {
    return this.storage[this.suiteName + "." + key];
  };
  MemoryStorage2.prototype.set = function(key, value2) {
    this.storage[this.suiteName + "." + key] = value2;
  };
  MemoryStorage2.prototype.remove = function(key) {
    delete this.storage[this.suiteName + "." + key];
  };
  return MemoryStorage2;
}();

// node_modules/mongodb-stitch-core-sdk/dist/esm/services/internal/RebindEvent.js
var RebindEvent = function() {
  function RebindEvent2() {
  }
  return RebindEvent2;
}();
var RebindEventType;
(function(RebindEventType2) {
  RebindEventType2[RebindEventType2["AUTH_EVENT"] = 0] = "AUTH_EVENT";
})(RebindEventType || (RebindEventType = {}));

// node_modules/mongodb-stitch-core-sdk/dist/esm/services/internal/CoreStitchServiceClientImpl.js
var CoreStitchServiceClientImpl = function() {
  function CoreStitchServiceClientImpl2(requestClient, routes, name) {
    this.serviceField = "service";
    this.argumentsField = "arguments";
    this.requestClient = requestClient;
    this.serviceRoutes = routes;
    this.serviceName = name;
    this.serviceBinders = [];
    this.allocatedStreams = [];
  }
  CoreStitchServiceClientImpl2.prototype.callFunction = function(name, args, decoder) {
    return this.requestClient.doAuthenticatedRequestWithDecoder(this.getCallServiceFunctionRequest(name, args), decoder);
  };
  CoreStitchServiceClientImpl2.prototype.streamFunction = function(name, args, decoder) {
    var _this = this;
    return this.requestClient.openAuthenticatedStreamWithDecoder(this.getStreamServiceFunctionRequest(name, args), decoder).then(function(newStream) {
      _this.allocatedStreams.push(newStream);
      return newStream;
    });
  };
  CoreStitchServiceClientImpl2.prototype.bind = function(binder) {
    this.serviceBinders.push(binder);
  };
  CoreStitchServiceClientImpl2.prototype.onRebindEvent = function(rebindEvent) {
    switch (rebindEvent.type) {
      case RebindEventType.AUTH_EVENT:
        var authRebindEvent = rebindEvent;
        if (authRebindEvent.event.kind === AuthEventKind.ActiveUserChanged) {
          this.closeAllocatedStreams();
        }
        break;
      default:
        break;
    }
    this.serviceBinders.forEach(function(binder) {
      binder.onRebindEvent(rebindEvent);
    });
  };
  CoreStitchServiceClientImpl2.prototype.getStreamServiceFunctionRequest = function(name, args) {
    var body = { name };
    if (this.serviceName !== void 0) {
      body[this.serviceField] = this.serviceName;
    }
    body[this.argumentsField] = args;
    var reqBuilder = new StitchAuthRequest.Builder();
    reqBuilder.withMethod(Method_default.GET).withPath(this.serviceRoutes.functionCallRoute + ("?stitch_request=" + encodeURIComponent(base64Encode(bson_54.stringify(body)))));
    return reqBuilder.build();
  };
  CoreStitchServiceClientImpl2.prototype.getCallServiceFunctionRequest = function(name, args) {
    var body = { name };
    if (this.serviceName !== void 0) {
      body[this.serviceField] = this.serviceName;
    }
    body[this.argumentsField] = args;
    var reqBuilder = new StitchAuthDocRequest.Builder();
    reqBuilder.withMethod(Method_default.POST).withPath(this.serviceRoutes.functionCallRoute);
    reqBuilder.withDocument(body);
    return reqBuilder.build();
  };
  CoreStitchServiceClientImpl2.prototype.closeAllocatedStreams = function() {
    this.allocatedStreams.forEach(function(stream) {
      if (stream.isOpen()) {
        stream.close();
      }
    });
    this.allocatedStreams = [];
  };
  return CoreStitchServiceClientImpl2;
}();
var CoreStitchServiceClientImpl_default = CoreStitchServiceClientImpl;

// node_modules/mongodb-stitch-core-sdk/dist/esm/internal/CoreStitchAppClient.js
var CoreStitchAppClient = function() {
  function CoreStitchAppClient2(authRequestClient, routes) {
    this.functionService = new CoreStitchServiceClientImpl_default(authRequestClient, routes.serviceRoutes);
  }
  CoreStitchAppClient2.prototype.callFunction = function(name, args, decoder) {
    return this.functionService.callFunction(name, args, decoder);
  };
  return CoreStitchAppClient2;
}();
var CoreStitchAppClient_default = CoreStitchAppClient;

// node_modules/mongodb-stitch-core-sdk/dist/esm/internal/net/BaseEventStream.js
var __values2 = function(o) {
  var m = typeof Symbol === "function" && o[Symbol.iterator], i3 = 0;
  if (m)
    return m.call(o);
  return {
    next: function() {
      if (o && i3 >= o.length)
        o = void 0;
      return { value: o && o[i3++], done: !o };
    }
  };
};
var BaseEventStream = function() {
  function BaseEventStream2(reconnecter) {
    this.reconnecter = reconnecter;
    this.closed = false;
    this.events = [];
    this.listeners = [];
    this.lastErr = void 0;
  }
  BaseEventStream2.prototype.isOpen = function() {
    return !this.closed;
  };
  BaseEventStream2.prototype.addListener = function(listener) {
    var _this = this;
    if (this.closed) {
      setTimeout(function() {
        return listener.onEvent(new Event_default(StitchEvent_default.ERROR_EVENT_NAME, "stream closed"));
      }, 0);
      return;
    }
    if (this.lastErr !== void 0) {
      setTimeout(function() {
        return listener.onEvent(new Event_default(StitchEvent_default.ERROR_EVENT_NAME, _this.lastErr));
      }, 0);
      return;
    }
    this.listeners.push(listener);
    this.poll();
  };
  BaseEventStream2.prototype.removeListener = function(listener) {
    var index = this.listeners.indexOf(listener);
    if (index === -1) {
      return;
    }
    this.listeners.splice(index, 1);
  };
  BaseEventStream2.prototype.nextEvent = function() {
    var _this = this;
    if (this.closed) {
      return Promise.reject(new Event_default(StitchEvent_default.ERROR_EVENT_NAME, "stream closed"));
    }
    if (this.lastErr !== void 0) {
      return Promise.reject(new Event_default(StitchEvent_default.ERROR_EVENT_NAME, this.lastErr));
    }
    return new Promise(function(resolve, reject) {
      _this.listenOnce({
        onEvent: function(e) {
          resolve(e);
        }
      });
    });
  };
  BaseEventStream2.prototype.close = function() {
    if (this.closed) {
      return;
    }
    this.closed = true;
    this.afterClose();
  };
  BaseEventStream2.prototype.reconnect = function(error) {
    var _this = this;
    if (!this.reconnecter) {
      if (!this.closed) {
        this.closed = true;
        this.events.push(new Event_default(StitchEvent_default.ERROR_EVENT_NAME, "stream closed: " + error));
        this.poll();
      }
      return;
    }
    this.reconnecter().then(function(next) {
      _this.onReconnect(next);
    }).catch(function(e) {
      if (!(e instanceof StitchError_default) || !(e instanceof StitchRequestError_default)) {
        _this.closed = true;
        _this.events.push(new Event_default(StitchEvent_default.ERROR_EVENT_NAME, "stream closed: " + error));
        _this.poll();
        return;
      }
      setTimeout(function() {
        return _this.reconnect(e);
      }, BaseEventStream2.RETRY_TIMEOUT_MILLIS);
    });
  };
  BaseEventStream2.prototype.poll = function() {
    var e_1, _a3;
    while (this.events.length !== 0) {
      var event_1 = this.events.pop();
      try {
        for (var _b = __values2(this.listeners), _c = _b.next(); !_c.done; _c = _b.next()) {
          var listener = _c.value;
          if (listener.onEvent) {
            listener.onEvent(event_1);
          }
        }
      } catch (e_1_1) {
        e_1 = { error: e_1_1 };
      } finally {
        try {
          if (_c && !_c.done && (_a3 = _b.return))
            _a3.call(_b);
        } finally {
          if (e_1)
            throw e_1.error;
        }
      }
    }
  };
  BaseEventStream2.prototype.listenOnce = function(listener) {
    var _this = this;
    if (this.closed) {
      setTimeout(function() {
        return listener.onEvent(new Event_default(StitchEvent_default.ERROR_EVENT_NAME, "stream closed"));
      }, 0);
      return;
    }
    if (this.lastErr !== void 0) {
      setTimeout(function() {
        return listener.onEvent(new Event_default(StitchEvent_default.ERROR_EVENT_NAME, _this.lastErr));
      }, 0);
      return;
    }
    var wrapper = {
      onEvent: function(e) {
        _this.removeListener(wrapper);
        listener.onEvent(e);
      }
    };
    this.addListener(wrapper);
  };
  BaseEventStream2.RETRY_TIMEOUT_MILLIS = 5e3;
  return BaseEventStream2;
}();
var BaseEventStream_default = BaseEventStream;

// node_modules/mongodb-stitch-core-sdk/dist/esm/internal/net/BasicRequest.js
var BasicRequest = function() {
  function BasicRequest2(method, url, headers, body) {
    this.method = method;
    this.url = url;
    this.headers = headers;
    this.body = body;
  }
  return BasicRequest2;
}();
(function(BasicRequest2) {
  var Builder = function() {
    function Builder2(request) {
      if (!request) {
        return;
      }
      this.method = request.method;
      this.url = request.url;
      this.headers = request.headers;
      this.body = request.body;
    }
    Builder2.prototype.withMethod = function(method) {
      this.method = method;
      return this;
    };
    Builder2.prototype.withUrl = function(url) {
      this.url = url;
      return this;
    };
    Builder2.prototype.withHeaders = function(headers) {
      this.headers = headers;
      return this;
    };
    Builder2.prototype.withBody = function(body) {
      this.body = body;
      return this;
    };
    Builder2.prototype.build = function() {
      if (this.method === void 0) {
        throw new Error("must set method");
      }
      if (this.url === void 0) {
        throw new Error("must set non-empty url");
      }
      return new BasicRequest2(this.method, this.url, this.headers === void 0 ? {} : this.headers, this.body);
    };
    return Builder2;
  }();
  BasicRequest2.Builder = Builder;
})(BasicRequest || (BasicRequest = {}));

// node_modules/mongodb-stitch-core-sdk/dist/esm/internal/net/Response.js
var Response = function() {
  function Response3(headers, statusCode, body) {
    var _this = this;
    this.statusCode = statusCode;
    this.body = body;
    this.headers = {};
    Object.keys(headers).map(function(key, index) {
      _this.headers[key.toLocaleLowerCase()] = headers[key];
    });
  }
  return Response3;
}();
var Response_default = Response;

// node_modules/mongodb-stitch-core-sdk/dist/esm/internal/net/StitchRoutes.js
var BASE_ROUTE = "/api/client/v2.0";
function getAppRoute(clientAppId) {
  return BASE_ROUTE + ("/app/" + clientAppId);
}
function getFunctionCallRoute(clientAppId) {
  return getAppRoute(clientAppId) + "/functions/call";
}
function getAppMetadataRoute(clientAppId) {
  return getAppRoute(clientAppId) + "/location";
}

// node_modules/mongodb-stitch-core-sdk/dist/esm/internal/net/StitchAppAuthRoutes.js
function getAuthProviderRoute(clientAppId, providerName) {
  return getAppRoute(clientAppId) + ("/auth/providers/" + providerName);
}
function getAuthProviderLoginRoute(clientAppId, providerName) {
  return getAuthProviderRoute(clientAppId, providerName) + "/login";
}
function getAuthProviderLinkRoute(clientAppId, providerName) {
  return getAuthProviderLoginRoute(clientAppId, providerName) + "?link=true";
}
var StitchAppAuthRoutes = function() {
  function StitchAppAuthRoutes2(clientAppId) {
    var _this = this;
    this.baseAuthRoute = BASE_ROUTE + "/auth";
    this.sessionRoute = function() {
      return _this.baseAuthRoute + "/session";
    }();
    this.profileRoute = function() {
      return _this.baseAuthRoute + "/profile";
    }();
    this.clientAppId = clientAppId;
  }
  StitchAppAuthRoutes2.prototype.getAuthProviderRoute = function(providerName) {
    return getAuthProviderRoute(this.clientAppId, providerName);
  };
  StitchAppAuthRoutes2.prototype.getAuthProviderLoginRoute = function(providerName) {
    return getAuthProviderLoginRoute(this.clientAppId, providerName);
  };
  StitchAppAuthRoutes2.prototype.getAuthProviderLinkRoute = function(providerName) {
    return getAuthProviderLinkRoute(this.clientAppId, providerName);
  };
  StitchAppAuthRoutes2.prototype.getAuthProviderExtensionRoute = function(providerName, path) {
    return this.getAuthProviderRoute(providerName) + "/" + path;
  };
  return StitchAppAuthRoutes2;
}();
var StitchAppAuthRoutes_default = StitchAppAuthRoutes;

// node_modules/mongodb-stitch-core-sdk/dist/esm/internal/net/ApiAppMetadata.js
var Fields15;
(function(Fields16) {
  Fields16["DEPLOYMENT_MODEL"] = "deployment_model";
  Fields16["LOCATION"] = "location";
  Fields16["HOSTNAME"] = "hostname";
})(Fields15 || (Fields15 = {}));
var ApiAppMetadata = function() {
  function ApiAppMetadata2(deploymentModel, location, hostname) {
    this.deploymentModel = deploymentModel;
    this.location = location;
    this.hostname = hostname;
  }
  ApiAppMetadata2.fromJSON = function(json) {
    return new ApiAppMetadata2(json[Fields15.DEPLOYMENT_MODEL], json[Fields15.LOCATION], json[Fields15.HOSTNAME]);
  };
  ApiAppMetadata2.prototype.toJSON = function() {
    var _a3;
    return _a3 = {}, _a3[Fields15.DEPLOYMENT_MODEL] = this.deploymentModel, _a3[Fields15.LOCATION] = this.location, _a3[Fields15.HOSTNAME] = this.hostname, _a3;
  };
  return ApiAppMetadata2;
}();
var ApiAppMetadata_default = ApiAppMetadata;

// node_modules/mongodb-stitch-core-sdk/dist/esm/internal/net/BaseStitchRequestClient.js
function inspectResponse(request, url, response) {
  if (response.statusCode >= 200 && response.statusCode < 300) {
    return response;
  }
  return handleRequestError(response);
}
var BaseStitchRequestClient = function() {
  function BaseStitchRequestClient2(baseUrl, transport) {
    this.baseUrl = baseUrl;
    this.transport = transport;
  }
  BaseStitchRequestClient2.prototype.doRequestToURL = function(stitchReq, url) {
    return this.transport.roundTrip(this.buildRequest(stitchReq, url)).catch(function(error) {
      throw new StitchRequestError_default(error, StitchRequestErrorCode.TRANSPORT_ERROR);
    }).then(function(resp) {
      return inspectResponse(stitchReq, url, resp);
    });
  };
  BaseStitchRequestClient2.prototype.doStreamRequestToURL = function(stitchReq, url, open, retryRequest) {
    if (open === void 0) {
      open = true;
    }
    return this.transport.stream(this.buildRequest(stitchReq, url), open, retryRequest).catch(function(error) {
      if (error instanceof StitchError_default) {
        throw error;
      }
      throw new StitchRequestError_default(error, StitchRequestErrorCode.TRANSPORT_ERROR);
    });
  };
  BaseStitchRequestClient2.prototype.buildRequest = function(stitchReq, url) {
    return new BasicRequest.Builder().withMethod(stitchReq.method).withUrl("" + url + stitchReq.path).withHeaders(stitchReq.headers).withBody(stitchReq.body).build();
  };
  return BaseStitchRequestClient2;
}();
var BaseStitchRequestClient_default = BaseStitchRequestClient;

// node_modules/mongodb-stitch-core-sdk/dist/esm/services/internal/StitchServiceRoutes.js
var StitchServiceRoutes = function() {
  function StitchServiceRoutes2(clientAppId) {
    this.clientAppId = clientAppId;
    this.functionCallRoute = getFunctionCallRoute(clientAppId);
  }
  return StitchServiceRoutes2;
}();
var StitchServiceRoutes_default = StitchServiceRoutes;

// node_modules/mongodb-stitch-core-sdk/dist/esm/internal/net/StitchAppRoutes.js
var StitchAppRoutes = function() {
  function StitchAppRoutes2(clientAppId) {
    this.clientAppId = clientAppId;
    this.authRoutes = new StitchAppAuthRoutes_default(clientAppId);
    this.serviceRoutes = new StitchServiceRoutes_default(clientAppId);
    this.appMetadataRoute = getAppMetadataRoute(clientAppId);
    this.functionCallRoute = getFunctionCallRoute(clientAppId);
  }
  return StitchAppRoutes2;
}();
var StitchAppRoutes_default = StitchAppRoutes;

// node_modules/mongodb-stitch-core-sdk/dist/esm/internal/net/StitchAppRequestClient.js
var __extends16 = function() {
  var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d, b) {
    d.__proto__ = b;
  } || function(d, b) {
    for (var p in b)
      if (b.hasOwnProperty(p))
        d[p] = b[p];
  };
  return function(d, b) {
    extendStatics(d, b);
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();
var __awaiter = function(thisArg, _arguments, P, generator) {
  return new (P || (P = Promise))(function(resolve, reject) {
    function fulfilled(value2) {
      try {
        step(generator.next(value2));
      } catch (e) {
        reject(e);
      }
    }
    function rejected(value2) {
      try {
        step(generator["throw"](value2));
      } catch (e) {
        reject(e);
      }
    }
    function step(result) {
      result.done ? resolve(result.value) : new P(function(resolve2) {
        resolve2(result.value);
      }).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};
var __generator = function(thisArg, body) {
  var _ = { label: 0, sent: function() {
    if (t[0] & 1)
      throw t[1];
    return t[1];
  }, trys: [], ops: [] }, f, y, t, g2;
  return g2 = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g2[Symbol.iterator] = function() {
    return this;
  }), g2;
  function verb(n) {
    return function(v) {
      return step([n, v]);
    };
  }
  function step(op) {
    if (f)
      throw new TypeError("Generator is already executing.");
    while (_)
      try {
        if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
          return t;
        if (y = 0, t)
          op = [op[0] & 2, t.value];
        switch (op[0]) {
          case 0:
          case 1:
            t = op;
            break;
          case 4:
            _.label++;
            return { value: op[1], done: false };
          case 5:
            _.label++;
            y = op[1];
            op = [0];
            continue;
          case 7:
            op = _.ops.pop();
            _.trys.pop();
            continue;
          default:
            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
              _ = 0;
              continue;
            }
            if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
              _.label = op[1];
              break;
            }
            if (op[0] === 6 && _.label < t[1]) {
              _.label = t[1];
              t = op;
              break;
            }
            if (t && _.label < t[2]) {
              _.label = t[2];
              _.ops.push(op);
              break;
            }
            if (t[2])
              _.ops.pop();
            _.trys.pop();
            continue;
        }
        op = body.call(thisArg, _);
      } catch (e) {
        op = [6, e];
        y = 0;
      } finally {
        f = t = 0;
      }
    if (op[0] & 5)
      throw op[1];
    return { value: op[0] ? op[1] : void 0, done: true };
  }
};
var StitchAppRequestClient = function(_super) {
  __extends16(StitchAppRequestClient2, _super);
  function StitchAppRequestClient2(clientAppId, baseUrl, transport) {
    var _this = _super.call(this, baseUrl, transport) || this;
    _this.clientAppId = clientAppId;
    _this.routes = new StitchAppRoutes_default(clientAppId);
    return _this;
  }
  StitchAppRequestClient2.prototype.doRequest = function(stitchReq) {
    var _this = this;
    return this.initAppMetadata().then(function(metadata) {
      return _super.prototype.doRequestToURL.call(_this, stitchReq, metadata.hostname);
    });
  };
  StitchAppRequestClient2.prototype.doStreamRequest = function(stitchReq, open, retryRequest) {
    var _this = this;
    if (open === void 0) {
      open = true;
    }
    return this.initAppMetadata().then(function(metadata) {
      return _super.prototype.doStreamRequestToURL.call(_this, stitchReq, metadata.hostname, open, retryRequest);
    });
  };
  StitchAppRequestClient2.prototype.getBaseURL = function() {
    return __awaiter(this, void 0, void 0, function() {
      return __generator(this, function(_a3) {
        return [2, this.initAppMetadata().then(function(metadata) {
          return metadata.hostname;
        })];
      });
    });
  };
  StitchAppRequestClient2.prototype.initAppMetadata = function() {
    var _this = this;
    if (this.appMetadata) {
      return Promise.resolve(this.appMetadata);
    }
    var request = new StitchRequest.Builder().withMethod(Method_default.GET).withPath(this.routes.appMetadataRoute).build();
    return _super.prototype.doRequestToURL.call(this, request, this.baseUrl).then(function(resp) {
      _this.appMetadata = ApiAppMetadata_default.fromJSON(bson_54.parse(resp.body));
      return _this.appMetadata;
    });
  };
  return StitchAppRequestClient2;
}(BaseStitchRequestClient_default);
var StitchAppRequestClient_default = StitchAppRequestClient;

// node_modules/mongodb-stitch-core-sdk/dist/esm/internal/net/StitchRequestClient.js
var __extends17 = function() {
  var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d, b) {
    d.__proto__ = b;
  } || function(d, b) {
    for (var p in b)
      if (b.hasOwnProperty(p))
        d[p] = b[p];
  };
  return function(d, b) {
    extendStatics(d, b);
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();
var StitchRequestClient = function(_super) {
  __extends17(StitchRequestClient2, _super);
  function StitchRequestClient2(baseUrl, transport) {
    return _super.call(this, baseUrl, transport) || this;
  }
  StitchRequestClient2.prototype.doRequest = function(stitchReq) {
    return _super.prototype.doRequestToURL.call(this, stitchReq, this.baseUrl);
  };
  StitchRequestClient2.prototype.doStreamRequest = function(stitchReq, open, retryRequest) {
    if (open === void 0) {
      open = true;
    }
    return _super.prototype.doStreamRequestToURL.call(this, stitchReq, this.baseUrl, open, retryRequest);
  };
  StitchRequestClient2.prototype.getBaseURL = function() {
    return Promise.resolve(this.baseUrl);
  };
  return StitchRequestClient2;
}(BaseStitchRequestClient_default);

// node_modules/mongodb-stitch-core-sdk/dist/esm/services/internal/AuthRebindEvent.js
var __extends18 = function() {
  var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d, b) {
    d.__proto__ = b;
  } || function(d, b) {
    for (var p in b)
      if (b.hasOwnProperty(p))
        d[p] = b[p];
  };
  return function(d, b) {
    extendStatics(d, b);
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();
var AuthRebindEvent = function(_super) {
  __extends18(AuthRebindEvent2, _super);
  function AuthRebindEvent2(event) {
    var _this = _super.call(this) || this;
    _this.type = RebindEventType.AUTH_EVENT;
    _this.event = event;
    return _this;
  }
  return AuthRebindEvent2;
}(RebindEvent);
var AuthRebindEvent_default = AuthRebindEvent;

// node_modules/mongodb-stitch-core-sdk/dist/esm/StitchClientConfiguration.js
var StitchClientConfiguration = function() {
  function StitchClientConfiguration2(baseUrl, storage, dataDirectory, transport) {
    this.baseUrl = baseUrl;
    this.storage = storage;
    this.dataDirectory = dataDirectory;
    this.transport = transport;
  }
  StitchClientConfiguration2.prototype.builder = function() {
    return new StitchClientConfiguration2.Builder(this);
  };
  return StitchClientConfiguration2;
}();
(function(StitchClientConfiguration2) {
  var Builder = function() {
    function Builder2(config3) {
      if (config3) {
        this.baseUrl = config3.baseUrl;
        this.storage = config3.storage;
        this.dataDirectory = config3.dataDirectory;
        this.transport = config3.transport;
      }
    }
    Builder2.prototype.withBaseUrl = function(baseUrl) {
      this.baseUrl = baseUrl;
      return this;
    };
    Builder2.prototype.withStorage = function(storage) {
      this.storage = storage;
      return this;
    };
    Builder2.prototype.withDataDirectory = function(dataDirectory) {
      this.dataDirectory = dataDirectory;
      return this;
    };
    Builder2.prototype.withTransport = function(transport) {
      this.transport = transport;
      return this;
    };
    Builder2.prototype.build = function() {
      return new StitchClientConfiguration2(this.baseUrl, this.storage, this.dataDirectory, this.transport);
    };
    return Builder2;
  }();
  StitchClientConfiguration2.Builder = Builder;
})(StitchClientConfiguration || (StitchClientConfiguration = {}));

// node_modules/mongodb-stitch-core-sdk/dist/esm/StitchAppClientConfiguration.js
var __extends19 = function() {
  var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d, b) {
    d.__proto__ = b;
  } || function(d, b) {
    for (var p in b)
      if (b.hasOwnProperty(p))
        d[p] = b[p];
  };
  return function(d, b) {
    extendStatics(d, b);
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();
var StitchAppClientConfiguration = function(_super) {
  __extends19(StitchAppClientConfiguration2, _super);
  function StitchAppClientConfiguration2(config3, localAppName, localAppVersion) {
    var _this = _super.call(this, config3.baseUrl, config3.storage, config3.dataDirectory, config3.transport) || this;
    _this.localAppVersion = localAppVersion;
    _this.localAppName = localAppName;
    return _this;
  }
  StitchAppClientConfiguration2.prototype.builder = function() {
    return new StitchAppClientConfiguration2.Builder(this);
  };
  return StitchAppClientConfiguration2;
}(StitchClientConfiguration);
(function(StitchAppClientConfiguration2) {
  var Builder = function(_super) {
    __extends19(Builder2, _super);
    function Builder2(config3) {
      var _this = _super.call(this, config3) || this;
      if (config3) {
        _this.localAppVersion = config3.localAppVersion;
        _this.localAppName = config3.localAppName;
      }
      return _this;
    }
    Builder2.prototype.withLocalAppName = function(localAppName) {
      this.localAppName = localAppName;
      return this;
    };
    Builder2.prototype.withLocalAppVersion = function(localAppVersion) {
      this.localAppVersion = localAppVersion;
      return this;
    };
    Builder2.prototype.build = function() {
      var config3 = _super.prototype.build.call(this);
      return new StitchAppClientConfiguration2(config3, this.localAppName, this.localAppVersion);
    };
    return Builder2;
  }(StitchClientConfiguration.Builder);
  StitchAppClientConfiguration2.Builder = Builder;
})(StitchAppClientConfiguration || (StitchAppClientConfiguration = {}));

// node_modules/mongodb-stitch-core-sdk/dist/esm/StitchAppClientInfo.js
var StitchAppClientInfo = function() {
  function StitchAppClientInfo2(clientAppId, dataDirectory, localAppName, localAppVersion) {
    this.clientAppId = clientAppId;
    this.dataDirectory = dataDirectory;
    this.localAppName = localAppName;
    this.localAppVersion = localAppVersion;
  }
  return StitchAppClientInfo2;
}();
var StitchAppClientInfo_default = StitchAppClientInfo;

// node_modules/mongodb-stitch-browser-core/dist/esm/core/auth/providers/facebook/FacebookRedirectCredential.js
var FacebookRedirectCredential = function() {
  function FacebookRedirectCredential2(redirectUrl, providerName, providerType) {
    if (providerName === void 0) {
      providerName = FacebookAuthProvider_default.DEFAULT_NAME;
    }
    if (providerType === void 0) {
      providerType = FacebookAuthProvider_default.TYPE;
    }
    this.redirectUrl = redirectUrl;
    this.providerName = providerName;
    this.providerType = providerType;
  }
  return FacebookRedirectCredential2;
}();
var FacebookRedirectCredential_default = FacebookRedirectCredential;

// node_modules/mongodb-stitch-browser-core/dist/esm/core/auth/providers/google/GoogleRedirectCredential.js
var GoogleRedirectCredential = function() {
  function GoogleRedirectCredential2(redirectUrl, providerName, providerType) {
    if (providerName === void 0) {
      providerName = GoogleAuthProvider_default.DEFAULT_NAME;
    }
    if (providerType === void 0) {
      providerType = GoogleAuthProvider_default.TYPE;
    }
    this.redirectUrl = redirectUrl;
    this.providerName = providerName;
    this.providerType = providerType;
  }
  return GoogleRedirectCredential2;
}();
var GoogleRedirectCredential_default = GoogleRedirectCredential;

// node_modules/mongodb-stitch-browser-core/dist/esm/core/auth/providers/userapikey/internal/UserApiKeyAuthProviderClientImpl.js
var __extends20 = function() {
  var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d, b) {
    d.__proto__ = b;
  } || function(d, b) {
    for (var p in b)
      if (b.hasOwnProperty(p))
        d[p] = b[p];
  };
  return function(d, b) {
    extendStatics(d, b);
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();
var UserApiKeyAuthProviderClientImpl = function(_super) {
  __extends20(UserApiKeyAuthProviderClientImpl2, _super);
  function UserApiKeyAuthProviderClientImpl2(requestClient, routes) {
    return _super.call(this, requestClient, routes) || this;
  }
  UserApiKeyAuthProviderClientImpl2.prototype.createApiKey = function(name) {
    return _super.prototype.createApiKey.call(this, name);
  };
  UserApiKeyAuthProviderClientImpl2.prototype.fetchApiKey = function(keyId) {
    return _super.prototype.fetchApiKey.call(this, keyId);
  };
  UserApiKeyAuthProviderClientImpl2.prototype.fetchApiKeys = function() {
    return _super.prototype.fetchApiKeys.call(this);
  };
  UserApiKeyAuthProviderClientImpl2.prototype.deleteApiKey = function(keyId) {
    return _super.prototype.deleteApiKey.call(this, keyId);
  };
  UserApiKeyAuthProviderClientImpl2.prototype.enableApiKey = function(keyId) {
    return _super.prototype.enableApiKey.call(this, keyId);
  };
  UserApiKeyAuthProviderClientImpl2.prototype.disableApiKey = function(keyId) {
    return _super.prototype.disableApiKey.call(this, keyId);
  };
  return UserApiKeyAuthProviderClientImpl2;
}(CoreUserApiKeyAuthProviderClient_default);
var UserApiKeyAuthProviderClientImpl_default = UserApiKeyAuthProviderClientImpl;

// node_modules/mongodb-stitch-browser-core/dist/esm/core/auth/providers/userapikey/UserApiKeyAuthProviderClient.js
var UserApiKeyAuthProviderClient;
(function(UserApiKeyAuthProviderClient2) {
  UserApiKeyAuthProviderClient2.factory = new (function() {
    function class_1() {
    }
    class_1.prototype.getClient = function(authRequestClient, requestClient, routes) {
      return new UserApiKeyAuthProviderClientImpl_default(authRequestClient, routes);
    };
    return class_1;
  }())();
})(UserApiKeyAuthProviderClient || (UserApiKeyAuthProviderClient = {}));

// node_modules/mongodb-stitch-browser-core/dist/esm/core/auth/providers/userpassword/internal/UserPasswordAuthProviderClientImpl.js
var __extends21 = function() {
  var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d, b) {
    d.__proto__ = b;
  } || function(d, b) {
    for (var p in b)
      if (b.hasOwnProperty(p))
        d[p] = b[p];
  };
  return function(d, b) {
    extendStatics(d, b);
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();
var UserPasswordAuthProviderClientImpl = function(_super) {
  __extends21(UserPasswordAuthProviderClientImpl2, _super);
  function UserPasswordAuthProviderClientImpl2(requestClient, routes) {
    return _super.call(this, UserPasswordAuthProvider_default.DEFAULT_NAME, requestClient, routes) || this;
  }
  UserPasswordAuthProviderClientImpl2.prototype.registerWithEmail = function(email, password) {
    return _super.prototype.registerWithEmailInternal.call(this, email, password);
  };
  UserPasswordAuthProviderClientImpl2.prototype.confirmUser = function(token, tokenId) {
    return _super.prototype.confirmUserInternal.call(this, token, tokenId);
  };
  UserPasswordAuthProviderClientImpl2.prototype.resendConfirmationEmail = function(email) {
    return _super.prototype.resendConfirmationEmailInternal.call(this, email);
  };
  UserPasswordAuthProviderClientImpl2.prototype.resetPassword = function(token, tokenId, password) {
    return _super.prototype.resetPasswordInternal.call(this, token, tokenId, password);
  };
  UserPasswordAuthProviderClientImpl2.prototype.sendResetPasswordEmail = function(email) {
    return _super.prototype.sendResetPasswordEmailInternal.call(this, email);
  };
  UserPasswordAuthProviderClientImpl2.prototype.callResetPasswordFunction = function(email, password, args) {
    return _super.prototype.callResetPasswordFunctionInternal.call(this, email, password, args);
  };
  return UserPasswordAuthProviderClientImpl2;
}(CoreUserPasswordAuthProviderClient_default);
var UserPasswordAuthProviderClientImpl_default = UserPasswordAuthProviderClientImpl;

// node_modules/mongodb-stitch-browser-core/dist/esm/core/auth/providers/userpassword/UserPasswordAuthProviderClient.js
var UserPasswordAuthProviderClient;
(function(UserPasswordAuthProviderClient2) {
  UserPasswordAuthProviderClient2.factory = new (function() {
    function class_1() {
    }
    class_1.prototype.getClient = function(authRequestClient, requestClient, routes) {
      return new UserPasswordAuthProviderClientImpl_default(requestClient, routes);
    };
    return class_1;
  }())();
})(UserPasswordAuthProviderClient || (UserPasswordAuthProviderClient = {}));

// node_modules/whatwg-fetch/fetch.js
var g = typeof globalThis !== "undefined" && globalThis || typeof self !== "undefined" && self || // eslint-disable-next-line no-undef
typeof global !== "undefined" && global || {};
var support = {
  searchParams: "URLSearchParams" in g,
  iterable: "Symbol" in g && "iterator" in Symbol,
  blob: "FileReader" in g && "Blob" in g && function() {
    try {
      new Blob();
      return true;
    } catch (e) {
      return false;
    }
  }(),
  formData: "FormData" in g,
  arrayBuffer: "ArrayBuffer" in g
};
function isDataView(obj) {
  return obj && DataView.prototype.isPrototypeOf(obj);
}
if (support.arrayBuffer) {
  viewClasses = [
    "[object Int8Array]",
    "[object Uint8Array]",
    "[object Uint8ClampedArray]",
    "[object Int16Array]",
    "[object Uint16Array]",
    "[object Int32Array]",
    "[object Uint32Array]",
    "[object Float32Array]",
    "[object Float64Array]"
  ];
  isArrayBufferView = ArrayBuffer.isView || function(obj) {
    return obj && viewClasses.indexOf(Object.prototype.toString.call(obj)) > -1;
  };
}
var viewClasses;
var isArrayBufferView;
function normalizeName(name) {
  if (typeof name !== "string") {
    name = String(name);
  }
  if (/[^a-z0-9\-#$%&'*+.^_`|~!]/i.test(name) || name === "") {
    throw new TypeError('Invalid character in header field name: "' + name + '"');
  }
  return name.toLowerCase();
}
function normalizeValue(value2) {
  if (typeof value2 !== "string") {
    value2 = String(value2);
  }
  return value2;
}
function iteratorFor(items) {
  var iterator = {
    next: function() {
      var value2 = items.shift();
      return { done: value2 === void 0, value: value2 };
    }
  };
  if (support.iterable) {
    iterator[Symbol.iterator] = function() {
      return iterator;
    };
  }
  return iterator;
}
function Headers2(headers) {
  this.map = {};
  if (headers instanceof Headers2) {
    headers.forEach(function(value2, name) {
      this.append(name, value2);
    }, this);
  } else if (Array.isArray(headers)) {
    headers.forEach(function(header) {
      if (header.length != 2) {
        throw new TypeError("Headers constructor: expected name/value pair to be length 2, found" + header.length);
      }
      this.append(header[0], header[1]);
    }, this);
  } else if (headers) {
    Object.getOwnPropertyNames(headers).forEach(function(name) {
      this.append(name, headers[name]);
    }, this);
  }
}
Headers2.prototype.append = function(name, value2) {
  name = normalizeName(name);
  value2 = normalizeValue(value2);
  var oldValue = this.map[name];
  this.map[name] = oldValue ? oldValue + ", " + value2 : value2;
};
Headers2.prototype["delete"] = function(name) {
  delete this.map[normalizeName(name)];
};
Headers2.prototype.get = function(name) {
  name = normalizeName(name);
  return this.has(name) ? this.map[name] : null;
};
Headers2.prototype.has = function(name) {
  return this.map.hasOwnProperty(normalizeName(name));
};
Headers2.prototype.set = function(name, value2) {
  this.map[normalizeName(name)] = normalizeValue(value2);
};
Headers2.prototype.forEach = function(callback, thisArg) {
  for (var name in this.map) {
    if (this.map.hasOwnProperty(name)) {
      callback.call(thisArg, this.map[name], name, this);
    }
  }
};
Headers2.prototype.keys = function() {
  var items = [];
  this.forEach(function(value2, name) {
    items.push(name);
  });
  return iteratorFor(items);
};
Headers2.prototype.values = function() {
  var items = [];
  this.forEach(function(value2) {
    items.push(value2);
  });
  return iteratorFor(items);
};
Headers2.prototype.entries = function() {
  var items = [];
  this.forEach(function(value2, name) {
    items.push([name, value2]);
  });
  return iteratorFor(items);
};
if (support.iterable) {
  Headers2.prototype[Symbol.iterator] = Headers2.prototype.entries;
}
function consumed(body) {
  if (body._noBody)
    return;
  if (body.bodyUsed) {
    return Promise.reject(new TypeError("Already read"));
  }
  body.bodyUsed = true;
}
function fileReaderReady(reader) {
  return new Promise(function(resolve, reject) {
    reader.onload = function() {
      resolve(reader.result);
    };
    reader.onerror = function() {
      reject(reader.error);
    };
  });
}
function readBlobAsArrayBuffer(blob) {
  var reader = new FileReader();
  var promise = fileReaderReady(reader);
  reader.readAsArrayBuffer(blob);
  return promise;
}
function readBlobAsText(blob) {
  var reader = new FileReader();
  var promise = fileReaderReady(reader);
  var match = /charset=([A-Za-z0-9_-]+)/.exec(blob.type);
  var encoding = match ? match[1] : "utf-8";
  reader.readAsText(blob, encoding);
  return promise;
}
function readArrayBufferAsText(buf) {
  var view = new Uint8Array(buf);
  var chars = new Array(view.length);
  for (var i3 = 0; i3 < view.length; i3++) {
    chars[i3] = String.fromCharCode(view[i3]);
  }
  return chars.join("");
}
function bufferClone(buf) {
  if (buf.slice) {
    return buf.slice(0);
  } else {
    var view = new Uint8Array(buf.byteLength);
    view.set(new Uint8Array(buf));
    return view.buffer;
  }
}
function Body() {
  this.bodyUsed = false;
  this._initBody = function(body) {
    this.bodyUsed = this.bodyUsed;
    this._bodyInit = body;
    if (!body) {
      this._noBody = true;
      this._bodyText = "";
    } else if (typeof body === "string") {
      this._bodyText = body;
    } else if (support.blob && Blob.prototype.isPrototypeOf(body)) {
      this._bodyBlob = body;
    } else if (support.formData && FormData.prototype.isPrototypeOf(body)) {
      this._bodyFormData = body;
    } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
      this._bodyText = body.toString();
    } else if (support.arrayBuffer && support.blob && isDataView(body)) {
      this._bodyArrayBuffer = bufferClone(body.buffer);
      this._bodyInit = new Blob([this._bodyArrayBuffer]);
    } else if (support.arrayBuffer && (ArrayBuffer.prototype.isPrototypeOf(body) || isArrayBufferView(body))) {
      this._bodyArrayBuffer = bufferClone(body);
    } else {
      this._bodyText = body = Object.prototype.toString.call(body);
    }
    if (!this.headers.get("content-type")) {
      if (typeof body === "string") {
        this.headers.set("content-type", "text/plain;charset=UTF-8");
      } else if (this._bodyBlob && this._bodyBlob.type) {
        this.headers.set("content-type", this._bodyBlob.type);
      } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
        this.headers.set("content-type", "application/x-www-form-urlencoded;charset=UTF-8");
      }
    }
  };
  if (support.blob) {
    this.blob = function() {
      var rejected = consumed(this);
      if (rejected) {
        return rejected;
      }
      if (this._bodyBlob) {
        return Promise.resolve(this._bodyBlob);
      } else if (this._bodyArrayBuffer) {
        return Promise.resolve(new Blob([this._bodyArrayBuffer]));
      } else if (this._bodyFormData) {
        throw new Error("could not read FormData body as blob");
      } else {
        return Promise.resolve(new Blob([this._bodyText]));
      }
    };
  }
  this.arrayBuffer = function() {
    if (this._bodyArrayBuffer) {
      var isConsumed = consumed(this);
      if (isConsumed) {
        return isConsumed;
      } else if (ArrayBuffer.isView(this._bodyArrayBuffer)) {
        return Promise.resolve(
          this._bodyArrayBuffer.buffer.slice(
            this._bodyArrayBuffer.byteOffset,
            this._bodyArrayBuffer.byteOffset + this._bodyArrayBuffer.byteLength
          )
        );
      } else {
        return Promise.resolve(this._bodyArrayBuffer);
      }
    } else if (support.blob) {
      return this.blob().then(readBlobAsArrayBuffer);
    } else {
      throw new Error("could not read as ArrayBuffer");
    }
  };
  this.text = function() {
    var rejected = consumed(this);
    if (rejected) {
      return rejected;
    }
    if (this._bodyBlob) {
      return readBlobAsText(this._bodyBlob);
    } else if (this._bodyArrayBuffer) {
      return Promise.resolve(readArrayBufferAsText(this._bodyArrayBuffer));
    } else if (this._bodyFormData) {
      throw new Error("could not read FormData body as text");
    } else {
      return Promise.resolve(this._bodyText);
    }
  };
  if (support.formData) {
    this.formData = function() {
      return this.text().then(decode);
    };
  }
  this.json = function() {
    return this.text().then(JSON.parse);
  };
  return this;
}
var methods = ["CONNECT", "DELETE", "GET", "HEAD", "OPTIONS", "PATCH", "POST", "PUT", "TRACE"];
function normalizeMethod(method) {
  var upcased = method.toUpperCase();
  return methods.indexOf(upcased) > -1 ? upcased : method;
}
function Request2(input, options) {
  if (!(this instanceof Request2)) {
    throw new TypeError('Please use the "new" operator, this DOM object constructor cannot be called as a function.');
  }
  options = options || {};
  var body = options.body;
  if (input instanceof Request2) {
    if (input.bodyUsed) {
      throw new TypeError("Already read");
    }
    this.url = input.url;
    this.credentials = input.credentials;
    if (!options.headers) {
      this.headers = new Headers2(input.headers);
    }
    this.method = input.method;
    this.mode = input.mode;
    this.signal = input.signal;
    if (!body && input._bodyInit != null) {
      body = input._bodyInit;
      input.bodyUsed = true;
    }
  } else {
    this.url = String(input);
  }
  this.credentials = options.credentials || this.credentials || "same-origin";
  if (options.headers || !this.headers) {
    this.headers = new Headers2(options.headers);
  }
  this.method = normalizeMethod(options.method || this.method || "GET");
  this.mode = options.mode || this.mode || null;
  this.signal = options.signal || this.signal || function() {
    if ("AbortController" in g) {
      var ctrl = new AbortController();
      return ctrl.signal;
    }
  }();
  this.referrer = null;
  if ((this.method === "GET" || this.method === "HEAD") && body) {
    throw new TypeError("Body not allowed for GET or HEAD requests");
  }
  this._initBody(body);
  if (this.method === "GET" || this.method === "HEAD") {
    if (options.cache === "no-store" || options.cache === "no-cache") {
      var reParamSearch = /([?&])_=[^&]*/;
      if (reParamSearch.test(this.url)) {
        this.url = this.url.replace(reParamSearch, "$1_=" + (/* @__PURE__ */ new Date()).getTime());
      } else {
        var reQueryString = /\?/;
        this.url += (reQueryString.test(this.url) ? "&" : "?") + "_=" + (/* @__PURE__ */ new Date()).getTime();
      }
    }
  }
}
Request2.prototype.clone = function() {
  return new Request2(this, { body: this._bodyInit });
};
function decode(body) {
  var form = new FormData();
  body.trim().split("&").forEach(function(bytes) {
    if (bytes) {
      var split = bytes.split("=");
      var name = split.shift().replace(/\+/g, " ");
      var value2 = split.join("=").replace(/\+/g, " ");
      form.append(decodeURIComponent(name), decodeURIComponent(value2));
    }
  });
  return form;
}
function parseHeaders(rawHeaders) {
  var headers = new Headers2();
  var preProcessedHeaders = rawHeaders.replace(/\r?\n[\t ]+/g, " ");
  preProcessedHeaders.split("\r").map(function(header) {
    return header.indexOf("\n") === 0 ? header.substr(1, header.length) : header;
  }).forEach(function(line) {
    var parts = line.split(":");
    var key = parts.shift().trim();
    if (key) {
      var value2 = parts.join(":").trim();
      try {
        headers.append(key, value2);
      } catch (error) {
        console.warn("Response " + error.message);
      }
    }
  });
  return headers;
}
Body.call(Request2.prototype);
function Response2(bodyInit, options) {
  if (!(this instanceof Response2)) {
    throw new TypeError('Please use the "new" operator, this DOM object constructor cannot be called as a function.');
  }
  if (!options) {
    options = {};
  }
  this.type = "default";
  this.status = options.status === void 0 ? 200 : options.status;
  if (this.status < 200 || this.status > 599) {
    throw new RangeError("Failed to construct 'Response': The status provided (0) is outside the range [200, 599].");
  }
  this.ok = this.status >= 200 && this.status < 300;
  this.statusText = options.statusText === void 0 ? "" : "" + options.statusText;
  this.headers = new Headers2(options.headers);
  this.url = options.url || "";
  this._initBody(bodyInit);
}
Body.call(Response2.prototype);
Response2.prototype.clone = function() {
  return new Response2(this._bodyInit, {
    status: this.status,
    statusText: this.statusText,
    headers: new Headers2(this.headers),
    url: this.url
  });
};
Response2.error = function() {
  var response = new Response2(null, { status: 200, statusText: "" });
  response.status = 0;
  response.type = "error";
  return response;
};
var redirectStatuses = [301, 302, 303, 307, 308];
Response2.redirect = function(url, status) {
  if (redirectStatuses.indexOf(status) === -1) {
    throw new RangeError("Invalid status code");
  }
  return new Response2(null, { status, headers: { location: url } });
};
var DOMException = g.DOMException;
try {
  new DOMException();
} catch (err) {
  DOMException = function(message, name) {
    this.message = message;
    this.name = name;
    var error = Error(message);
    this.stack = error.stack;
  };
  DOMException.prototype = Object.create(Error.prototype);
  DOMException.prototype.constructor = DOMException;
}
function fetch2(input, init) {
  return new Promise(function(resolve, reject) {
    var request = new Request2(input, init);
    if (request.signal && request.signal.aborted) {
      return reject(new DOMException("Aborted", "AbortError"));
    }
    var xhr = new XMLHttpRequest();
    function abortXhr() {
      xhr.abort();
    }
    xhr.onload = function() {
      var options = {
        statusText: xhr.statusText,
        headers: parseHeaders(xhr.getAllResponseHeaders() || "")
      };
      if (request.url.startsWith("file://") && (xhr.status < 200 || xhr.status > 599)) {
        options.status = 200;
      } else {
        options.status = xhr.status;
      }
      options.url = "responseURL" in xhr ? xhr.responseURL : options.headers.get("X-Request-URL");
      var body = "response" in xhr ? xhr.response : xhr.responseText;
      setTimeout(function() {
        resolve(new Response2(body, options));
      }, 0);
    };
    xhr.onerror = function() {
      setTimeout(function() {
        reject(new TypeError("Network request failed"));
      }, 0);
    };
    xhr.ontimeout = function() {
      setTimeout(function() {
        reject(new TypeError("Network request timed out"));
      }, 0);
    };
    xhr.onabort = function() {
      setTimeout(function() {
        reject(new DOMException("Aborted", "AbortError"));
      }, 0);
    };
    function fixUrl(url) {
      try {
        return url === "" && g.location.href ? g.location.href : url;
      } catch (e) {
        return url;
      }
    }
    xhr.open(request.method, fixUrl(request.url), true);
    if (request.credentials === "include") {
      xhr.withCredentials = true;
    } else if (request.credentials === "omit") {
      xhr.withCredentials = false;
    }
    if ("responseType" in xhr) {
      if (support.blob) {
        xhr.responseType = "blob";
      } else if (support.arrayBuffer) {
        xhr.responseType = "arraybuffer";
      }
    }
    if (init && typeof init.headers === "object" && !(init.headers instanceof Headers2 || g.Headers && init.headers instanceof g.Headers)) {
      var names = [];
      Object.getOwnPropertyNames(init.headers).forEach(function(name) {
        names.push(normalizeName(name));
        xhr.setRequestHeader(name, normalizeValue(init.headers[name]));
      });
      request.headers.forEach(function(value2, name) {
        if (names.indexOf(name) === -1) {
          xhr.setRequestHeader(name, value2);
        }
      });
    } else {
      request.headers.forEach(function(value2, name) {
        xhr.setRequestHeader(name, value2);
      });
    }
    if (request.signal) {
      request.signal.addEventListener("abort", abortXhr);
      xhr.onreadystatechange = function() {
        if (xhr.readyState === 4) {
          request.signal.removeEventListener("abort", abortXhr);
        }
      };
    }
    xhr.send(typeof request._bodyInit === "undefined" ? null : request._bodyInit);
  });
}
fetch2.polyfill = true;
if (!g.fetch) {
  g.fetch = fetch2;
  g.Headers = Headers2;
  g.Request = Request2;
  g.Response = Response2;
}

// node_modules/mongodb-stitch-browser-core/dist/esm/core/internal/net/BrowserFetchTransport.js
var BrowserFetchTransport = function() {
  function BrowserFetchTransport2() {
  }
  BrowserFetchTransport2.prototype.roundTrip = function(request) {
    var responsePromise = fetch2(request.url, {
      body: request.body,
      headers: request.headers,
      method: request.method,
      mode: "cors"
    });
    var responseTextPromise = responsePromise.then(function(response) {
      return response.text();
    });
    return Promise.all([responsePromise, responseTextPromise]).then(function(values) {
      var response = values[0];
      var body = values[1];
      var headers = {};
      response.headers.forEach(function(value2, key) {
        headers[key] = value2;
      });
      return new Response_default(headers, response.status, body);
    });
  };
  BrowserFetchTransport2.prototype.stream = function(request, open, retryRequest) {
    if (open === void 0) {
      open = true;
    }
    throw new StitchClientError_default(StitchClientErrorCode.StreamingNotSupported);
  };
  return BrowserFetchTransport2;
}();
var BrowserFetchTransport_default = BrowserFetchTransport;

// node_modules/mongodb-stitch-browser-core/dist/esm/core/internal/common/LocalStorage.js
var stitchPrefixKey = "__stitch.client";
var LocalStorage = function() {
  function LocalStorage2(suiteName) {
    this.suiteName = suiteName;
  }
  LocalStorage2.prototype.get = function(key) {
    return localStorage.getItem(this.getKey(key));
  };
  LocalStorage2.prototype.set = function(key, value2) {
    localStorage.setItem(this.getKey(key), value2);
  };
  LocalStorage2.prototype.remove = function(key) {
    localStorage.removeItem(this.getKey(key));
  };
  LocalStorage2.prototype.getKey = function(forKey) {
    return stitchPrefixKey + "." + this.suiteName + "." + forKey;
  };
  return LocalStorage2;
}();
var LocalStorage_default = LocalStorage;

// node_modules/mongodb-stitch-browser-core/dist/esm/core/internal/net/EventSourceEventStream.js
var __extends22 = function() {
  var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d, b) {
    d.__proto__ = b;
  } || function(d, b) {
    for (var p in b)
      if (b.hasOwnProperty(p))
        d[p] = b[p];
  };
  return function(d, b) {
    extendStatics(d, b);
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();
var EventSourceEventStream = function(_super) {
  __extends22(EventSourceEventStream2, _super);
  function EventSourceEventStream2(evtSrc, onOpen, onOpenError, reconnecter) {
    var _this = _super.call(this, reconnecter) || this;
    _this.evtSrc = evtSrc;
    _this.onOpenError = onOpenError;
    _this.openedOnce = false;
    _this.evtSrc.onopen = function(e) {
      onOpen(_this);
      _this.openedOnce = true;
    };
    _this.reset();
    return _this;
  }
  EventSourceEventStream2.prototype.open = function() {
    if (this.closed) {
      throw new StitchClientError_default(StitchClientErrorCode.StreamClosed);
    }
  };
  EventSourceEventStream2.prototype.afterClose = function() {
    this.evtSrc.close();
  };
  EventSourceEventStream2.prototype.onReconnect = function(next) {
    this.evtSrc = next.evtSrc;
    this.reset();
    this.events = next.events.concat(this.events);
  };
  EventSourceEventStream2.prototype.reset = function() {
    var _this = this;
    this.evtSrc.onmessage = function(e) {
      _this.events.push(new Event_default(Event_default.MESSAGE_EVENT, e.data));
      _this.poll();
    };
    this.evtSrc.onerror = function(e) {
      if (e instanceof MessageEvent) {
        _this.lastErr = e.data;
        _this.events.push(new Event_default(StitchEvent_default.ERROR_EVENT_NAME, _this.lastErr));
        _this.close();
        _this.poll();
        return;
      }
      if (!_this.openedOnce) {
        _this.close();
        _this.onOpenError(new Error("event source failed to open and will not reconnect; check network log for more details"));
        return;
      }
      _this.evtSrc.close();
      _this.reconnect();
    };
  };
  return EventSourceEventStream2;
}(BaseEventStream_default);
var EventSourceEventStream_default = EventSourceEventStream;

// node_modules/mongodb-stitch-browser-core/dist/esm/core/internal/net/BrowserFetchStreamTransport.js
var __extends23 = function() {
  var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d, b) {
    d.__proto__ = b;
  } || function(d, b) {
    for (var p in b)
      if (b.hasOwnProperty(p))
        d[p] = b[p];
  };
  return function(d, b) {
    extendStatics(d, b);
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();
var __assign = Object.assign || function(t) {
  for (var s, i3 = 1, n = arguments.length; i3 < n; i3++) {
    s = arguments[i3];
    for (var p in s)
      if (Object.prototype.hasOwnProperty.call(s, p))
        t[p] = s[p];
  }
  return t;
};
var BrowserFetchStreamTransport = function(_super) {
  __extends23(BrowserFetchStreamTransport2, _super);
  function BrowserFetchStreamTransport2() {
    return _super !== null && _super.apply(this, arguments) || this;
  }
  BrowserFetchStreamTransport2.prototype.stream = function(request, open, retryRequest) {
    if (open === void 0) {
      open = true;
    }
    var reqHeaders = __assign({}, request.headers);
    reqHeaders[Headers_default.ACCEPT] = ContentTypes_default.TEXT_EVENT_STREAM;
    reqHeaders[Headers_default.CONTENT_TYPE] = ContentTypes_default.TEXT_EVENT_STREAM;
    return fetch2(request.url + "&stitch_validate=true", {
      body: request.body,
      headers: reqHeaders,
      method: request.method,
      mode: "cors"
    }).then(function(response) {
      var respHeaders = {};
      response.headers.forEach(function(value2, key) {
        respHeaders[key] = value2;
      });
      if (response.status < 200 || response.status >= 300) {
        return response.text().then(function(body) {
          return handleRequestError(new Response_default(respHeaders, response.status, body));
        });
      }
      return new Promise(function(resolve, reject) {
        return new EventSourceEventStream_default(new EventSource(request.url), function(stream) {
          return resolve(stream);
        }, function(error) {
          return reject(error);
        }, retryRequest ? function() {
          return retryRequest().then(function(es) {
            return es;
          });
        } : void 0);
      });
    });
  };
  return BrowserFetchStreamTransport2;
}(BrowserFetchTransport_default);
var BrowserFetchStreamTransport_default = BrowserFetchStreamTransport;

// node_modules/mongodb-stitch-browser-core/dist/esm/services/internal/StitchServiceClientImpl.js
var StitchServiceClientImpl = function() {
  function StitchServiceClientImpl2(proxy) {
    this.proxy = proxy;
  }
  StitchServiceClientImpl2.prototype.callFunction = function(name, args, codec) {
    return this.proxy.callFunction(name, args, codec);
  };
  StitchServiceClientImpl2.prototype.streamFunction = function(name, args, codec) {
    return this.proxy.streamFunction(name, args, codec);
  };
  return StitchServiceClientImpl2;
}();
var StitchServiceClientImpl_default = StitchServiceClientImpl;

// node_modules/mongodb-stitch-browser-core/dist/esm/core/auth/internal/StitchAuthImpl.js
var import_detect_browser = __toESM(require_detect_browser());

// node_modules/mongodb-stitch-browser-core/dist/esm/core/internal/common/Version.js
var version2 = "4.8.0";

// node_modules/mongodb-stitch-browser-core/dist/esm/core/auth/internal/RedirectFragmentFields.js
var RedirectFragmentFields;
(function(RedirectFragmentFields2) {
  RedirectFragmentFields2["StitchError"] = "_stitch_error";
  RedirectFragmentFields2["State"] = "_stitch_state";
  RedirectFragmentFields2["UserAuth"] = "_stitch_ua";
  RedirectFragmentFields2["LinkUser"] = "_stitch_link_user";
  RedirectFragmentFields2["StitchLink"] = "_stitch_link";
  RedirectFragmentFields2["ClientAppId"] = "_stitch_client_app_id";
})(RedirectFragmentFields || (RedirectFragmentFields = {}));
var RedirectFragmentFields_default = RedirectFragmentFields;

// node_modules/mongodb-stitch-browser-core/dist/esm/core/auth/internal/RedirectKeys.js
var RedirectKeys;
(function(RedirectKeys2) {
  RedirectKeys2["ProviderName"] = "_stitch_redirect_provider_name";
  RedirectKeys2["ProviderType"] = "_stitch_redirect_provider_type";
  RedirectKeys2["State"] = "_stitch_redirect_state";
})(RedirectKeys || (RedirectKeys = {}));
var RedirectKeys_default = RedirectKeys;

// node_modules/mongodb-stitch-browser-core/dist/esm/core/auth/internal/StitchRedirectError.js
var __extends24 = function() {
  var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d, b) {
    d.__proto__ = b;
  } || function(d, b) {
    for (var p in b)
      if (b.hasOwnProperty(p))
        d[p] = b[p];
  };
  return function(d, b) {
    extendStatics(d, b);
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();
var StitchRedirectError = function(_super) {
  __extends24(StitchRedirectError2, _super);
  function StitchRedirectError2(msg) {
    return _super.call(this, msg) || this;
  }
  return StitchRedirectError2;
}(StitchError_default);
var StitchRedirectError_default = StitchRedirectError;

// node_modules/mongodb-stitch-browser-core/dist/esm/core/auth/internal/StitchUserImpl.js
var __extends25 = function() {
  var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d, b) {
    d.__proto__ = b;
  } || function(d, b) {
    for (var p in b)
      if (b.hasOwnProperty(p))
        d[p] = b[p];
  };
  return function(d, b) {
    extendStatics(d, b);
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();
var StitchUserImpl = function(_super) {
  __extends25(StitchUserImpl2, _super);
  function StitchUserImpl2(id, loggedInProviderType, loggedInProviderName, isLoggedIn, lastAuthActivity, profile, auth, customData) {
    var _this = _super.call(this, id, loggedInProviderType, loggedInProviderName, isLoggedIn, lastAuthActivity, profile, customData) || this;
    _this.auth = auth;
    return _this;
  }
  StitchUserImpl2.prototype.linkWithCredential = function(credential) {
    return this.auth.linkWithCredential(this, credential);
  };
  StitchUserImpl2.prototype.linkUserWithRedirect = function(credential) {
    return this.auth.linkWithRedirectInternal(this, credential);
  };
  return StitchUserImpl2;
}(CoreStitchUserImpl_default);
var StitchUserImpl_default = StitchUserImpl;

// node_modules/mongodb-stitch-browser-core/dist/esm/core/auth/internal/StitchUserFactoryImpl.js
var StitchUserFactoryImpl = function() {
  function StitchUserFactoryImpl2(auth) {
    this.auth = auth;
  }
  StitchUserFactoryImpl2.prototype.makeUser = function(id, loggedInProviderType, loggedInProviderName, isLoggedIn, lastAuthActivity, userProfile, customData) {
    return new StitchUserImpl_default(id, loggedInProviderType, loggedInProviderName, isLoggedIn, lastAuthActivity, userProfile, this.auth, customData);
  };
  return StitchUserFactoryImpl2;
}();
var StitchUserFactoryImpl_default = StitchUserFactoryImpl;

// node_modules/mongodb-stitch-browser-core/dist/esm/core/auth/internal/StitchAuthImpl.js
var __extends26 = function() {
  var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d, b) {
    d.__proto__ = b;
  } || function(d, b) {
    for (var p in b)
      if (b.hasOwnProperty(p))
        d[p] = b[p];
  };
  return function(d, b) {
    extendStatics(d, b);
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();
var __read2 = function(o, n) {
  var m = typeof Symbol === "function" && o[Symbol.iterator];
  if (!m)
    return o;
  var i3 = m.call(o), r, ar = [], e;
  try {
    while ((n === void 0 || n-- > 0) && !(r = i3.next()).done)
      ar.push(r.value);
  } catch (error) {
    e = { error };
  } finally {
    try {
      if (r && !r.done && (m = i3["return"]))
        m.call(i3);
    } finally {
      if (e)
        throw e.error;
    }
  }
  return ar;
};
var alphaNumericCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
var StitchAuthImpl = function(_super) {
  __extends26(StitchAuthImpl2, _super);
  function StitchAuthImpl2(requestClient, browserAuthRoutes, authStorage, appInfo, jsdomWindow) {
    if (jsdomWindow === void 0) {
      jsdomWindow = window;
    }
    var _this = _super.call(this, requestClient, browserAuthRoutes, authStorage) || this;
    _this.browserAuthRoutes = browserAuthRoutes;
    _this.authStorage = authStorage;
    _this.appInfo = appInfo;
    _this.jsdomWindow = jsdomWindow;
    _this.listeners = /* @__PURE__ */ new Set();
    _this.synchronousListeners = /* @__PURE__ */ new Set();
    return _this;
  }
  Object.defineProperty(StitchAuthImpl2.prototype, "userFactory", {
    get: function() {
      return new StitchUserFactoryImpl_default(this);
    },
    enumerable: true,
    configurable: true
  });
  StitchAuthImpl2.prototype.getProviderClient = function(factory, providerName) {
    if (isAuthProviderClientFactory(factory)) {
      return factory.getClient(this, this.requestClient, this.authRoutes);
    } else {
      return factory.getNamedClient(providerName, this.requestClient, this.authRoutes);
    }
  };
  StitchAuthImpl2.prototype.loginWithCredential = function(credential) {
    return _super.prototype.loginWithCredentialInternal.call(this, credential);
  };
  StitchAuthImpl2.prototype.loginWithRedirect = function(credential) {
    var _this = this;
    var _a3 = this.prepareRedirect(credential), redirectUrl = _a3.redirectUrl, state = _a3.state;
    this.requestClient.getBaseURL().then(function(baseUrl) {
      _this.jsdomWindow.location.replace(baseUrl + _this.browserAuthRoutes.getAuthProviderRedirectRoute(credential, redirectUrl, state, _this.deviceInfo));
    });
  };
  StitchAuthImpl2.prototype.linkWithRedirectInternal = function(user, credential) {
    var _this = this;
    if (this.user !== void 0 && user.id !== this.user.id) {
      return Promise.reject(new StitchClientError_default(StitchClientErrorCode.UserNoLongerValid));
    }
    var _a3 = this.prepareRedirect(credential), redirectUrl = _a3.redirectUrl, state = _a3.state;
    return this.requestClient.getBaseURL().then(function(baseUrl) {
      var link = baseUrl + _this.browserAuthRoutes.getAuthProviderLinkRedirectRoute(credential, redirectUrl, state, _this.deviceInfo);
      return (StitchAuthImpl2.injectedFetch ? StitchAuthImpl2.injectedFetch : fetch)(new Request(link, {
        credentials: "include",
        headers: {
          Authorization: "Bearer " + _this.authInfo.accessToken
        },
        mode: "cors"
      }));
    }).then(function(response) {
      _this.jsdomWindow.location.replace(response.headers.get("X-Stitch-Location"));
    });
  };
  StitchAuthImpl2.prototype.hasRedirectResult = function() {
    var isValid = false;
    try {
      isValid = this.parseRedirect().isValid;
      return isValid;
    } catch (_) {
      return false;
    } finally {
      if (!isValid) {
        this.cleanupRedirect();
      }
    }
  };
  StitchAuthImpl2.prototype.handleRedirectResult = function() {
    try {
      var providerName = this.authStorage.get(RedirectKeys_default.ProviderName);
      var providerType = this.authStorage.get(RedirectKeys_default.ProviderType);
      var redirectFragment = this.parseRedirect();
      return this.loginWithCredentialInternal(new StitchAuthResponseCredential_default(this.processRedirectResult(redirectFragment), providerType, providerName, redirectFragment.asLink)).then(function(user) {
        return user;
      });
    } catch (err) {
      return Promise.reject(err);
    }
  };
  StitchAuthImpl2.prototype.linkWithCredential = function(user, credential) {
    return _super.prototype.linkUserWithCredentialInternal.call(this, user, credential);
  };
  StitchAuthImpl2.prototype.logout = function() {
    if (arguments.length > 0) {
      return Promise.reject(new StitchClientError_default(StitchClientErrorCode.UnexpectedArguments));
    }
    return _super.prototype.logoutInternal.call(this);
  };
  StitchAuthImpl2.prototype.logoutUserWithId = function(userId) {
    return _super.prototype.logoutUserWithIdInternal.call(this, userId);
  };
  StitchAuthImpl2.prototype.removeUser = function() {
    if (arguments.length > 0) {
      return Promise.reject(new StitchClientError_default(StitchClientErrorCode.UnexpectedArguments));
    }
    return _super.prototype.removeUserInternal.call(this);
  };
  StitchAuthImpl2.prototype.removeUserWithId = function(userId) {
    return _super.prototype.removeUserWithIdInternal.call(this, userId);
  };
  Object.defineProperty(StitchAuthImpl2.prototype, "deviceInfo", {
    get: function() {
      var info = {};
      if (this.hasDeviceId) {
        info[DeviceFields_default.DEVICE_ID] = this.deviceId;
      }
      if (this.appInfo.localAppName !== void 0) {
        info[DeviceFields_default.APP_ID] = this.appInfo.localAppName;
      }
      if (this.appInfo.localAppVersion !== void 0) {
        info[DeviceFields_default.APP_VERSION] = this.appInfo.localAppVersion;
      }
      var browser3 = (0, import_detect_browser.detect)();
      if (browser3) {
        info[DeviceFields_default.PLATFORM] = browser3.name;
        info[DeviceFields_default.PLATFORM_VERSION] = browser3.version;
      } else {
        info[DeviceFields_default.PLATFORM] = "web";
        info[DeviceFields_default.PLATFORM_VERSION] = "0.0.0";
      }
      info[DeviceFields_default.SDK_VERSION] = version2;
      return info;
    },
    enumerable: true,
    configurable: true
  });
  StitchAuthImpl2.prototype.addAuthListener = function(listener) {
    this.listeners.add(listener);
    this.onAuthEvent(listener);
    this.dispatchAuthEvent({
      kind: AuthEventKind.ListenerRegistered
    });
  };
  StitchAuthImpl2.prototype.addSynchronousAuthListener = function(listener) {
    this.listeners.add(listener);
    this.onAuthEvent(listener);
    this.dispatchAuthEvent({
      kind: AuthEventKind.ListenerRegistered
    });
  };
  StitchAuthImpl2.prototype.removeAuthListener = function(listener) {
    this.listeners.delete(listener);
  };
  StitchAuthImpl2.prototype.onAuthEvent = function(listener) {
    var _this = this;
    if (listener) {
      var _1 = new Promise(function(resolve) {
        if (listener.onAuthEvent) {
          listener.onAuthEvent(_this);
        }
        resolve(void 0);
      });
    } else {
      this.listeners.forEach(function(one) {
        _this.onAuthEvent(one);
      });
    }
  };
  StitchAuthImpl2.prototype.dispatchAuthEvent = function(event) {
    var _this = this;
    switch (event.kind) {
      case AuthEventKind.ActiveUserChanged:
        this.dispatchBlockToListeners(function(listener) {
          if (listener.onActiveUserChanged) {
            listener.onActiveUserChanged(_this, event.currentActiveUser, event.previousActiveUser);
          }
        });
        break;
      case AuthEventKind.ListenerRegistered:
        this.dispatchBlockToListeners(function(listener) {
          if (listener.onListenerRegistered) {
            listener.onListenerRegistered(_this);
          }
        });
        break;
      case AuthEventKind.UserAdded:
        this.dispatchBlockToListeners(function(listener) {
          if (listener.onUserAdded) {
            listener.onUserAdded(_this, event.addedUser);
          }
        });
        break;
      case AuthEventKind.UserLinked:
        this.dispatchBlockToListeners(function(listener) {
          if (listener.onUserLinked) {
            listener.onUserLinked(_this, event.linkedUser);
          }
        });
        break;
      case AuthEventKind.UserLoggedIn:
        this.dispatchBlockToListeners(function(listener) {
          if (listener.onUserLoggedIn) {
            listener.onUserLoggedIn(_this, event.loggedInUser);
          }
        });
        break;
      case AuthEventKind.UserLoggedOut:
        this.dispatchBlockToListeners(function(listener) {
          if (listener.onUserLoggedOut) {
            listener.onUserLoggedOut(_this, event.loggedOutUser);
          }
        });
        break;
      case AuthEventKind.UserRemoved:
        this.dispatchBlockToListeners(function(listener) {
          if (listener.onUserRemoved) {
            listener.onUserRemoved(_this, event.removedUser);
          }
        });
        break;
      default:
        return this.assertNever(event);
    }
  };
  StitchAuthImpl2.prototype.refreshCustomData = function() {
    return this.refreshAccessToken();
  };
  StitchAuthImpl2.prototype.assertNever = function(x) {
    throw new Error("unexpected object: " + x);
  };
  StitchAuthImpl2.prototype.dispatchBlockToListeners = function(block) {
    this.synchronousListeners.forEach(block);
    this.listeners.forEach(function(listener) {
      var _ = new Promise(function(resolve) {
        block(listener);
        resolve(void 0);
      });
    });
  };
  StitchAuthImpl2.prototype.cleanupRedirect = function() {
    this.jsdomWindow.history.replaceState(null, "", this.pageRootUrl());
    this.authStorage.remove(RedirectKeys_default.State);
    this.authStorage.remove(RedirectKeys_default.ProviderName);
    this.authStorage.remove(RedirectKeys_default.ProviderType);
  };
  StitchAuthImpl2.prototype.parseRedirect = function() {
    if (typeof this.jsdomWindow === "undefined") {
      throw new StitchRedirectError_default("running in a non-browser environment");
    }
    if (!this.jsdomWindow.location || !this.jsdomWindow.location.hash) {
      throw new StitchRedirectError_default("window location hash was undefined");
    }
    var ourState = this.authStorage.get(RedirectKeys_default.State);
    var redirectFragment = this.jsdomWindow.location.hash.substring(1);
    return parseRedirectFragment(redirectFragment, ourState, this.appInfo.clientAppId);
  };
  StitchAuthImpl2.prototype.processRedirectResult = function(redirectFragment) {
    try {
      if (!redirectFragment.isValid) {
        throw new StitchRedirectError_default("invalid redirect result");
      }
      if (redirectFragment.lastError) {
        throw new StitchRedirectError_default("error handling redirect: " + redirectFragment.lastError);
      }
      if (!redirectFragment.authInfo) {
        throw new StitchRedirectError_default("no user auth value was found: it could not be decoded from fragment");
      }
    } catch (err) {
      throw err;
    } finally {
      this.cleanupRedirect();
    }
    return redirectFragment.authInfo;
  };
  StitchAuthImpl2.prototype.prepareRedirect = function(credential) {
    this.authStorage.set(RedirectKeys_default.ProviderName, credential.providerName);
    this.authStorage.set(RedirectKeys_default.ProviderType, credential.providerType);
    var redirectUrl = credential.redirectUrl;
    if (redirectUrl === void 0) {
      redirectUrl = this.pageRootUrl();
    }
    var state = generateState();
    this.authStorage.set(RedirectKeys_default.State, state);
    return { redirectUrl, state };
  };
  StitchAuthImpl2.prototype.pageRootUrl = function() {
    return [
      this.jsdomWindow.location.protocol,
      "//",
      this.jsdomWindow.location.host,
      this.jsdomWindow.location.pathname
    ].join("");
  };
  return StitchAuthImpl2;
}(CoreStitchAuth_default);
var StitchAuthImpl_default = StitchAuthImpl;
function generateState() {
  var state = "";
  for (var i3 = 0; i3 < 64; ++i3) {
    state += alphaNumericCharacters.charAt(Math.floor(Math.random() * alphaNumericCharacters.length));
  }
  return state;
}
function unmarshallUserAuth(data) {
  var parts = data.split("$");
  if (parts.length !== 4) {
    throw new StitchRedirectError_default("invalid user auth data provided while marshalling user authentication data: " + data);
  }
  var _a3 = __read2(parts, 4), accessToken = _a3[0], refreshToken = _a3[1], userId = _a3[2], deviceId = _a3[3];
  return new AuthInfo_default(userId, deviceId, accessToken, refreshToken);
}
var ParsedRedirectFragment = function() {
  function ParsedRedirectFragment2() {
    this.stateValid = false;
    this.clientAppIdValid = false;
    this.asLink = false;
  }
  Object.defineProperty(ParsedRedirectFragment2.prototype, "isValid", {
    get: function() {
      return this.stateValid && this.clientAppIdValid;
    },
    enumerable: true,
    configurable: true
  });
  return ParsedRedirectFragment2;
}();
function parseRedirectFragment(fragment, ourState, ourClientAppId) {
  var vars = fragment.split("&");
  var result = new ParsedRedirectFragment();
  vars.forEach(function(kvp) {
    var pairParts = kvp.split("=");
    var pairKey = decodeURIComponent(pairParts[0]);
    switch (pairKey) {
      case RedirectFragmentFields_default.StitchError:
        result.lastError = decodeURIComponent(pairParts[1]);
        break;
      case RedirectFragmentFields_default.UserAuth:
        try {
          result.authInfo = unmarshallUserAuth(decodeURIComponent(pairParts[1]));
        } catch (e) {
          result.lastError = e;
        }
        break;
      case RedirectFragmentFields_default.StitchLink:
        if (pairParts[1] === "ok") {
          result.asLink = true;
        }
        break;
      case RedirectFragmentFields_default.State:
        var theirState = decodeURIComponent(pairParts[1]);
        if (ourState === theirState) {
          result.stateValid = true;
        }
        break;
      case RedirectFragmentFields_default.ClientAppId:
        var clientAppId = decodeURIComponent(pairParts[1]);
        if (ourClientAppId === clientAppId) {
          result.clientAppIdValid = true;
        }
        break;
      default:
        break;
    }
  });
  return result;
}
function isAuthProviderClientFactory(factory) {
  return factory.getClient !== void 0;
}

// node_modules/mongodb-stitch-browser-core/dist/esm/core/auth/internal/StitchBrowserAppAuthRoutes.js
var __extends27 = function() {
  var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d, b) {
    d.__proto__ = b;
  } || function(d, b) {
    for (var p in b)
      if (b.hasOwnProperty(p))
        d[p] = b[p];
  };
  return function(d, b) {
    extendStatics(d, b);
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();
var StitchBrowserAppAuthRoutes = function(_super) {
  __extends27(StitchBrowserAppAuthRoutes2, _super);
  function StitchBrowserAppAuthRoutes2(clientAppId) {
    return _super.call(this, clientAppId) || this;
  }
  StitchBrowserAppAuthRoutes2.prototype.getAuthProviderRedirectRoute = function(credential, redirectUrl, state, deviceInfo) {
    return this.getAuthProviderLoginRoute(credential.providerName) + "?redirect=" + encodeURI(redirectUrl) + "&state=" + state + "&device=" + this.uriEncodeObject(deviceInfo);
  };
  StitchBrowserAppAuthRoutes2.prototype.getAuthProviderLinkRedirectRoute = function(credential, redirectUrl, state, deviceInfo) {
    return this.getAuthProviderLoginRoute(credential.providerName) + "?redirect=" + encodeURI(redirectUrl) + "&state=" + state + "&device=" + this.uriEncodeObject(deviceInfo) + "&link=true&providerRedirectHeader=true";
  };
  StitchBrowserAppAuthRoutes2.prototype.uriEncodeObject = function(obj) {
    return encodeURIComponent(base64Encode(JSON.stringify(obj)));
  };
  return StitchBrowserAppAuthRoutes2;
}(StitchAppAuthRoutes_default);
var StitchBrowserAppAuthRoutes_default = StitchBrowserAppAuthRoutes;

// node_modules/mongodb-stitch-browser-core/dist/esm/core/auth/internal/StitchBrowserAppRoutes.js
var __extends28 = function() {
  var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d, b) {
    d.__proto__ = b;
  } || function(d, b) {
    for (var p in b)
      if (b.hasOwnProperty(p))
        d[p] = b[p];
  };
  return function(d, b) {
    extendStatics(d, b);
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();
var StitchBrowserAppRoutes = function(_super) {
  __extends28(StitchBrowserAppRoutes2, _super);
  function StitchBrowserAppRoutes2(clientAppId) {
    var _this = _super.call(this, clientAppId) || this;
    _this.authRoutes = new StitchBrowserAppAuthRoutes_default(clientAppId);
    return _this;
  }
  return StitchBrowserAppRoutes2;
}(StitchAppRoutes_default);
var StitchBrowserAppRoutes_default = StitchBrowserAppRoutes;

// node_modules/mongodb-stitch-browser-core/dist/esm/core/internal/StitchAppClientImpl.js
var StitchAppClientImpl = function() {
  function StitchAppClientImpl2(clientAppId, config3) {
    this.info = new StitchAppClientInfo_default(clientAppId, config3.dataDirectory, config3.localAppName, config3.localAppVersion);
    this.routes = new StitchBrowserAppRoutes_default(this.info.clientAppId);
    var requestClient = new StitchAppRequestClient_default(clientAppId, config3.baseUrl, config3.transport);
    this.auth = new StitchAuthImpl_default(requestClient, this.routes.authRoutes, config3.storage, this.info);
    this.coreClient = new CoreStitchAppClient_default(this.auth, this.routes);
    this.serviceClients = [];
    this.auth.addSynchronousAuthListener(this);
  }
  StitchAppClientImpl2.prototype.getServiceClient = function(factory, serviceName) {
    if (isServiceClientFactory(factory)) {
      var serviceClient = new CoreStitchServiceClientImpl_default(this.auth, this.routes.serviceRoutes, "");
      this.bindServiceClient(serviceClient);
      return factory.getClient(serviceClient, this.info);
    } else {
      var serviceClient = new CoreStitchServiceClientImpl_default(this.auth, this.routes.serviceRoutes, serviceName);
      this.bindServiceClient(serviceClient);
      return factory.getNamedClient(serviceClient, this.info);
    }
  };
  StitchAppClientImpl2.prototype.getGeneralServiceClient = function(serviceName) {
    var serviceClient = new CoreStitchServiceClientImpl_default(this.auth, this.routes.serviceRoutes, serviceName);
    this.bindServiceClient(serviceClient);
    return new StitchServiceClientImpl_default(serviceClient);
  };
  StitchAppClientImpl2.prototype.callFunction = function(name, args) {
    return this.coreClient.callFunction(name, args);
  };
  StitchAppClientImpl2.prototype.onActiveUserChanged = function(_, currentActiveUser, previousActiveUser) {
    this.onRebindEvent(new AuthRebindEvent_default({
      currentActiveUser,
      kind: AuthEventKind.ActiveUserChanged,
      previousActiveUser
    }));
  };
  StitchAppClientImpl2.prototype.bindServiceClient = function(coreStitchServiceClient) {
    this.serviceClients.push(coreStitchServiceClient);
  };
  StitchAppClientImpl2.prototype.onRebindEvent = function(rebindEvent) {
    this.serviceClients.forEach(function(serviceClient) {
      serviceClient.onRebindEvent(rebindEvent);
    });
  };
  return StitchAppClientImpl2;
}();
var StitchAppClientImpl_default = StitchAppClientImpl;
function isServiceClientFactory(factory) {
  return factory.getClient !== void 0;
}

// node_modules/mongodb-stitch-browser-core/dist/esm/core/Stitch.js
var DEFAULT_BASE_URL = "https://stitch.mongodb.com";
var appClients = {};
var Stitch = function() {
  function Stitch2() {
  }
  Object.defineProperty(Stitch2, "defaultAppClient", {
    get: function() {
      if (Stitch2.defaultClientAppId === void 0) {
        throw new Error("default app client has not yet been initialized/set");
      }
      return appClients[Stitch2.defaultClientAppId];
    },
    enumerable: true,
    configurable: true
  });
  Stitch2.getAppClient = function(clientAppId) {
    if (appClients[clientAppId] === void 0) {
      throw new Error("client for app '" + clientAppId + "' has not yet been initialized");
    }
    return appClients[clientAppId];
  };
  Stitch2.hasAppClient = function(clientAppId) {
    return appClients[clientAppId] !== void 0;
  };
  Stitch2.initializeDefaultAppClient = function(clientAppId, config3) {
    if (config3 === void 0) {
      config3 = new StitchAppClientConfiguration.Builder().build();
    }
    if (clientAppId === void 0 || clientAppId === "") {
      throw new Error("clientAppId must be set to a non-empty string");
    }
    if (Stitch2.defaultClientAppId !== void 0) {
      throw new Error("default app can only be set once; currently set to '" + Stitch2.defaultClientAppId + "'");
    }
    var client = Stitch2.initializeAppClient(clientAppId, config3);
    Stitch2.defaultClientAppId = clientAppId;
    return client;
  };
  Stitch2.initializeAppClient = function(clientAppId, config3) {
    if (config3 === void 0) {
      config3 = new StitchAppClientConfiguration.Builder().build();
    }
    if (clientAppId === void 0 || clientAppId === "") {
      throw new Error("clientAppId must be set to a non-empty string");
    }
    if (appClients[clientAppId] !== void 0) {
      throw new Error("client for app '" + clientAppId + "' has already been initialized");
    }
    var builder = config3.builder ? config3.builder() : new StitchAppClientConfiguration.Builder(config3);
    if (builder.storage === void 0) {
      builder.withStorage(new LocalStorage_default(clientAppId));
    }
    if (builder.transport === void 0) {
      if (window["EventSource"]) {
        builder.withTransport(new BrowserFetchStreamTransport_default());
      } else {
        builder.withTransport(new BrowserFetchTransport_default());
      }
    }
    if (builder.baseUrl === void 0 || builder.baseUrl === "") {
      builder.withBaseUrl(DEFAULT_BASE_URL);
    }
    if (builder.localAppName === void 0 || builder.localAppName === "") {
      builder.withLocalAppName(Stitch2.localAppName);
    }
    if (builder.localAppVersion === void 0 || builder.localAppVersion === "") {
      builder.withLocalAppVersion(Stitch2.localAppVersion);
    }
    var client = new StitchAppClientImpl_default(clientAppId, builder.build());
    appClients[clientAppId] = client;
    return client;
  };
  Stitch2.clearApps = function() {
    appClients = {};
  };
  return Stitch2;
}();
var Stitch_default = Stitch;

// node_modules/mongodb-stitch-core-services-mongodb-remote/node_modules/bson/dist/bson.browser.esm.js
var import_long2 = __toESM(require_long());
var import_buffer2 = __toESM(require_buffer());
var commonjsGlobal2 = typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
function createCommonjsModule2(fn, module) {
  return module = { exports: {} }, fn(module, module.exports), module.exports;
}
var map2 = createCommonjsModule2(function(module) {
  if (typeof commonjsGlobal2.Map !== "undefined") {
    module.exports = commonjsGlobal2.Map;
    module.exports.Map = commonjsGlobal2.Map;
  } else {
    var Map2 = function Map3(array) {
      this._keys = [];
      this._values = {};
      for (var i3 = 0; i3 < array.length; i3++) {
        if (array[i3] == null)
          continue;
        var entry = array[i3];
        var key = entry[0];
        var value2 = entry[1];
        this._keys.push(key);
        this._values[key] = {
          v: value2,
          i: this._keys.length - 1
        };
      }
    };
    Map2.prototype.clear = function() {
      this._keys = [];
      this._values = {};
    };
    Map2.prototype.delete = function(key) {
      var value2 = this._values[key];
      if (value2 == null)
        return false;
      delete this._values[key];
      this._keys.splice(value2.i, 1);
      return true;
    };
    Map2.prototype.entries = function() {
      var self2 = this;
      var index = 0;
      return {
        next: function next() {
          var key = self2._keys[index++];
          return {
            value: key !== void 0 ? [key, self2._values[key].v] : void 0,
            done: key !== void 0 ? false : true
          };
        }
      };
    };
    Map2.prototype.forEach = function(callback, self2) {
      self2 = self2 || this;
      for (var i3 = 0; i3 < this._keys.length; i3++) {
        var key = this._keys[i3];
        callback.call(self2, this._values[key].v, key, self2);
      }
    };
    Map2.prototype.get = function(key) {
      return this._values[key] ? this._values[key].v : void 0;
    };
    Map2.prototype.has = function(key) {
      return this._values[key] != null;
    };
    Map2.prototype.keys = function() {
      var self2 = this;
      var index = 0;
      return {
        next: function next() {
          var key = self2._keys[index++];
          return {
            value: key !== void 0 ? key : void 0,
            done: key !== void 0 ? false : true
          };
        }
      };
    };
    Map2.prototype.set = function(key, value2) {
      if (this._values[key]) {
        this._values[key].v = value2;
        return this;
      }
      this._keys.push(key);
      this._values[key] = {
        v: value2,
        i: this._keys.length - 1
      };
      return this;
    };
    Map2.prototype.values = function() {
      var self2 = this;
      var index = 0;
      return {
        next: function next() {
          var key = self2._keys[index++];
          return {
            value: key !== void 0 ? self2._values[key].v : void 0,
            done: key !== void 0 ? false : true
          };
        }
      };
    };
    Object.defineProperty(Map2.prototype, "size", {
      enumerable: true,
      get: function get5() {
        return this._keys.length;
      }
    });
    module.exports = Map2;
  }
});
var map_12 = map2.Map;
import_long2.default.prototype.toExtendedJSON = function(options) {
  if (options && options.relaxed)
    return this.toNumber();
  return {
    $numberLong: this.toString()
  };
};
import_long2.default.fromExtendedJSON = function(doc, options) {
  var result = import_long2.default.fromString(doc.$numberLong);
  return options && options.relaxed ? result.toNumber() : result;
};
Object.defineProperty(import_long2.default.prototype, "_bsontype", {
  value: "Long"
});
var long_12 = import_long2.default;
function _classCallCheck2(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _defineProperties2(target, props) {
  for (var i3 = 0; i3 < props.length; i3++) {
    var descriptor = props[i3];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor)
      descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}
function _createClass2(Constructor, protoProps, staticProps) {
  if (protoProps)
    _defineProperties2(Constructor.prototype, protoProps);
  if (staticProps)
    _defineProperties2(Constructor, staticProps);
  return Constructor;
}
var Double3 = function() {
  function Double5(value2) {
    _classCallCheck2(this, Double5);
    this.value = value2;
  }
  _createClass2(Double5, [{
    key: "valueOf",
    value: function valueOf() {
      return this.value;
    }
    /**
     * @ignore
     */
  }, {
    key: "toJSON",
    value: function toJSON() {
      return this.value;
    }
    /**
     * @ignore
     */
  }, {
    key: "toExtendedJSON",
    value: function toExtendedJSON(options) {
      if (options && options.relaxed && isFinite(this.value))
        return this.value;
      return {
        $numberDouble: this.value.toString()
      };
    }
    /**
     * @ignore
     */
  }], [{
    key: "fromExtendedJSON",
    value: function fromExtendedJSON(doc, options) {
      return options && options.relaxed ? parseFloat(doc.$numberDouble) : new Double5(parseFloat(doc.$numberDouble));
    }
  }]);
  return Double5;
}();
Object.defineProperty(Double3.prototype, "_bsontype", {
  value: "Double"
});
var double_12 = Double3;
function _typeof2(obj) {
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof2 = function _typeof3(obj2) {
      return typeof obj2;
    };
  } else {
    _typeof2 = function _typeof3(obj2) {
      return obj2 && typeof Symbol === "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
    };
  }
  return _typeof2(obj);
}
function _classCallCheck$12(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _defineProperties$12(target, props) {
  for (var i3 = 0; i3 < props.length; i3++) {
    var descriptor = props[i3];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor)
      descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}
function _createClass$12(Constructor, protoProps, staticProps) {
  if (protoProps)
    _defineProperties$12(Constructor.prototype, protoProps);
  if (staticProps)
    _defineProperties$12(Constructor, staticProps);
  return Constructor;
}
function _possibleConstructorReturn2(self2, call) {
  if (call && (_typeof2(call) === "object" || typeof call === "function")) {
    return call;
  }
  return _assertThisInitialized2(self2);
}
function _assertThisInitialized2(self2) {
  if (self2 === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return self2;
}
function _getPrototypeOf2(o) {
  _getPrototypeOf2 = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf3(o2) {
    return o2.__proto__ || Object.getPrototypeOf(o2);
  };
  return _getPrototypeOf2(o);
}
function _inherits2(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } });
  if (superClass)
    _setPrototypeOf2(subClass, superClass);
}
function _setPrototypeOf2(o, p) {
  _setPrototypeOf2 = Object.setPrototypeOf || function _setPrototypeOf3(o2, p2) {
    o2.__proto__ = p2;
    return o2;
  };
  return _setPrototypeOf2(o, p);
}
var Timestamp3 = function(_Long) {
  _inherits2(Timestamp5, _Long);
  function Timestamp5(low, high) {
    var _this;
    _classCallCheck$12(this, Timestamp5);
    if (long_12.isLong(low)) {
      _this = _possibleConstructorReturn2(this, _getPrototypeOf2(Timestamp5).call(this, low.low, low.high));
    } else {
      _this = _possibleConstructorReturn2(this, _getPrototypeOf2(Timestamp5).call(this, low, high));
    }
    return _possibleConstructorReturn2(_this);
  }
  _createClass$12(Timestamp5, [{
    key: "toJSON",
    value: function toJSON() {
      return {
        $timestamp: this.toString()
      };
    }
    /**
     * Returns a Timestamp represented by the given (32-bit) integer value.
     *
     * @method
     * @param {number} value the 32-bit integer in question.
     * @return {Timestamp} the timestamp.
     */
  }, {
    key: "toExtendedJSON",
    /**
     * @ignore
     */
    value: function toExtendedJSON() {
      return {
        $timestamp: {
          t: this.high,
          i: this.low
        }
      };
    }
    /**
     * @ignore
     */
  }], [{
    key: "fromInt",
    value: function fromInt(value2) {
      return new Timestamp5(long_12.fromInt(value2));
    }
    /**
     * Returns a Timestamp representing the given number value, provided that it is a finite number. Otherwise, zero is returned.
     *
     * @method
     * @param {number} value the number in question.
     * @return {Timestamp} the timestamp.
     */
  }, {
    key: "fromNumber",
    value: function fromNumber(value2) {
      return new Timestamp5(long_12.fromNumber(value2));
    }
    /**
     * Returns a Timestamp for the given high and low bits. Each is assumed to use 32 bits.
     *
     * @method
     * @param {number} lowBits the low 32-bits.
     * @param {number} highBits the high 32-bits.
     * @return {Timestamp} the timestamp.
     */
  }, {
    key: "fromBits",
    value: function fromBits(lowBits, highBits) {
      return new Timestamp5(lowBits, highBits);
    }
    /**
     * Returns a Timestamp from the given string, optionally using the given radix.
     *
     * @method
     * @param {String} str the textual representation of the Timestamp.
     * @param {number} [opt_radix] the radix in which the text is written.
     * @return {Timestamp} the timestamp.
     */
  }, {
    key: "fromString",
    value: function fromString(str, opt_radix) {
      return new Timestamp5(long_12.fromString(str, opt_radix));
    }
  }, {
    key: "fromExtendedJSON",
    value: function fromExtendedJSON(doc) {
      return new Timestamp5(doc.$timestamp.i, doc.$timestamp.t);
    }
  }]);
  return Timestamp5;
}(long_12);
Object.defineProperty(Timestamp3.prototype, "_bsontype", {
  value: "Timestamp"
});
var timestamp2 = Timestamp3;
var require$$02 = {};
function normalizedFunctionString2(fn) {
  return fn.toString().replace("function(", "function (");
}
function insecureRandomBytes2(size) {
  var result = new Uint8Array(size);
  for (var i3 = 0; i3 < size; ++i3) {
    result[i3] = Math.floor(Math.random() * 256);
  }
  return result;
}
var randomBytes2 = insecureRandomBytes2;
if (typeof window !== "undefined" && window.crypto && window.crypto.getRandomValues) {
  randomBytes2 = function randomBytes3(size) {
    return window.crypto.getRandomValues(new Uint8Array(size));
  };
} else {
  try {
    randomBytes2 = require$$02.randomBytes;
  } catch (e) {
  }
  if (randomBytes2 == null) {
    randomBytes2 = insecureRandomBytes2;
  }
}
var utils2 = {
  normalizedFunctionString: normalizedFunctionString2,
  randomBytes: randomBytes2
};
function defaultSetTimout2() {
  throw new Error("setTimeout has not been defined");
}
function defaultClearTimeout2() {
  throw new Error("clearTimeout has not been defined");
}
var cachedSetTimeout2 = defaultSetTimout2;
var cachedClearTimeout2 = defaultClearTimeout2;
if (typeof global.setTimeout === "function") {
  cachedSetTimeout2 = setTimeout;
}
if (typeof global.clearTimeout === "function") {
  cachedClearTimeout2 = clearTimeout;
}
function runTimeout2(fun) {
  if (cachedSetTimeout2 === setTimeout) {
    return setTimeout(fun, 0);
  }
  if ((cachedSetTimeout2 === defaultSetTimout2 || !cachedSetTimeout2) && setTimeout) {
    cachedSetTimeout2 = setTimeout;
    return setTimeout(fun, 0);
  }
  try {
    return cachedSetTimeout2(fun, 0);
  } catch (e) {
    try {
      return cachedSetTimeout2.call(null, fun, 0);
    } catch (e2) {
      return cachedSetTimeout2.call(this, fun, 0);
    }
  }
}
function runClearTimeout2(marker) {
  if (cachedClearTimeout2 === clearTimeout) {
    return clearTimeout(marker);
  }
  if ((cachedClearTimeout2 === defaultClearTimeout2 || !cachedClearTimeout2) && clearTimeout) {
    cachedClearTimeout2 = clearTimeout;
    return clearTimeout(marker);
  }
  try {
    return cachedClearTimeout2(marker);
  } catch (e) {
    try {
      return cachedClearTimeout2.call(null, marker);
    } catch (e2) {
      return cachedClearTimeout2.call(this, marker);
    }
  }
}
var queue2 = [];
var draining2 = false;
var currentQueue2;
var queueIndex2 = -1;
function cleanUpNextTick2() {
  if (!draining2 || !currentQueue2) {
    return;
  }
  draining2 = false;
  if (currentQueue2.length) {
    queue2 = currentQueue2.concat(queue2);
  } else {
    queueIndex2 = -1;
  }
  if (queue2.length) {
    drainQueue2();
  }
}
function drainQueue2() {
  if (draining2) {
    return;
  }
  var timeout = runTimeout2(cleanUpNextTick2);
  draining2 = true;
  var len = queue2.length;
  while (len) {
    currentQueue2 = queue2;
    queue2 = [];
    while (++queueIndex2 < len) {
      if (currentQueue2) {
        currentQueue2[queueIndex2].run();
      }
    }
    queueIndex2 = -1;
    len = queue2.length;
  }
  currentQueue2 = null;
  draining2 = false;
  runClearTimeout2(timeout);
}
function nextTick2(fun) {
  var args = new Array(arguments.length - 1);
  if (arguments.length > 1) {
    for (var i3 = 1; i3 < arguments.length; i3++) {
      args[i3 - 1] = arguments[i3];
    }
  }
  queue2.push(new Item2(fun, args));
  if (queue2.length === 1 && !draining2) {
    runTimeout2(drainQueue2);
  }
}
function Item2(fun, array) {
  this.fun = fun;
  this.array = array;
}
Item2.prototype.run = function() {
  this.fun.apply(null, this.array);
};
var title2 = "browser";
var platform2 = "browser";
var browser2 = true;
var env2 = {};
var argv2 = [];
var version3 = "";
var versions2 = {};
var release2 = {};
var config2 = {};
function noop2() {
}
var on2 = noop2;
var addListener2 = noop2;
var once2 = noop2;
var off2 = noop2;
var removeListener2 = noop2;
var removeAllListeners2 = noop2;
var emit2 = noop2;
function binding2(name) {
  throw new Error("process.binding is not supported");
}
function cwd2() {
  return "/";
}
function chdir2(dir) {
  throw new Error("process.chdir is not supported");
}
function umask2() {
  return 0;
}
var performance2 = global.performance || {};
var performanceNow2 = performance2.now || performance2.mozNow || performance2.msNow || performance2.oNow || performance2.webkitNow || function() {
  return (/* @__PURE__ */ new Date()).getTime();
};
function hrtime2(previousTimestamp) {
  var clocktime = performanceNow2.call(performance2) * 1e-3;
  var seconds = Math.floor(clocktime);
  var nanoseconds = Math.floor(clocktime % 1 * 1e9);
  if (previousTimestamp) {
    seconds = seconds - previousTimestamp[0];
    nanoseconds = nanoseconds - previousTimestamp[1];
    if (nanoseconds < 0) {
      seconds--;
      nanoseconds += 1e9;
    }
  }
  return [seconds, nanoseconds];
}
var startTime2 = /* @__PURE__ */ new Date();
function uptime2() {
  var currentTime = /* @__PURE__ */ new Date();
  var dif = currentTime - startTime2;
  return dif / 1e3;
}
var process3 = {
  nextTick: nextTick2,
  title: title2,
  browser: browser2,
  env: env2,
  argv: argv2,
  version: version3,
  versions: versions2,
  on: on2,
  addListener: addListener2,
  once: once2,
  off: off2,
  removeListener: removeListener2,
  removeAllListeners: removeAllListeners2,
  emit: emit2,
  binding: binding2,
  cwd: cwd2,
  chdir: chdir2,
  umask: umask2,
  hrtime: hrtime2,
  platform: platform2,
  release: release2,
  config: config2,
  uptime: uptime2
};
var inherits2;
if (typeof Object.create === "function") {
  inherits2 = function inherits3(ctor, superCtor) {
    ctor.super_ = superCtor;
    ctor.prototype = Object.create(superCtor.prototype, {
      constructor: {
        value: ctor,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
  };
} else {
  inherits2 = function inherits3(ctor, superCtor) {
    ctor.super_ = superCtor;
    var TempCtor = function TempCtor2() {
    };
    TempCtor.prototype = superCtor.prototype;
    ctor.prototype = new TempCtor();
    ctor.prototype.constructor = ctor;
  };
}
var inherits$12 = inherits2;
function _typeof$12(obj) {
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof$12 = function _typeof3(obj2) {
      return typeof obj2;
    };
  } else {
    _typeof$12 = function _typeof3(obj2) {
      return obj2 && typeof Symbol === "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
    };
  }
  return _typeof$12(obj);
}
var formatRegExp2 = /%[sdj%]/g;
function format2(f) {
  if (!isString2(f)) {
    var objects = [];
    for (var i3 = 0; i3 < arguments.length; i3++) {
      objects.push(inspect2(arguments[i3]));
    }
    return objects.join(" ");
  }
  var i3 = 1;
  var args = arguments;
  var len = args.length;
  var str = String(f).replace(formatRegExp2, function(x2) {
    if (x2 === "%%")
      return "%";
    if (i3 >= len)
      return x2;
    switch (x2) {
      case "%s":
        return String(args[i3++]);
      case "%d":
        return Number(args[i3++]);
      case "%j":
        try {
          return JSON.stringify(args[i3++]);
        } catch (_) {
          return "[Circular]";
        }
      default:
        return x2;
    }
  });
  for (var x = args[i3]; i3 < len; x = args[++i3]) {
    if (isNull2(x) || !isObject2(x)) {
      str += " " + x;
    } else {
      str += " " + inspect2(x);
    }
  }
  return str;
}
function deprecate2(fn, msg) {
  if (isUndefined2(global.process)) {
    return function() {
      return deprecate2(fn, msg).apply(this, arguments);
    };
  }
  var warned = false;
  function deprecated() {
    if (!warned) {
      {
        console.error(msg);
      }
      warned = true;
    }
    return fn.apply(this, arguments);
  }
  return deprecated;
}
var debugs2 = {};
var debugEnviron2;
function debuglog2(set5) {
  if (isUndefined2(debugEnviron2))
    debugEnviron2 = process3.env.NODE_DEBUG || "";
  set5 = set5.toUpperCase();
  if (!debugs2[set5]) {
    if (new RegExp("\\b" + set5 + "\\b", "i").test(debugEnviron2)) {
      var pid = 0;
      debugs2[set5] = function() {
        var msg = format2.apply(null, arguments);
        console.error("%s %d: %s", set5, pid, msg);
      };
    } else {
      debugs2[set5] = function() {
      };
    }
  }
  return debugs2[set5];
}
function inspect2(obj, opts) {
  var ctx = {
    seen: [],
    stylize: stylizeNoColor2
  };
  if (arguments.length >= 3)
    ctx.depth = arguments[2];
  if (arguments.length >= 4)
    ctx.colors = arguments[3];
  if (isBoolean2(opts)) {
    ctx.showHidden = opts;
  } else if (opts) {
    _extend2(ctx, opts);
  }
  if (isUndefined2(ctx.showHidden))
    ctx.showHidden = false;
  if (isUndefined2(ctx.depth))
    ctx.depth = 2;
  if (isUndefined2(ctx.colors))
    ctx.colors = false;
  if (isUndefined2(ctx.customInspect))
    ctx.customInspect = true;
  if (ctx.colors)
    ctx.stylize = stylizeWithColor2;
  return formatValue2(ctx, obj, ctx.depth);
}
inspect2.colors = {
  "bold": [1, 22],
  "italic": [3, 23],
  "underline": [4, 24],
  "inverse": [7, 27],
  "white": [37, 39],
  "grey": [90, 39],
  "black": [30, 39],
  "blue": [34, 39],
  "cyan": [36, 39],
  "green": [32, 39],
  "magenta": [35, 39],
  "red": [31, 39],
  "yellow": [33, 39]
};
inspect2.styles = {
  "special": "cyan",
  "number": "yellow",
  "boolean": "yellow",
  "undefined": "grey",
  "null": "bold",
  "string": "green",
  "date": "magenta",
  // "name": intentionally not styling
  "regexp": "red"
};
function stylizeWithColor2(str, styleType) {
  var style = inspect2.styles[styleType];
  if (style) {
    return "\x1B[" + inspect2.colors[style][0] + "m" + str + "\x1B[" + inspect2.colors[style][1] + "m";
  } else {
    return str;
  }
}
function stylizeNoColor2(str, styleType) {
  return str;
}
function arrayToHash2(array) {
  var hash2 = {};
  array.forEach(function(val, idx) {
    hash2[val] = true;
  });
  return hash2;
}
function formatValue2(ctx, value2, recurseTimes) {
  if (ctx.customInspect && value2 && isFunction2(value2.inspect) && // Filter out the util module, it's inspect function is special
  value2.inspect !== inspect2 && // Also filter out any prototype objects using the circular check.
  !(value2.constructor && value2.constructor.prototype === value2)) {
    var ret = value2.inspect(recurseTimes, ctx);
    if (!isString2(ret)) {
      ret = formatValue2(ctx, ret, recurseTimes);
    }
    return ret;
  }
  var primitive = formatPrimitive2(ctx, value2);
  if (primitive) {
    return primitive;
  }
  var keys = Object.keys(value2);
  var visibleKeys = arrayToHash2(keys);
  if (ctx.showHidden) {
    keys = Object.getOwnPropertyNames(value2);
  }
  if (isError2(value2) && (keys.indexOf("message") >= 0 || keys.indexOf("description") >= 0)) {
    return formatError2(value2);
  }
  if (keys.length === 0) {
    if (isFunction2(value2)) {
      var name = value2.name ? ": " + value2.name : "";
      return ctx.stylize("[Function" + name + "]", "special");
    }
    if (isRegExp3(value2)) {
      return ctx.stylize(RegExp.prototype.toString.call(value2), "regexp");
    }
    if (isDate3(value2)) {
      return ctx.stylize(Date.prototype.toString.call(value2), "date");
    }
    if (isError2(value2)) {
      return formatError2(value2);
    }
  }
  var base = "", array = false, braces = ["{", "}"];
  if (isArray2(value2)) {
    array = true;
    braces = ["[", "]"];
  }
  if (isFunction2(value2)) {
    var n = value2.name ? ": " + value2.name : "";
    base = " [Function" + n + "]";
  }
  if (isRegExp3(value2)) {
    base = " " + RegExp.prototype.toString.call(value2);
  }
  if (isDate3(value2)) {
    base = " " + Date.prototype.toUTCString.call(value2);
  }
  if (isError2(value2)) {
    base = " " + formatError2(value2);
  }
  if (keys.length === 0 && (!array || value2.length == 0)) {
    return braces[0] + base + braces[1];
  }
  if (recurseTimes < 0) {
    if (isRegExp3(value2)) {
      return ctx.stylize(RegExp.prototype.toString.call(value2), "regexp");
    } else {
      return ctx.stylize("[Object]", "special");
    }
  }
  ctx.seen.push(value2);
  var output;
  if (array) {
    output = formatArray2(ctx, value2, recurseTimes, visibleKeys, keys);
  } else {
    output = keys.map(function(key) {
      return formatProperty2(ctx, value2, recurseTimes, visibleKeys, key, array);
    });
  }
  ctx.seen.pop();
  return reduceToSingleString2(output, base, braces);
}
function formatPrimitive2(ctx, value2) {
  if (isUndefined2(value2))
    return ctx.stylize("undefined", "undefined");
  if (isString2(value2)) {
    var simple = "'" + JSON.stringify(value2).replace(/^"|"$/g, "").replace(/'/g, "\\'").replace(/\\"/g, '"') + "'";
    return ctx.stylize(simple, "string");
  }
  if (isNumber2(value2))
    return ctx.stylize("" + value2, "number");
  if (isBoolean2(value2))
    return ctx.stylize("" + value2, "boolean");
  if (isNull2(value2))
    return ctx.stylize("null", "null");
}
function formatError2(value2) {
  return "[" + Error.prototype.toString.call(value2) + "]";
}
function formatArray2(ctx, value2, recurseTimes, visibleKeys, keys) {
  var output = [];
  for (var i3 = 0, l = value2.length; i3 < l; ++i3) {
    if (hasOwnProperty2(value2, String(i3))) {
      output.push(formatProperty2(ctx, value2, recurseTimes, visibleKeys, String(i3), true));
    } else {
      output.push("");
    }
  }
  keys.forEach(function(key) {
    if (!key.match(/^\d+$/)) {
      output.push(formatProperty2(ctx, value2, recurseTimes, visibleKeys, key, true));
    }
  });
  return output;
}
function formatProperty2(ctx, value2, recurseTimes, visibleKeys, key, array) {
  var name, str, desc;
  desc = Object.getOwnPropertyDescriptor(value2, key) || {
    value: value2[key]
  };
  if (desc.get) {
    if (desc.set) {
      str = ctx.stylize("[Getter/Setter]", "special");
    } else {
      str = ctx.stylize("[Getter]", "special");
    }
  } else {
    if (desc.set) {
      str = ctx.stylize("[Setter]", "special");
    }
  }
  if (!hasOwnProperty2(visibleKeys, key)) {
    name = "[" + key + "]";
  }
  if (!str) {
    if (ctx.seen.indexOf(desc.value) < 0) {
      if (isNull2(recurseTimes)) {
        str = formatValue2(ctx, desc.value, null);
      } else {
        str = formatValue2(ctx, desc.value, recurseTimes - 1);
      }
      if (str.indexOf("\n") > -1) {
        if (array) {
          str = str.split("\n").map(function(line) {
            return "  " + line;
          }).join("\n").substr(2);
        } else {
          str = "\n" + str.split("\n").map(function(line) {
            return "   " + line;
          }).join("\n");
        }
      }
    } else {
      str = ctx.stylize("[Circular]", "special");
    }
  }
  if (isUndefined2(name)) {
    if (array && key.match(/^\d+$/)) {
      return str;
    }
    name = JSON.stringify("" + key);
    if (name.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)) {
      name = name.substr(1, name.length - 2);
      name = ctx.stylize(name, "name");
    } else {
      name = name.replace(/'/g, "\\'").replace(/\\"/g, '"').replace(/(^"|"$)/g, "'");
      name = ctx.stylize(name, "string");
    }
  }
  return name + ": " + str;
}
function reduceToSingleString2(output, base, braces) {
  var length = output.reduce(function(prev, cur) {
    if (cur.indexOf("\n") >= 0)
      ;
    return prev + cur.replace(/\u001b\[\d\d?m/g, "").length + 1;
  }, 0);
  if (length > 60) {
    return braces[0] + (base === "" ? "" : base + "\n ") + " " + output.join(",\n  ") + " " + braces[1];
  }
  return braces[0] + base + " " + output.join(", ") + " " + braces[1];
}
function isArray2(ar) {
  return Array.isArray(ar);
}
function isBoolean2(arg) {
  return typeof arg === "boolean";
}
function isNull2(arg) {
  return arg === null;
}
function isNullOrUndefined2(arg) {
  return arg == null;
}
function isNumber2(arg) {
  return typeof arg === "number";
}
function isString2(arg) {
  return typeof arg === "string";
}
function isSymbol2(arg) {
  return _typeof$12(arg) === "symbol";
}
function isUndefined2(arg) {
  return arg === void 0;
}
function isRegExp3(re) {
  return isObject2(re) && objectToString2(re) === "[object RegExp]";
}
function isObject2(arg) {
  return _typeof$12(arg) === "object" && arg !== null;
}
function isDate3(d) {
  return isObject2(d) && objectToString2(d) === "[object Date]";
}
function isError2(e) {
  return isObject2(e) && (objectToString2(e) === "[object Error]" || e instanceof Error);
}
function isFunction2(arg) {
  return typeof arg === "function";
}
function isPrimitive2(arg) {
  return arg === null || typeof arg === "boolean" || typeof arg === "number" || typeof arg === "string" || _typeof$12(arg) === "symbol" || // ES6 symbol
  typeof arg === "undefined";
}
function isBuffer2(maybeBuf) {
  return Buffer.isBuffer(maybeBuf);
}
function objectToString2(o) {
  return Object.prototype.toString.call(o);
}
function pad2(n) {
  return n < 10 ? "0" + n.toString(10) : n.toString(10);
}
var months2 = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
function timestamp$12() {
  var d = /* @__PURE__ */ new Date();
  var time = [pad2(d.getHours()), pad2(d.getMinutes()), pad2(d.getSeconds())].join(":");
  return [d.getDate(), months2[d.getMonth()], time].join(" ");
}
function log2() {
  console.log("%s - %s", timestamp$12(), format2.apply(null, arguments));
}
function _extend2(origin, add) {
  if (!add || !isObject2(add))
    return origin;
  var keys = Object.keys(add);
  var i3 = keys.length;
  while (i3--) {
    origin[keys[i3]] = add[keys[i3]];
  }
  return origin;
}
function hasOwnProperty2(obj, prop) {
  return Object.prototype.hasOwnProperty.call(obj, prop);
}
var util2 = {
  inherits: inherits$12,
  _extend: _extend2,
  log: log2,
  isBuffer: isBuffer2,
  isPrimitive: isPrimitive2,
  isFunction: isFunction2,
  isError: isError2,
  isDate: isDate3,
  isObject: isObject2,
  isRegExp: isRegExp3,
  isUndefined: isUndefined2,
  isSymbol: isSymbol2,
  isString: isString2,
  isNumber: isNumber2,
  isNullOrUndefined: isNullOrUndefined2,
  isNull: isNull2,
  isBoolean: isBoolean2,
  isArray: isArray2,
  inspect: inspect2,
  deprecate: deprecate2,
  format: format2,
  debuglog: debuglog2
};
function _classCallCheck$22(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _defineProperties$22(target, props) {
  for (var i3 = 0; i3 < props.length; i3++) {
    var descriptor = props[i3];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor)
      descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}
function _createClass$22(Constructor, protoProps, staticProps) {
  if (protoProps)
    _defineProperties$22(Constructor.prototype, protoProps);
  if (staticProps)
    _defineProperties$22(Constructor, staticProps);
  return Constructor;
}
var Buffer$12 = import_buffer2.default.Buffer;
var randomBytes$12 = utils2.randomBytes;
var deprecate$12 = util2.deprecate;
var PROCESS_UNIQUE2 = randomBytes$12(5);
var checkForHexRegExp2 = new RegExp("^[0-9a-fA-F]{24}$");
var hasBufferType2 = false;
try {
  if (Buffer$12 && Buffer$12.from)
    hasBufferType2 = true;
} catch (err) {
  hasBufferType2 = false;
}
var hexTable2 = [];
for (_i = 0; _i < 256; _i++) {
  hexTable2[_i] = (_i <= 15 ? "0" : "") + _i.toString(16);
}
var _i;
var decodeLookup2 = [];
var i2 = 0;
while (i2 < 10) {
  decodeLookup2[48 + i2] = i2++;
}
while (i2 < 16) {
  decodeLookup2[65 - 10 + i2] = decodeLookup2[97 - 10 + i2] = i2++;
}
var _Buffer2 = Buffer$12;
function convertToHex2(bytes) {
  return bytes.toString("hex");
}
function makeObjectIdError2(invalidString, index) {
  var invalidCharacter = invalidString[index];
  return new TypeError('ObjectId string "'.concat(invalidString, '" contains invalid character "').concat(invalidCharacter, '" with character code (').concat(invalidString.charCodeAt(index), "). All character codes for a non-hex string must be less than 256."));
}
var ObjectId3 = function() {
  function ObjectId5(id) {
    _classCallCheck$22(this, ObjectId5);
    if (id instanceof ObjectId5)
      return id;
    if (id == null || typeof id === "number") {
      this.id = ObjectId5.generate(id);
      if (ObjectId5.cacheHexString)
        this.__id = this.toString("hex");
      return;
    }
    var valid = ObjectId5.isValid(id);
    if (!valid && id != null) {
      throw new TypeError("Argument passed in must be a single String of 12 bytes or a string of 24 hex characters");
    } else if (valid && typeof id === "string" && id.length === 24 && hasBufferType2) {
      return new ObjectId5(Buffer$12.from(id, "hex"));
    } else if (valid && typeof id === "string" && id.length === 24) {
      return ObjectId5.createFromHexString(id);
    } else if (id != null && id.length === 12) {
      this.id = id;
    } else if (id != null && id.toHexString) {
      return ObjectId5.createFromHexString(id.toHexString());
    } else {
      throw new TypeError("Argument passed in must be a single String of 12 bytes or a string of 24 hex characters");
    }
    if (ObjectId5.cacheHexString)
      this.__id = this.toString("hex");
  }
  _createClass$22(ObjectId5, [{
    key: "toHexString",
    value: function toHexString() {
      if (ObjectId5.cacheHexString && this.__id)
        return this.__id;
      var hexString = "";
      if (!this.id || !this.id.length) {
        throw new TypeError("invalid ObjectId, ObjectId.id must be either a string or a Buffer, but is [" + JSON.stringify(this.id) + "]");
      }
      if (this.id instanceof _Buffer2) {
        hexString = convertToHex2(this.id);
        if (ObjectId5.cacheHexString)
          this.__id = hexString;
        return hexString;
      }
      for (var _i2 = 0; _i2 < this.id.length; _i2++) {
        var hexChar = hexTable2[this.id.charCodeAt(_i2)];
        if (typeof hexChar !== "string") {
          throw makeObjectIdError2(this.id, _i2);
        }
        hexString += hexChar;
      }
      if (ObjectId5.cacheHexString)
        this.__id = hexString;
      return hexString;
    }
    /**
     * Update the ObjectId index used in generating new ObjectId's on the driver
     *
     * @method
     * @return {number} returns next index value.
     * @ignore
     */
  }, {
    key: "toString",
    /**
     * Converts the id into a 24 byte hex string for printing
     *
     * @param {String} format The Buffer toString format parameter.
     * @return {String} return the 24 byte hex string representation.
     * @ignore
     */
    value: function toString(format3) {
      if (this.id && this.id.copy) {
        return this.id.toString(typeof format3 === "string" ? format3 : "hex");
      }
      return this.toHexString();
    }
    /**
     * Converts to its JSON representation.
     *
     * @return {String} return the 24 byte hex string representation.
     * @ignore
     */
  }, {
    key: "toJSON",
    value: function toJSON() {
      return this.toHexString();
    }
    /**
     * Compares the equality of this ObjectId with `otherID`.
     *
     * @method
     * @param {object} otherId ObjectId instance to compare against.
     * @return {boolean} the result of comparing two ObjectId's
     */
  }, {
    key: "equals",
    value: function equals(otherId) {
      if (otherId instanceof ObjectId5) {
        return this.toString() === otherId.toString();
      }
      if (typeof otherId === "string" && ObjectId5.isValid(otherId) && otherId.length === 12 && this.id instanceof _Buffer2) {
        return otherId === this.id.toString("binary");
      }
      if (typeof otherId === "string" && ObjectId5.isValid(otherId) && otherId.length === 24) {
        return otherId.toLowerCase() === this.toHexString();
      }
      if (typeof otherId === "string" && ObjectId5.isValid(otherId) && otherId.length === 12) {
        return otherId === this.id;
      }
      if (otherId != null && (otherId instanceof ObjectId5 || otherId.toHexString)) {
        return otherId.toHexString() === this.toHexString();
      }
      return false;
    }
    /**
     * Returns the generation date (accurate up to the second) that this ID was generated.
     *
     * @method
     * @return {Date} the generation date
     */
  }, {
    key: "getTimestamp",
    value: function getTimestamp() {
      var timestamp3 = /* @__PURE__ */ new Date();
      var time = this.id.readUInt32BE(0);
      timestamp3.setTime(Math.floor(time) * 1e3);
      return timestamp3;
    }
    /**
     * @ignore
     */
  }, {
    key: "toExtendedJSON",
    /**
     * @ignore
     */
    value: function toExtendedJSON() {
      if (this.toHexString)
        return {
          $oid: this.toHexString()
        };
      return {
        $oid: this.toString("hex")
      };
    }
    /**
     * @ignore
     */
  }], [{
    key: "getInc",
    value: function getInc() {
      return ObjectId5.index = (ObjectId5.index + 1) % 16777215;
    }
    /**
     * Generate a 12 byte id buffer used in ObjectId's
     *
     * @method
     * @param {number} [time] optional parameter allowing to pass in a second based timestamp.
     * @return {Buffer} return the 12 byte id buffer string.
     */
  }, {
    key: "generate",
    value: function generate(time) {
      if ("number" !== typeof time) {
        time = ~~(Date.now() / 1e3);
      }
      var inc = ObjectId5.getInc();
      var buffer$$1 = Buffer$12.alloc(12);
      buffer$$1[3] = time & 255;
      buffer$$1[2] = time >> 8 & 255;
      buffer$$1[1] = time >> 16 & 255;
      buffer$$1[0] = time >> 24 & 255;
      buffer$$1[4] = PROCESS_UNIQUE2[0];
      buffer$$1[5] = PROCESS_UNIQUE2[1];
      buffer$$1[6] = PROCESS_UNIQUE2[2];
      buffer$$1[7] = PROCESS_UNIQUE2[3];
      buffer$$1[8] = PROCESS_UNIQUE2[4];
      buffer$$1[11] = inc & 255;
      buffer$$1[10] = inc >> 8 & 255;
      buffer$$1[9] = inc >> 16 & 255;
      return buffer$$1;
    }
  }, {
    key: "createPk",
    value: function createPk() {
      return new ObjectId5();
    }
    /**
     * Creates an ObjectId from a second based number, with the rest of the ObjectId zeroed out. Used for comparisons or sorting the ObjectId.
     *
     * @method
     * @param {number} time an integer number representing a number of seconds.
     * @return {ObjectId} return the created ObjectId
     */
  }, {
    key: "createFromTime",
    value: function createFromTime(time) {
      var buffer$$1 = Buffer$12.from([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
      buffer$$1[3] = time & 255;
      buffer$$1[2] = time >> 8 & 255;
      buffer$$1[1] = time >> 16 & 255;
      buffer$$1[0] = time >> 24 & 255;
      return new ObjectId5(buffer$$1);
    }
    /**
     * Creates an ObjectId from a hex string representation of an ObjectId.
     *
     * @method
     * @param {string} hexString create a ObjectId from a passed in 24 byte hexstring.
     * @return {ObjectId} return the created ObjectId
     */
  }, {
    key: "createFromHexString",
    value: function createFromHexString(string) {
      if (typeof string === "undefined" || string != null && string.length !== 24) {
        throw new TypeError("Argument passed in must be a single String of 12 bytes or a string of 24 hex characters");
      }
      if (hasBufferType2)
        return new ObjectId5(Buffer$12.from(string, "hex"));
      var array = new _Buffer2(12);
      var n = 0;
      var i3 = 0;
      while (i3 < 24) {
        array[n++] = decodeLookup2[string.charCodeAt(i3++)] << 4 | decodeLookup2[string.charCodeAt(i3++)];
      }
      return new ObjectId5(array);
    }
    /**
     * Checks if a value is a valid bson ObjectId
     *
     * @method
     * @return {boolean} return true if the value is a valid bson ObjectId, return false otherwise.
     */
  }, {
    key: "isValid",
    value: function isValid(id) {
      if (id == null)
        return false;
      if (typeof id === "number") {
        return true;
      }
      if (typeof id === "string") {
        return id.length === 12 || id.length === 24 && checkForHexRegExp2.test(id);
      }
      if (id instanceof ObjectId5) {
        return true;
      }
      if (id instanceof _Buffer2 && id.length === 12) {
        return true;
      }
      if (id.toHexString) {
        return id.id.length === 12 || id.id.length === 24 && checkForHexRegExp2.test(id.id);
      }
      return false;
    }
  }, {
    key: "fromExtendedJSON",
    value: function fromExtendedJSON(doc) {
      return new ObjectId5(doc.$oid);
    }
  }]);
  return ObjectId5;
}();
ObjectId3.get_inc = deprecate$12(function() {
  return ObjectId3.getInc();
}, "Please use the static `ObjectId.getInc()` instead");
ObjectId3.prototype.get_inc = deprecate$12(function() {
  return ObjectId3.getInc();
}, "Please use the static `ObjectId.getInc()` instead");
ObjectId3.prototype.getInc = deprecate$12(function() {
  return ObjectId3.getInc();
}, "Please use the static `ObjectId.getInc()` instead");
ObjectId3.prototype.generate = deprecate$12(function(time) {
  return ObjectId3.generate(time);
}, "Please use the static `ObjectId.generate(time)` instead");
Object.defineProperty(ObjectId3.prototype, "generationTime", {
  enumerable: true,
  get: function get3() {
    return this.id[3] | this.id[2] << 8 | this.id[1] << 16 | this.id[0] << 24;
  },
  set: function set3(value2) {
    this.id[3] = value2 & 255;
    this.id[2] = value2 >> 8 & 255;
    this.id[1] = value2 >> 16 & 255;
    this.id[0] = value2 >> 24 & 255;
  }
});
ObjectId3.prototype[util2.inspect.custom || "inspect"] = ObjectId3.prototype.toString;
ObjectId3.index = ~~(Math.random() * 16777215);
Object.defineProperty(ObjectId3.prototype, "_bsontype", {
  value: "ObjectID"
});
var objectid2 = ObjectId3;
function _classCallCheck$32(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _defineProperties$32(target, props) {
  for (var i3 = 0; i3 < props.length; i3++) {
    var descriptor = props[i3];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor)
      descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}
function _createClass$32(Constructor, protoProps, staticProps) {
  if (protoProps)
    _defineProperties$32(Constructor.prototype, protoProps);
  if (staticProps)
    _defineProperties$32(Constructor, staticProps);
  return Constructor;
}
function alphabetize2(str) {
  return str.split("").sort().join("");
}
var BSONRegExp3 = function() {
  function BSONRegExp5(pattern, options) {
    _classCallCheck$32(this, BSONRegExp5);
    this.pattern = pattern || "";
    this.options = options ? alphabetize2(options) : "";
    for (var i3 = 0; i3 < this.options.length; i3++) {
      if (!(this.options[i3] === "i" || this.options[i3] === "m" || this.options[i3] === "x" || this.options[i3] === "l" || this.options[i3] === "s" || this.options[i3] === "u")) {
        throw new Error("The regular expression option [".concat(this.options[i3], "] is not supported"));
      }
    }
  }
  _createClass$32(BSONRegExp5, [{
    key: "toExtendedJSON",
    value: function toExtendedJSON() {
      return {
        $regularExpression: {
          pattern: this.pattern,
          options: this.options
        }
      };
    }
    /**
     * @ignore
     */
  }], [{
    key: "fromExtendedJSON",
    value: function fromExtendedJSON(doc) {
      return new BSONRegExp5(doc.$regularExpression.pattern, doc.$regularExpression.options.split("").sort().join(""));
    }
  }]);
  return BSONRegExp5;
}();
Object.defineProperty(BSONRegExp3.prototype, "_bsontype", {
  value: "BSONRegExp"
});
var regexp2 = BSONRegExp3;
function _classCallCheck$42(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _defineProperties$42(target, props) {
  for (var i3 = 0; i3 < props.length; i3++) {
    var descriptor = props[i3];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor)
      descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}
function _createClass$42(Constructor, protoProps, staticProps) {
  if (protoProps)
    _defineProperties$42(Constructor.prototype, protoProps);
  if (staticProps)
    _defineProperties$42(Constructor, staticProps);
  return Constructor;
}
var BSONSymbol2 = function() {
  function BSONSymbol3(value2) {
    _classCallCheck$42(this, BSONSymbol3);
    this.value = value2;
  }
  _createClass$42(BSONSymbol3, [{
    key: "valueOf",
    value: function valueOf() {
      return this.value;
    }
    /**
     * @ignore
     */
  }, {
    key: "toString",
    value: function toString() {
      return this.value;
    }
    /**
     * @ignore
     */
  }, {
    key: "inspect",
    value: function inspect3() {
      return this.value;
    }
    /**
     * @ignore
     */
  }, {
    key: "toJSON",
    value: function toJSON() {
      return this.value;
    }
    /**
     * @ignore
     */
  }, {
    key: "toExtendedJSON",
    value: function toExtendedJSON() {
      return {
        $symbol: this.value
      };
    }
    /**
     * @ignore
     */
  }], [{
    key: "fromExtendedJSON",
    value: function fromExtendedJSON(doc) {
      return new BSONSymbol3(doc.$symbol);
    }
  }]);
  return BSONSymbol3;
}();
Object.defineProperty(BSONSymbol2.prototype, "_bsontype", {
  value: "Symbol"
});
var symbol2 = BSONSymbol2;
function _classCallCheck$52(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _defineProperties$52(target, props) {
  for (var i3 = 0; i3 < props.length; i3++) {
    var descriptor = props[i3];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor)
      descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}
function _createClass$52(Constructor, protoProps, staticProps) {
  if (protoProps)
    _defineProperties$52(Constructor.prototype, protoProps);
  if (staticProps)
    _defineProperties$52(Constructor, staticProps);
  return Constructor;
}
var Int323 = function() {
  function Int325(value2) {
    _classCallCheck$52(this, Int325);
    this.value = value2;
  }
  _createClass$52(Int325, [{
    key: "valueOf",
    value: function valueOf() {
      return this.value;
    }
    /**
     * @ignore
     */
  }, {
    key: "toJSON",
    value: function toJSON() {
      return this.value;
    }
    /**
     * @ignore
     */
  }, {
    key: "toExtendedJSON",
    value: function toExtendedJSON(options) {
      if (options && options.relaxed)
        return this.value;
      return {
        $numberInt: this.value.toString()
      };
    }
    /**
     * @ignore
     */
  }], [{
    key: "fromExtendedJSON",
    value: function fromExtendedJSON(doc, options) {
      return options && options.relaxed ? parseInt(doc.$numberInt, 10) : new Int325(doc.$numberInt);
    }
  }]);
  return Int325;
}();
Object.defineProperty(Int323.prototype, "_bsontype", {
  value: "Int32"
});
var int_322 = Int323;
function _classCallCheck$62(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _defineProperties$62(target, props) {
  for (var i3 = 0; i3 < props.length; i3++) {
    var descriptor = props[i3];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor)
      descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}
function _createClass$62(Constructor, protoProps, staticProps) {
  if (protoProps)
    _defineProperties$62(Constructor.prototype, protoProps);
  if (staticProps)
    _defineProperties$62(Constructor, staticProps);
  return Constructor;
}
var Code3 = function() {
  function Code5(code3, scope) {
    _classCallCheck$62(this, Code5);
    this.code = code3;
    this.scope = scope;
  }
  _createClass$62(Code5, [{
    key: "toJSON",
    value: function toJSON() {
      return {
        scope: this.scope,
        code: this.code
      };
    }
    /**
     * @ignore
     */
  }, {
    key: "toExtendedJSON",
    value: function toExtendedJSON() {
      if (this.scope) {
        return {
          $code: this.code,
          $scope: this.scope
        };
      }
      return {
        $code: this.code
      };
    }
    /**
     * @ignore
     */
  }], [{
    key: "fromExtendedJSON",
    value: function fromExtendedJSON(doc) {
      return new Code5(doc.$code, doc.$scope);
    }
  }]);
  return Code5;
}();
Object.defineProperty(Code3.prototype, "_bsontype", {
  value: "Code"
});
var code2 = Code3;
var Buffer$22 = import_buffer2.default.Buffer;
var PARSE_STRING_REGEXP2 = /^(\+|-)?(\d+|(\d*\.\d*))?(E|e)?([-+])?(\d+)?$/;
var PARSE_INF_REGEXP2 = /^(\+|-)?(Infinity|inf)$/i;
var PARSE_NAN_REGEXP2 = /^(\+|-)?NaN$/i;
var EXPONENT_MAX2 = 6111;
var EXPONENT_MIN2 = -6176;
var EXPONENT_BIAS2 = 6176;
var MAX_DIGITS2 = 34;
var NAN_BUFFER2 = [124, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0].reverse();
var INF_NEGATIVE_BUFFER2 = [248, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0].reverse();
var INF_POSITIVE_BUFFER2 = [120, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0].reverse();
var EXPONENT_REGEX2 = /^([-+])?(\d+)?$/;
function isDigit2(value2) {
  return !isNaN(parseInt(value2, 10));
}
function divideu1282(value2) {
  var DIVISOR = long_12.fromNumber(1e3 * 1e3 * 1e3);
  var _rem = long_12.fromNumber(0);
  if (!value2.parts[0] && !value2.parts[1] && !value2.parts[2] && !value2.parts[3]) {
    return {
      quotient: value2,
      rem: _rem
    };
  }
  for (var i3 = 0; i3 <= 3; i3++) {
    _rem = _rem.shiftLeft(32);
    _rem = _rem.add(new long_12(value2.parts[i3], 0));
    value2.parts[i3] = _rem.div(DIVISOR).low;
    _rem = _rem.modulo(DIVISOR);
  }
  return {
    quotient: value2,
    rem: _rem
  };
}
function multiply64x22(left, right) {
  if (!left && !right) {
    return {
      high: long_12.fromNumber(0),
      low: long_12.fromNumber(0)
    };
  }
  var leftHigh = left.shiftRightUnsigned(32);
  var leftLow = new long_12(left.getLowBits(), 0);
  var rightHigh = right.shiftRightUnsigned(32);
  var rightLow = new long_12(right.getLowBits(), 0);
  var productHigh = leftHigh.multiply(rightHigh);
  var productMid = leftHigh.multiply(rightLow);
  var productMid2 = leftLow.multiply(rightHigh);
  var productLow = leftLow.multiply(rightLow);
  productHigh = productHigh.add(productMid.shiftRightUnsigned(32));
  productMid = new long_12(productMid.getLowBits(), 0).add(productMid2).add(productLow.shiftRightUnsigned(32));
  productHigh = productHigh.add(productMid.shiftRightUnsigned(32));
  productLow = productMid.shiftLeft(32).add(new long_12(productLow.getLowBits(), 0));
  return {
    high: productHigh,
    low: productLow
  };
}
function lessThan2(left, right) {
  var uhleft = left.high >>> 0;
  var uhright = right.high >>> 0;
  if (uhleft < uhright) {
    return true;
  } else if (uhleft === uhright) {
    var ulleft = left.low >>> 0;
    var ulright = right.low >>> 0;
    if (ulleft < ulright)
      return true;
  }
  return false;
}
function invalidErr2(string, message) {
  throw new TypeError('"'.concat(string, '" is not a valid Decimal128 string - ').concat(message));
}
function Decimal1283(bytes) {
  this.bytes = bytes;
}
Decimal1283.fromString = function(string) {
  var isNegative = false;
  var sawRadix = false;
  var foundNonZero = false;
  var significantDigits = 0;
  var nDigitsRead = 0;
  var nDigits = 0;
  var radixPosition = 0;
  var firstNonZero = 0;
  var digits = [0];
  var nDigitsStored = 0;
  var digitsInsert = 0;
  var firstDigit = 0;
  var lastDigit = 0;
  var exponent = 0;
  var i3 = 0;
  var significandHigh = [0, 0];
  var significandLow = [0, 0];
  var biasedExponent = 0;
  var index = 0;
  if (string.length >= 7e3) {
    throw new TypeError("" + string + " not a valid Decimal128 string");
  }
  var stringMatch = string.match(PARSE_STRING_REGEXP2);
  var infMatch = string.match(PARSE_INF_REGEXP2);
  var nanMatch = string.match(PARSE_NAN_REGEXP2);
  if (!stringMatch && !infMatch && !nanMatch || string.length === 0) {
    throw new TypeError("" + string + " not a valid Decimal128 string");
  }
  if (stringMatch) {
    var unsignedNumber = stringMatch[2];
    var e = stringMatch[4];
    var expSign = stringMatch[5];
    var expNumber = stringMatch[6];
    if (e && expNumber === void 0)
      invalidErr2(string, "missing exponent power");
    if (e && unsignedNumber === void 0)
      invalidErr2(string, "missing exponent base");
    if (e === void 0 && (expSign || expNumber)) {
      invalidErr2(string, "missing e before exponent");
    }
  }
  if (string[index] === "+" || string[index] === "-") {
    isNegative = string[index++] === "-";
  }
  if (!isDigit2(string[index]) && string[index] !== ".") {
    if (string[index] === "i" || string[index] === "I") {
      return new Decimal1283(Buffer$22.from(isNegative ? INF_NEGATIVE_BUFFER2 : INF_POSITIVE_BUFFER2));
    } else if (string[index] === "N") {
      return new Decimal1283(Buffer$22.from(NAN_BUFFER2));
    }
  }
  while (isDigit2(string[index]) || string[index] === ".") {
    if (string[index] === ".") {
      if (sawRadix)
        invalidErr2(string, "contains multiple periods");
      sawRadix = true;
      index = index + 1;
      continue;
    }
    if (nDigitsStored < 34) {
      if (string[index] !== "0" || foundNonZero) {
        if (!foundNonZero) {
          firstNonZero = nDigitsRead;
        }
        foundNonZero = true;
        digits[digitsInsert++] = parseInt(string[index], 10);
        nDigitsStored = nDigitsStored + 1;
      }
    }
    if (foundNonZero)
      nDigits = nDigits + 1;
    if (sawRadix)
      radixPosition = radixPosition + 1;
    nDigitsRead = nDigitsRead + 1;
    index = index + 1;
  }
  if (sawRadix && !nDigitsRead)
    throw new TypeError("" + string + " not a valid Decimal128 string");
  if (string[index] === "e" || string[index] === "E") {
    var match = string.substr(++index).match(EXPONENT_REGEX2);
    if (!match || !match[2])
      return new Decimal1283(Buffer$22.from(NAN_BUFFER2));
    exponent = parseInt(match[0], 10);
    index = index + match[0].length;
  }
  if (string[index])
    return new Decimal1283(Buffer$22.from(NAN_BUFFER2));
  firstDigit = 0;
  if (!nDigitsStored) {
    firstDigit = 0;
    lastDigit = 0;
    digits[0] = 0;
    nDigits = 1;
    nDigitsStored = 1;
    significantDigits = 0;
  } else {
    lastDigit = nDigitsStored - 1;
    significantDigits = nDigits;
    if (significantDigits !== 1) {
      while (string[firstNonZero + significantDigits - 1] === "0") {
        significantDigits = significantDigits - 1;
      }
    }
  }
  if (exponent <= radixPosition && radixPosition - exponent > 1 << 14) {
    exponent = EXPONENT_MIN2;
  } else {
    exponent = exponent - radixPosition;
  }
  while (exponent > EXPONENT_MAX2) {
    lastDigit = lastDigit + 1;
    if (lastDigit - firstDigit > MAX_DIGITS2) {
      var digitsString = digits.join("");
      if (digitsString.match(/^0+$/)) {
        exponent = EXPONENT_MAX2;
        break;
      }
      invalidErr2(string, "overflow");
    }
    exponent = exponent - 1;
  }
  while (exponent < EXPONENT_MIN2 || nDigitsStored < nDigits) {
    if (lastDigit === 0 && significantDigits < nDigitsStored) {
      exponent = EXPONENT_MIN2;
      significantDigits = 0;
      break;
    }
    if (nDigitsStored < nDigits) {
      nDigits = nDigits - 1;
    } else {
      lastDigit = lastDigit - 1;
    }
    if (exponent < EXPONENT_MAX2) {
      exponent = exponent + 1;
    } else {
      var _digitsString = digits.join("");
      if (_digitsString.match(/^0+$/)) {
        exponent = EXPONENT_MAX2;
        break;
      }
      invalidErr2(string, "overflow");
    }
  }
  if (lastDigit - firstDigit + 1 < significantDigits) {
    var endOfString = nDigitsRead;
    if (sawRadix) {
      firstNonZero = firstNonZero + 1;
      endOfString = endOfString + 1;
    }
    if (isNegative) {
      firstNonZero = firstNonZero + 1;
      endOfString = endOfString + 1;
    }
    var roundDigit = parseInt(string[firstNonZero + lastDigit + 1], 10);
    var roundBit = 0;
    if (roundDigit >= 5) {
      roundBit = 1;
      if (roundDigit === 5) {
        roundBit = digits[lastDigit] % 2 === 1;
        for (i3 = firstNonZero + lastDigit + 2; i3 < endOfString; i3++) {
          if (parseInt(string[i3], 10)) {
            roundBit = 1;
            break;
          }
        }
      }
    }
    if (roundBit) {
      var dIdx = lastDigit;
      for (; dIdx >= 0; dIdx--) {
        if (++digits[dIdx] > 9) {
          digits[dIdx] = 0;
          if (dIdx === 0) {
            if (exponent < EXPONENT_MAX2) {
              exponent = exponent + 1;
              digits[dIdx] = 1;
            } else {
              return new Decimal1283(Buffer$22.from(isNegative ? INF_NEGATIVE_BUFFER2 : INF_POSITIVE_BUFFER2));
            }
          }
        }
      }
    }
  }
  significandHigh = long_12.fromNumber(0);
  significandLow = long_12.fromNumber(0);
  if (significantDigits === 0) {
    significandHigh = long_12.fromNumber(0);
    significandLow = long_12.fromNumber(0);
  } else if (lastDigit - firstDigit < 17) {
    var _dIdx = firstDigit;
    significandLow = long_12.fromNumber(digits[_dIdx++]);
    significandHigh = new long_12(0, 0);
    for (; _dIdx <= lastDigit; _dIdx++) {
      significandLow = significandLow.multiply(long_12.fromNumber(10));
      significandLow = significandLow.add(long_12.fromNumber(digits[_dIdx]));
    }
  } else {
    var _dIdx2 = firstDigit;
    significandHigh = long_12.fromNumber(digits[_dIdx2++]);
    for (; _dIdx2 <= lastDigit - 17; _dIdx2++) {
      significandHigh = significandHigh.multiply(long_12.fromNumber(10));
      significandHigh = significandHigh.add(long_12.fromNumber(digits[_dIdx2]));
    }
    significandLow = long_12.fromNumber(digits[_dIdx2++]);
    for (; _dIdx2 <= lastDigit; _dIdx2++) {
      significandLow = significandLow.multiply(long_12.fromNumber(10));
      significandLow = significandLow.add(long_12.fromNumber(digits[_dIdx2]));
    }
  }
  var significand = multiply64x22(significandHigh, long_12.fromString("100000000000000000"));
  significand.low = significand.low.add(significandLow);
  if (lessThan2(significand.low, significandLow)) {
    significand.high = significand.high.add(long_12.fromNumber(1));
  }
  biasedExponent = exponent + EXPONENT_BIAS2;
  var dec = {
    low: long_12.fromNumber(0),
    high: long_12.fromNumber(0)
  };
  if (significand.high.shiftRightUnsigned(49).and(long_12.fromNumber(1)).equals(long_12.fromNumber(1))) {
    dec.high = dec.high.or(long_12.fromNumber(3).shiftLeft(61));
    dec.high = dec.high.or(long_12.fromNumber(biasedExponent).and(long_12.fromNumber(16383).shiftLeft(47)));
    dec.high = dec.high.or(significand.high.and(long_12.fromNumber(140737488355327)));
  } else {
    dec.high = dec.high.or(long_12.fromNumber(biasedExponent & 16383).shiftLeft(49));
    dec.high = dec.high.or(significand.high.and(long_12.fromNumber(562949953421311)));
  }
  dec.low = significand.low;
  if (isNegative) {
    dec.high = dec.high.or(long_12.fromString("9223372036854775808"));
  }
  var buffer$$1 = Buffer$22.alloc(16);
  index = 0;
  buffer$$1[index++] = dec.low.low & 255;
  buffer$$1[index++] = dec.low.low >> 8 & 255;
  buffer$$1[index++] = dec.low.low >> 16 & 255;
  buffer$$1[index++] = dec.low.low >> 24 & 255;
  buffer$$1[index++] = dec.low.high & 255;
  buffer$$1[index++] = dec.low.high >> 8 & 255;
  buffer$$1[index++] = dec.low.high >> 16 & 255;
  buffer$$1[index++] = dec.low.high >> 24 & 255;
  buffer$$1[index++] = dec.high.low & 255;
  buffer$$1[index++] = dec.high.low >> 8 & 255;
  buffer$$1[index++] = dec.high.low >> 16 & 255;
  buffer$$1[index++] = dec.high.low >> 24 & 255;
  buffer$$1[index++] = dec.high.high & 255;
  buffer$$1[index++] = dec.high.high >> 8 & 255;
  buffer$$1[index++] = dec.high.high >> 16 & 255;
  buffer$$1[index++] = dec.high.high >> 24 & 255;
  return new Decimal1283(buffer$$1);
};
var COMBINATION_MASK2 = 31;
var EXPONENT_MASK2 = 16383;
var COMBINATION_INFINITY2 = 30;
var COMBINATION_NAN2 = 31;
Decimal1283.prototype.toString = function() {
  var high;
  var midh;
  var midl;
  var low;
  var combination;
  var biased_exponent;
  var significand_digits = 0;
  var significand = new Array(36);
  for (var i3 = 0; i3 < significand.length; i3++) {
    significand[i3] = 0;
  }
  var index = 0;
  var exponent;
  var scientific_exponent;
  var is_zero = false;
  var significand_msb;
  var significand128 = {
    parts: new Array(4)
  };
  var j, k;
  var string = [];
  index = 0;
  var buffer$$1 = this.bytes;
  low = buffer$$1[index++] | buffer$$1[index++] << 8 | buffer$$1[index++] << 16 | buffer$$1[index++] << 24;
  midl = buffer$$1[index++] | buffer$$1[index++] << 8 | buffer$$1[index++] << 16 | buffer$$1[index++] << 24;
  midh = buffer$$1[index++] | buffer$$1[index++] << 8 | buffer$$1[index++] << 16 | buffer$$1[index++] << 24;
  high = buffer$$1[index++] | buffer$$1[index++] << 8 | buffer$$1[index++] << 16 | buffer$$1[index++] << 24;
  index = 0;
  var dec = {
    low: new long_12(low, midl),
    high: new long_12(midh, high)
  };
  if (dec.high.lessThan(long_12.ZERO)) {
    string.push("-");
  }
  combination = high >> 26 & COMBINATION_MASK2;
  if (combination >> 3 === 3) {
    if (combination === COMBINATION_INFINITY2) {
      return string.join("") + "Infinity";
    } else if (combination === COMBINATION_NAN2) {
      return "NaN";
    } else {
      biased_exponent = high >> 15 & EXPONENT_MASK2;
      significand_msb = 8 + (high >> 14 & 1);
    }
  } else {
    significand_msb = high >> 14 & 7;
    biased_exponent = high >> 17 & EXPONENT_MASK2;
  }
  exponent = biased_exponent - EXPONENT_BIAS2;
  significand128.parts[0] = (high & 16383) + ((significand_msb & 15) << 14);
  significand128.parts[1] = midh;
  significand128.parts[2] = midl;
  significand128.parts[3] = low;
  if (significand128.parts[0] === 0 && significand128.parts[1] === 0 && significand128.parts[2] === 0 && significand128.parts[3] === 0) {
    is_zero = true;
  } else {
    for (k = 3; k >= 0; k--) {
      var least_digits = 0;
      var result = divideu1282(significand128);
      significand128 = result.quotient;
      least_digits = result.rem.low;
      if (!least_digits)
        continue;
      for (j = 8; j >= 0; j--) {
        significand[k * 9 + j] = least_digits % 10;
        least_digits = Math.floor(least_digits / 10);
      }
    }
  }
  if (is_zero) {
    significand_digits = 1;
    significand[index] = 0;
  } else {
    significand_digits = 36;
    while (!significand[index]) {
      significand_digits = significand_digits - 1;
      index = index + 1;
    }
  }
  scientific_exponent = significand_digits - 1 + exponent;
  if (scientific_exponent >= 34 || scientific_exponent <= -7 || exponent > 0) {
    if (significand_digits > 34) {
      string.push(0);
      if (exponent > 0)
        string.push("E+" + exponent);
      else if (exponent < 0)
        string.push("E" + exponent);
      return string.join("");
    }
    string.push(significand[index++]);
    significand_digits = significand_digits - 1;
    if (significand_digits) {
      string.push(".");
    }
    for (var _i = 0; _i < significand_digits; _i++) {
      string.push(significand[index++]);
    }
    string.push("E");
    if (scientific_exponent > 0) {
      string.push("+" + scientific_exponent);
    } else {
      string.push(scientific_exponent);
    }
  } else {
    if (exponent >= 0) {
      for (var _i2 = 0; _i2 < significand_digits; _i2++) {
        string.push(significand[index++]);
      }
    } else {
      var radix_position = significand_digits + exponent;
      if (radix_position > 0) {
        for (var _i3 = 0; _i3 < radix_position; _i3++) {
          string.push(significand[index++]);
        }
      } else {
        string.push("0");
      }
      string.push(".");
      while (radix_position++ < 0) {
        string.push("0");
      }
      for (var _i4 = 0; _i4 < significand_digits - Math.max(radix_position - 1, 0); _i4++) {
        string.push(significand[index++]);
      }
    }
  }
  return string.join("");
};
Decimal1283.prototype.toJSON = function() {
  return {
    $numberDecimal: this.toString()
  };
};
Decimal1283.prototype.toExtendedJSON = function() {
  return {
    $numberDecimal: this.toString()
  };
};
Decimal1283.fromExtendedJSON = function(doc) {
  return Decimal1283.fromString(doc.$numberDecimal);
};
Object.defineProperty(Decimal1283.prototype, "_bsontype", {
  value: "Decimal128"
});
var decimal1282 = Decimal1283;
function _classCallCheck$72(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _defineProperties$72(target, props) {
  for (var i3 = 0; i3 < props.length; i3++) {
    var descriptor = props[i3];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor)
      descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}
function _createClass$72(Constructor, protoProps, staticProps) {
  if (protoProps)
    _defineProperties$72(Constructor.prototype, protoProps);
  if (staticProps)
    _defineProperties$72(Constructor, staticProps);
  return Constructor;
}
var MinKey3 = function() {
  function MinKey5() {
    _classCallCheck$72(this, MinKey5);
  }
  _createClass$72(MinKey5, [{
    key: "toExtendedJSON",
    value: function toExtendedJSON() {
      return {
        $minKey: 1
      };
    }
    /**
     * @ignore
     */
  }], [{
    key: "fromExtendedJSON",
    value: function fromExtendedJSON() {
      return new MinKey5();
    }
  }]);
  return MinKey5;
}();
Object.defineProperty(MinKey3.prototype, "_bsontype", {
  value: "MinKey"
});
var min_key2 = MinKey3;
function _classCallCheck$82(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _defineProperties$82(target, props) {
  for (var i3 = 0; i3 < props.length; i3++) {
    var descriptor = props[i3];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor)
      descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}
function _createClass$82(Constructor, protoProps, staticProps) {
  if (protoProps)
    _defineProperties$82(Constructor.prototype, protoProps);
  if (staticProps)
    _defineProperties$82(Constructor, staticProps);
  return Constructor;
}
var MaxKey3 = function() {
  function MaxKey5() {
    _classCallCheck$82(this, MaxKey5);
  }
  _createClass$82(MaxKey5, [{
    key: "toExtendedJSON",
    value: function toExtendedJSON() {
      return {
        $maxKey: 1
      };
    }
    /**
     * @ignore
     */
  }], [{
    key: "fromExtendedJSON",
    value: function fromExtendedJSON() {
      return new MaxKey5();
    }
  }]);
  return MaxKey5;
}();
Object.defineProperty(MaxKey3.prototype, "_bsontype", {
  value: "MaxKey"
});
var max_key2 = MaxKey3;
function _classCallCheck$92(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _defineProperties$92(target, props) {
  for (var i3 = 0; i3 < props.length; i3++) {
    var descriptor = props[i3];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor)
      descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}
function _createClass$92(Constructor, protoProps, staticProps) {
  if (protoProps)
    _defineProperties$92(Constructor.prototype, protoProps);
  if (staticProps)
    _defineProperties$92(Constructor, staticProps);
  return Constructor;
}
var DBRef3 = function() {
  function DBRef5(collection, oid, db, fields) {
    _classCallCheck$92(this, DBRef5);
    var parts = collection.split(".");
    if (parts.length === 2) {
      db = parts.shift();
      collection = parts.shift();
    }
    this.collection = collection;
    this.oid = oid;
    this.db = db;
    this.fields = fields || {};
  }
  _createClass$92(DBRef5, [{
    key: "toJSON",
    value: function toJSON() {
      var o = Object.assign({
        $ref: this.collection,
        $id: this.oid
      }, this.fields);
      if (this.db != null)
        o.$db = this.db;
      return o;
    }
    /**
     * @ignore
     */
  }, {
    key: "toExtendedJSON",
    value: function toExtendedJSON() {
      var o = {
        $ref: this.collection,
        $id: this.oid
      };
      if (this.db)
        o.$db = this.db;
      o = Object.assign(o, this.fields);
      return o;
    }
    /**
     * @ignore
     */
  }], [{
    key: "fromExtendedJSON",
    value: function fromExtendedJSON(doc) {
      var copy = Object.assign({}, doc);
      ["$ref", "$id", "$db"].forEach(function(k) {
        return delete copy[k];
      });
      return new DBRef5(doc.$ref, doc.$id, doc.$db, copy);
    }
  }]);
  return DBRef5;
}();
Object.defineProperty(DBRef3.prototype, "_bsontype", {
  value: "DBRef"
});
Object.defineProperty(DBRef3.prototype, "namespace", {
  get: function get4() {
    return this.collection;
  },
  set: function set4(val) {
    this.collection = val;
  },
  configurable: false
});
var db_ref2 = DBRef3;
function _classCallCheck$a2(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _defineProperties$a2(target, props) {
  for (var i3 = 0; i3 < props.length; i3++) {
    var descriptor = props[i3];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor)
      descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}
function _createClass$a2(Constructor, protoProps, staticProps) {
  if (protoProps)
    _defineProperties$a2(Constructor.prototype, protoProps);
  if (staticProps)
    _defineProperties$a2(Constructor, staticProps);
  return Constructor;
}
var Buffer$32 = import_buffer2.default.Buffer;
var Binary3 = function() {
  function Binary5(buffer$$1, subType) {
    _classCallCheck$a2(this, Binary5);
    if (buffer$$1 != null && !(typeof buffer$$1 === "string") && !Buffer$32.isBuffer(buffer$$1) && !(buffer$$1 instanceof Uint8Array) && !Array.isArray(buffer$$1)) {
      throw new TypeError("only String, Buffer, Uint8Array or Array accepted");
    }
    this.sub_type = subType == null ? BSON_BINARY_SUBTYPE_DEFAULT2 : subType;
    this.position = 0;
    if (buffer$$1 != null && !(buffer$$1 instanceof Number)) {
      if (typeof buffer$$1 === "string") {
        if (typeof Buffer$32 !== "undefined") {
          this.buffer = Buffer$32.from(buffer$$1);
        } else if (typeof Uint8Array !== "undefined" || Array.isArray(buffer$$1)) {
          this.buffer = writeStringToArray2(buffer$$1);
        } else {
          throw new TypeError("only String, Buffer, Uint8Array or Array accepted");
        }
      } else {
        this.buffer = buffer$$1;
      }
      this.position = buffer$$1.length;
    } else {
      if (typeof Buffer$32 !== "undefined") {
        this.buffer = Buffer$32.alloc(Binary5.BUFFER_SIZE);
      } else if (typeof Uint8Array !== "undefined") {
        this.buffer = new Uint8Array(new ArrayBuffer(Binary5.BUFFER_SIZE));
      } else {
        this.buffer = new Array(Binary5.BUFFER_SIZE);
      }
    }
  }
  _createClass$a2(Binary5, [{
    key: "put",
    value: function put(byte_value) {
      if (byte_value["length"] != null && typeof byte_value !== "number" && byte_value.length !== 1)
        throw new TypeError("only accepts single character String, Uint8Array or Array");
      if (typeof byte_value !== "number" && byte_value < 0 || byte_value > 255)
        throw new TypeError("only accepts number in a valid unsigned byte range 0-255");
      var decoded_byte = null;
      if (typeof byte_value === "string") {
        decoded_byte = byte_value.charCodeAt(0);
      } else if (byte_value["length"] != null) {
        decoded_byte = byte_value[0];
      } else {
        decoded_byte = byte_value;
      }
      if (this.buffer.length > this.position) {
        this.buffer[this.position++] = decoded_byte;
      } else {
        if (typeof Buffer$32 !== "undefined" && Buffer$32.isBuffer(this.buffer)) {
          var buffer$$1 = Buffer$32.alloc(Binary5.BUFFER_SIZE + this.buffer.length);
          this.buffer.copy(buffer$$1, 0, 0, this.buffer.length);
          this.buffer = buffer$$1;
          this.buffer[this.position++] = decoded_byte;
        } else {
          var _buffer = null;
          if (isUint8Array2(this.buffer)) {
            _buffer = new Uint8Array(new ArrayBuffer(Binary5.BUFFER_SIZE + this.buffer.length));
          } else {
            _buffer = new Array(Binary5.BUFFER_SIZE + this.buffer.length);
          }
          for (var i3 = 0; i3 < this.buffer.length; i3++) {
            _buffer[i3] = this.buffer[i3];
          }
          this.buffer = _buffer;
          this.buffer[this.position++] = decoded_byte;
        }
      }
    }
    /**
     * Writes a buffer or string to the binary.
     *
     * @method
     * @param {(Buffer|string)} string a string or buffer to be written to the Binary BSON object.
     * @param {number} offset specify the binary of where to write the content.
     * @return {null}
     */
  }, {
    key: "write",
    value: function write(string, offset) {
      offset = typeof offset === "number" ? offset : this.position;
      if (this.buffer.length < offset + string.length) {
        var buffer$$1 = null;
        if (typeof Buffer$32 !== "undefined" && Buffer$32.isBuffer(this.buffer)) {
          buffer$$1 = Buffer$32.alloc(this.buffer.length + string.length);
          this.buffer.copy(buffer$$1, 0, 0, this.buffer.length);
        } else if (isUint8Array2(this.buffer)) {
          buffer$$1 = new Uint8Array(new ArrayBuffer(this.buffer.length + string.length));
          for (var i3 = 0; i3 < this.position; i3++) {
            buffer$$1[i3] = this.buffer[i3];
          }
        }
        this.buffer = buffer$$1;
      }
      if (typeof Buffer$32 !== "undefined" && Buffer$32.isBuffer(string) && Buffer$32.isBuffer(this.buffer)) {
        string.copy(this.buffer, offset, 0, string.length);
        this.position = offset + string.length > this.position ? offset + string.length : this.position;
      } else if (typeof Buffer$32 !== "undefined" && typeof string === "string" && Buffer$32.isBuffer(this.buffer)) {
        this.buffer.write(string, offset, "binary");
        this.position = offset + string.length > this.position ? offset + string.length : this.position;
      } else if (isUint8Array2(string) || Array.isArray(string) && typeof string !== "string") {
        for (var _i = 0; _i < string.length; _i++) {
          this.buffer[offset++] = string[_i];
        }
        this.position = offset > this.position ? offset : this.position;
      } else if (typeof string === "string") {
        for (var _i2 = 0; _i2 < string.length; _i2++) {
          this.buffer[offset++] = string.charCodeAt(_i2);
        }
        this.position = offset > this.position ? offset : this.position;
      }
    }
    /**
     * Reads **length** bytes starting at **position**.
     *
     * @method
     * @param {number} position read from the given position in the Binary.
     * @param {number} length the number of bytes to read.
     * @return {Buffer}
     */
  }, {
    key: "read",
    value: function read(position, length) {
      length = length && length > 0 ? length : this.position;
      if (this.buffer["slice"]) {
        return this.buffer.slice(position, position + length);
      }
      var buffer$$1 = typeof Uint8Array !== "undefined" ? new Uint8Array(new ArrayBuffer(length)) : new Array(length);
      for (var i3 = 0; i3 < length; i3++) {
        buffer$$1[i3] = this.buffer[position++];
      }
      return buffer$$1;
    }
    /**
     * Returns the value of this binary as a string.
     *
     * @method
     * @return {string}
     */
  }, {
    key: "value",
    value: function value2(asRaw) {
      asRaw = asRaw == null ? false : asRaw;
      if (asRaw && typeof Buffer$32 !== "undefined" && Buffer$32.isBuffer(this.buffer) && this.buffer.length === this.position)
        return this.buffer;
      if (typeof Buffer$32 !== "undefined" && Buffer$32.isBuffer(this.buffer)) {
        return asRaw ? this.buffer.slice(0, this.position) : this.buffer.toString("binary", 0, this.position);
      } else {
        if (asRaw) {
          if (this.buffer["slice"] != null) {
            return this.buffer.slice(0, this.position);
          } else {
            var newBuffer = isUint8Array2(this.buffer) ? new Uint8Array(new ArrayBuffer(this.position)) : new Array(this.position);
            for (var i3 = 0; i3 < this.position; i3++) {
              newBuffer[i3] = this.buffer[i3];
            }
            return newBuffer;
          }
        } else {
          return convertArraytoUtf8BinaryString2(this.buffer, 0, this.position);
        }
      }
    }
    /**
     * Length.
     *
     * @method
     * @return {number} the length of the binary.
     */
  }, {
    key: "length",
    value: function length() {
      return this.position;
    }
    /**
     * @ignore
     */
  }, {
    key: "toJSON",
    value: function toJSON() {
      return this.buffer != null ? this.buffer.toString("base64") : "";
    }
    /**
     * @ignore
     */
  }, {
    key: "toString",
    value: function toString(format3) {
      return this.buffer != null ? this.buffer.slice(0, this.position).toString(format3) : "";
    }
    /**
     * @ignore
     */
  }, {
    key: "toExtendedJSON",
    value: function toExtendedJSON() {
      var base64String = Buffer$32.isBuffer(this.buffer) ? this.buffer.toString("base64") : Buffer$32.from(this.buffer).toString("base64");
      var subType = Number(this.sub_type).toString(16);
      return {
        $binary: {
          base64: base64String,
          subType: subType.length === 1 ? "0" + subType : subType
        }
      };
    }
    /**
     * @ignore
     */
  }], [{
    key: "fromExtendedJSON",
    value: function fromExtendedJSON(doc) {
      var type = doc.$binary.subType ? parseInt(doc.$binary.subType, 16) : 0;
      var data = Buffer$32.from(doc.$binary.base64, "base64");
      return new Binary5(data, type);
    }
  }]);
  return Binary5;
}();
var BSON_BINARY_SUBTYPE_DEFAULT2 = 0;
function isUint8Array2(obj) {
  return Object.prototype.toString.call(obj) === "[object Uint8Array]";
}
function writeStringToArray2(data) {
  var buffer$$1 = typeof Uint8Array !== "undefined" ? new Uint8Array(new ArrayBuffer(data.length)) : new Array(data.length);
  for (var i3 = 0; i3 < data.length; i3++) {
    buffer$$1[i3] = data.charCodeAt(i3);
  }
  return buffer$$1;
}
function convertArraytoUtf8BinaryString2(byteArray, startIndex, endIndex) {
  var result = "";
  for (var i3 = startIndex; i3 < endIndex; i3++) {
    result = result + String.fromCharCode(byteArray[i3]);
  }
  return result;
}
Binary3.BUFFER_SIZE = 256;
Binary3.SUBTYPE_DEFAULT = 0;
Binary3.SUBTYPE_FUNCTION = 1;
Binary3.SUBTYPE_BYTE_ARRAY = 2;
Binary3.SUBTYPE_UUID_OLD = 3;
Binary3.SUBTYPE_UUID = 4;
Binary3.SUBTYPE_MD5 = 5;
Binary3.SUBTYPE_USER_DEFINED = 128;
Object.defineProperty(Binary3.prototype, "_bsontype", {
  value: "Binary"
});
var binary2 = Binary3;
var constants2 = {
  // BSON MAX VALUES
  BSON_INT32_MAX: 2147483647,
  BSON_INT32_MIN: -2147483648,
  BSON_INT64_MAX: Math.pow(2, 63) - 1,
  BSON_INT64_MIN: -Math.pow(2, 63),
  // JS MAX PRECISE VALUES
  JS_INT_MAX: 9007199254740992,
  // Any integer up to 2^53 can be precisely represented by a double.
  JS_INT_MIN: -9007199254740992,
  // Any integer down to -2^53 can be precisely represented by a double.
  /**
   * Number BSON Type
   *
   * @classconstant BSON_DATA_NUMBER
   **/
  BSON_DATA_NUMBER: 1,
  /**
   * String BSON Type
   *
   * @classconstant BSON_DATA_STRING
   **/
  BSON_DATA_STRING: 2,
  /**
   * Object BSON Type
   *
   * @classconstant BSON_DATA_OBJECT
   **/
  BSON_DATA_OBJECT: 3,
  /**
   * Array BSON Type
   *
   * @classconstant BSON_DATA_ARRAY
   **/
  BSON_DATA_ARRAY: 4,
  /**
   * Binary BSON Type
   *
   * @classconstant BSON_DATA_BINARY
   **/
  BSON_DATA_BINARY: 5,
  /**
   * Binary BSON Type
   *
   * @classconstant BSON_DATA_UNDEFINED
   **/
  BSON_DATA_UNDEFINED: 6,
  /**
   * ObjectId BSON Type
   *
   * @classconstant BSON_DATA_OID
   **/
  BSON_DATA_OID: 7,
  /**
   * Boolean BSON Type
   *
   * @classconstant BSON_DATA_BOOLEAN
   **/
  BSON_DATA_BOOLEAN: 8,
  /**
   * Date BSON Type
   *
   * @classconstant BSON_DATA_DATE
   **/
  BSON_DATA_DATE: 9,
  /**
   * null BSON Type
   *
   * @classconstant BSON_DATA_NULL
   **/
  BSON_DATA_NULL: 10,
  /**
   * RegExp BSON Type
   *
   * @classconstant BSON_DATA_REGEXP
   **/
  BSON_DATA_REGEXP: 11,
  /**
   * Code BSON Type
   *
   * @classconstant BSON_DATA_DBPOINTER
   **/
  BSON_DATA_DBPOINTER: 12,
  /**
   * Code BSON Type
   *
   * @classconstant BSON_DATA_CODE
   **/
  BSON_DATA_CODE: 13,
  /**
   * Symbol BSON Type
   *
   * @classconstant BSON_DATA_SYMBOL
   **/
  BSON_DATA_SYMBOL: 14,
  /**
   * Code with Scope BSON Type
   *
   * @classconstant BSON_DATA_CODE_W_SCOPE
   **/
  BSON_DATA_CODE_W_SCOPE: 15,
  /**
   * 32 bit Integer BSON Type
   *
   * @classconstant BSON_DATA_INT
   **/
  BSON_DATA_INT: 16,
  /**
   * Timestamp BSON Type
   *
   * @classconstant BSON_DATA_TIMESTAMP
   **/
  BSON_DATA_TIMESTAMP: 17,
  /**
   * Long BSON Type
   *
   * @classconstant BSON_DATA_LONG
   **/
  BSON_DATA_LONG: 18,
  /**
   * Long BSON Type
   *
   * @classconstant BSON_DATA_DECIMAL128
   **/
  BSON_DATA_DECIMAL128: 19,
  /**
   * MinKey BSON Type
   *
   * @classconstant BSON_DATA_MIN_KEY
   **/
  BSON_DATA_MIN_KEY: 255,
  /**
   * MaxKey BSON Type
   *
   * @classconstant BSON_DATA_MAX_KEY
   **/
  BSON_DATA_MAX_KEY: 127,
  /**
   * Binary Default Type
   *
   * @classconstant BSON_BINARY_SUBTYPE_DEFAULT
   **/
  BSON_BINARY_SUBTYPE_DEFAULT: 0,
  /**
   * Binary Function Type
   *
   * @classconstant BSON_BINARY_SUBTYPE_FUNCTION
   **/
  BSON_BINARY_SUBTYPE_FUNCTION: 1,
  /**
   * Binary Byte Array Type
   *
   * @classconstant BSON_BINARY_SUBTYPE_BYTE_ARRAY
   **/
  BSON_BINARY_SUBTYPE_BYTE_ARRAY: 2,
  /**
   * Binary UUID Type
   *
   * @classconstant BSON_BINARY_SUBTYPE_UUID
   **/
  BSON_BINARY_SUBTYPE_UUID: 3,
  /**
   * Binary MD5 Type
   *
   * @classconstant BSON_BINARY_SUBTYPE_MD5
   **/
  BSON_BINARY_SUBTYPE_MD5: 4,
  /**
   * Binary User Defined Type
   *
   * @classconstant BSON_BINARY_SUBTYPE_USER_DEFINED
   **/
  BSON_BINARY_SUBTYPE_USER_DEFINED: 128
};
function _typeof$22(obj) {
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof$22 = function _typeof3(obj2) {
      return typeof obj2;
    };
  } else {
    _typeof$22 = function _typeof3(obj2) {
      return obj2 && typeof Symbol === "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
    };
  }
  return _typeof$22(obj);
}
var keysToCodecs2 = {
  $oid: objectid2,
  $binary: binary2,
  $symbol: symbol2,
  $numberInt: int_322,
  $numberDecimal: decimal1282,
  $numberDouble: double_12,
  $numberLong: long_12,
  $minKey: min_key2,
  $maxKey: max_key2,
  $regularExpression: regexp2,
  $timestamp: timestamp2
};
function deserializeValue2(self2, key, value2, options) {
  if (typeof value2 === "number") {
    if (options.relaxed) {
      return value2;
    }
    if (Math.floor(value2) === value2) {
      if (value2 >= BSON_INT32_MIN2 && value2 <= BSON_INT32_MAX2)
        return new int_322(value2);
      if (value2 >= BSON_INT64_MIN2 && value2 <= BSON_INT64_MAX2)
        return new long_12.fromNumber(value2);
    }
    return new double_12(value2);
  }
  if (value2 == null || _typeof$22(value2) !== "object")
    return value2;
  if (value2.$undefined)
    return null;
  var keys = Object.keys(value2).filter(function(k) {
    return k.startsWith("$") && value2[k] != null;
  });
  for (var i3 = 0; i3 < keys.length; i3++) {
    var c = keysToCodecs2[keys[i3]];
    if (c)
      return c.fromExtendedJSON(value2, options);
  }
  if (value2.$date != null) {
    var d = value2.$date;
    var date = /* @__PURE__ */ new Date();
    if (typeof d === "string")
      date.setTime(Date.parse(d));
    else if (long_12.isLong(d))
      date.setTime(d.toNumber());
    else if (typeof d === "number" && options.relaxed)
      date.setTime(d);
    return date;
  }
  if (value2.$code != null) {
    var copy = Object.assign({}, value2);
    if (value2.$scope) {
      copy.$scope = deserializeValue2(self2, null, value2.$scope);
    }
    return code2.fromExtendedJSON(value2);
  }
  if (value2.$ref != null || value2.$dbPointer != null) {
    var v = value2.$ref ? value2 : value2.$dbPointer;
    if (v instanceof db_ref2)
      return v;
    var dollarKeys = Object.keys(v).filter(function(k) {
      return k.startsWith("$");
    });
    var valid = true;
    dollarKeys.forEach(function(k) {
      if (["$ref", "$id", "$db"].indexOf(k) === -1)
        valid = false;
    });
    if (valid)
      return db_ref2.fromExtendedJSON(v);
  }
  return value2;
}
function parse2(text, options) {
  var _this = this;
  options = Object.assign({}, {
    relaxed: true
  }, options);
  if (typeof options.relaxed === "boolean")
    options.strict = !options.relaxed;
  if (typeof options.strict === "boolean")
    options.relaxed = !options.strict;
  return JSON.parse(text, function(key, value2) {
    return deserializeValue2(_this, key, value2, options);
  });
}
var BSON_INT32_MAX2 = 2147483647;
var BSON_INT32_MIN2 = -2147483648;
var BSON_INT64_MAX2 = 9223372036854776e3;
var BSON_INT64_MIN2 = -9223372036854776e3;
function stringify2(value2, replacer, space, options) {
  if (space != null && _typeof$22(space) === "object") {
    options = space;
    space = 0;
  }
  if (replacer != null && _typeof$22(replacer) === "object" && !Array.isArray(replacer)) {
    options = replacer;
    replacer = null;
    space = 0;
  }
  options = Object.assign({}, {
    relaxed: true
  }, options);
  var doc = Array.isArray(value2) ? serializeArray2(value2, options) : serializeDocument2(value2, options);
  return JSON.stringify(doc, replacer, space);
}
function serialize2(bson3, options) {
  options = options || {};
  return JSON.parse(stringify2(bson3, options));
}
function deserialize2(ejson, options) {
  options = options || {};
  return parse2(JSON.stringify(ejson), options);
}
function serializeArray2(array, options) {
  return array.map(function(v) {
    return serializeValue2(v, options);
  });
}
function getISOString2(date) {
  var isoStr = date.toISOString();
  return date.getUTCMilliseconds() !== 0 ? isoStr : isoStr.slice(0, -5) + "Z";
}
function serializeValue2(value2, options) {
  if (Array.isArray(value2))
    return serializeArray2(value2, options);
  if (value2 === void 0)
    return null;
  if (value2 instanceof Date) {
    var dateNum = value2.getTime(), inRange = dateNum > -1 && dateNum < 2534023188e5;
    return options.relaxed && inRange ? {
      $date: getISOString2(value2)
    } : {
      $date: {
        $numberLong: value2.getTime().toString()
      }
    };
  }
  if (typeof value2 === "number" && !options.relaxed) {
    if (Math.floor(value2) === value2) {
      var int32Range = value2 >= BSON_INT32_MIN2 && value2 <= BSON_INT32_MAX2, int64Range = value2 >= BSON_INT64_MIN2 && value2 <= BSON_INT64_MAX2;
      if (int32Range)
        return {
          $numberInt: value2.toString()
        };
      if (int64Range)
        return {
          $numberLong: value2.toString()
        };
    }
    return {
      $numberDouble: value2.toString()
    };
  }
  if (value2 instanceof RegExp) {
    var flags = value2.flags;
    if (flags === void 0) {
      flags = value2.toString().match(/[gimuy]*$/)[0];
    }
    var rx = new regexp2(value2.source, flags);
    return rx.toExtendedJSON();
  }
  if (value2 != null && _typeof$22(value2) === "object")
    return serializeDocument2(value2, options);
  return value2;
}
var BSON_TYPE_MAPPINGS2 = {
  Binary: function Binary4(o) {
    return new binary2(o.value(), o.subtype);
  },
  Code: function Code4(o) {
    return new code2(o.code, o.scope);
  },
  DBRef: function DBRef4(o) {
    return new db_ref2(o.collection || o.namespace, o.oid, o.db, o.fields);
  },
  // "namespace" for 1.x library backwards compat
  Decimal128: function Decimal1284(o) {
    return new decimal1282(o.bytes);
  },
  Double: function Double4(o) {
    return new double_12(o.value);
  },
  Int32: function Int324(o) {
    return new int_322(o.value);
  },
  Long: function Long2(o) {
    return long_12.fromBits(
      // underscore variants for 1.x backwards compatibility
      o.low != null ? o.low : o.low_,
      o.low != null ? o.high : o.high_,
      o.low != null ? o.unsigned : o.unsigned_
    );
  },
  MaxKey: function MaxKey4() {
    return new max_key2();
  },
  MinKey: function MinKey4() {
    return new min_key2();
  },
  ObjectID: function ObjectID2(o) {
    return new objectid2(o);
  },
  ObjectId: function ObjectId4(o) {
    return new objectid2(o);
  },
  // support 4.0.0/4.0.1 before _bsontype was reverted back to ObjectID
  BSONRegExp: function BSONRegExp4(o) {
    return new regexp2(o.pattern, o.options);
  },
  Symbol: function Symbol3(o) {
    return new symbol2(o.value);
  },
  Timestamp: function Timestamp4(o) {
    return timestamp2.fromBits(o.low, o.high);
  }
};
function serializeDocument2(doc, options) {
  if (doc == null || _typeof$22(doc) !== "object")
    throw new Error("not an object instance");
  var bsontype = doc._bsontype;
  if (typeof bsontype === "undefined") {
    var _doc = {};
    for (var name in doc) {
      _doc[name] = serializeValue2(doc[name], options);
    }
    return _doc;
  } else if (typeof bsontype === "string") {
    var _doc2 = doc;
    if (typeof _doc2.toExtendedJSON !== "function") {
      var mapper = BSON_TYPE_MAPPINGS2[bsontype];
      if (!mapper) {
        throw new TypeError("Unrecognized or invalid _bsontype: " + bsontype);
      }
      _doc2 = mapper(_doc2);
    }
    if (bsontype === "Code" && _doc2.scope) {
      _doc2 = new code2(_doc2.code, serializeValue2(_doc2.scope, options));
    } else if (bsontype === "DBRef" && _doc2.oid) {
      _doc2 = new db_ref2(_doc2.collection, serializeValue2(_doc2.oid, options), _doc2.db, _doc2.fields);
    }
    return _doc2.toExtendedJSON(options);
  } else {
    throw new Error("_bsontype must be a string, but was: " + _typeof$22(bsontype));
  }
}
var extended_json2 = {
  parse: parse2,
  deserialize: deserialize2,
  serialize: serialize2,
  stringify: stringify2
};
var FIRST_BIT2 = 128;
var FIRST_TWO_BITS2 = 192;
var FIRST_THREE_BITS2 = 224;
var FIRST_FOUR_BITS2 = 240;
var FIRST_FIVE_BITS2 = 248;
var TWO_BIT_CHAR2 = 192;
var THREE_BIT_CHAR2 = 224;
var FOUR_BIT_CHAR2 = 240;
var CONTINUING_CHAR2 = 128;
function validateUtf82(bytes, start, end) {
  var continuation = 0;
  for (var i3 = start; i3 < end; i3 += 1) {
    var byte = bytes[i3];
    if (continuation) {
      if ((byte & FIRST_TWO_BITS2) !== CONTINUING_CHAR2) {
        return false;
      }
      continuation -= 1;
    } else if (byte & FIRST_BIT2) {
      if ((byte & FIRST_THREE_BITS2) === TWO_BIT_CHAR2) {
        continuation = 1;
      } else if ((byte & FIRST_FOUR_BITS2) === THREE_BIT_CHAR2) {
        continuation = 2;
      } else if ((byte & FIRST_FIVE_BITS2) === FOUR_BIT_CHAR2) {
        continuation = 3;
      } else {
        return false;
      }
    }
  }
  return !continuation;
}
var validateUtf8_12 = validateUtf82;
var validate_utf82 = {
  validateUtf8: validateUtf8_12
};
var Buffer$42 = import_buffer2.default.Buffer;
var validateUtf8$12 = validate_utf82.validateUtf8;
var JS_INT_MAX_LONG2 = long_12.fromNumber(constants2.JS_INT_MAX);
var JS_INT_MIN_LONG2 = long_12.fromNumber(constants2.JS_INT_MIN);
var functionCache3 = {};
function deserialize$12(buffer$$1, options, isArray3) {
  options = options == null ? {} : options;
  var index = options && options.index ? options.index : 0;
  var size = buffer$$1[index] | buffer$$1[index + 1] << 8 | buffer$$1[index + 2] << 16 | buffer$$1[index + 3] << 24;
  if (size < 5) {
    throw new Error("bson size must be >= 5, is ".concat(size));
  }
  if (options.allowObjectSmallerThanBufferSize && buffer$$1.length < size) {
    throw new Error("buffer length ".concat(buffer$$1.length, " must be >= bson size ").concat(size));
  }
  if (!options.allowObjectSmallerThanBufferSize && buffer$$1.length !== size) {
    throw new Error("buffer length ".concat(buffer$$1.length, " must === bson size ").concat(size));
  }
  if (size + index > buffer$$1.length) {
    throw new Error("(bson size ".concat(size, " + options.index ").concat(index, " must be <= buffer length ").concat(Buffer$42.byteLength(buffer$$1), ")"));
  }
  if (buffer$$1[index + size - 1] !== 0) {
    throw new Error("One object, sized correctly, with a spot for an EOO, but the EOO isn't 0x00");
  }
  return deserializeObject2(buffer$$1, index, options, isArray3);
}
function deserializeObject2(buffer$$1, index, options, isArray3) {
  var evalFunctions = options["evalFunctions"] == null ? false : options["evalFunctions"];
  var cacheFunctions = options["cacheFunctions"] == null ? false : options["cacheFunctions"];
  var cacheFunctionsCrc32 = options["cacheFunctionsCrc32"] == null ? false : options["cacheFunctionsCrc32"];
  if (!cacheFunctionsCrc32)
    var crc32 = null;
  var fieldsAsRaw = options["fieldsAsRaw"] == null ? null : options["fieldsAsRaw"];
  var raw = options["raw"] == null ? false : options["raw"];
  var bsonRegExp = typeof options["bsonRegExp"] === "boolean" ? options["bsonRegExp"] : false;
  var promoteBuffers = options["promoteBuffers"] == null ? false : options["promoteBuffers"];
  var promoteLongs = options["promoteLongs"] == null ? true : options["promoteLongs"];
  var promoteValues = options["promoteValues"] == null ? true : options["promoteValues"];
  var startIndex = index;
  if (buffer$$1.length < 5)
    throw new Error("corrupt bson message < 5 bytes long");
  var size = buffer$$1[index++] | buffer$$1[index++] << 8 | buffer$$1[index++] << 16 | buffer$$1[index++] << 24;
  if (size < 5 || size > buffer$$1.length)
    throw new Error("corrupt bson message");
  var object2 = isArray3 ? [] : {};
  var arrayIndex = 0;
  var done = false;
  while (!done) {
    var elementType = buffer$$1[index++];
    if (elementType === 0)
      break;
    var i3 = index;
    while (buffer$$1[i3] !== 0 && i3 < buffer$$1.length) {
      i3++;
    }
    if (i3 >= Buffer$42.byteLength(buffer$$1))
      throw new Error("Bad BSON Document: illegal CString");
    var name = isArray3 ? arrayIndex++ : buffer$$1.toString("utf8", index, i3);
    index = i3 + 1;
    if (elementType === constants2.BSON_DATA_STRING) {
      var stringSize = buffer$$1[index++] | buffer$$1[index++] << 8 | buffer$$1[index++] << 16 | buffer$$1[index++] << 24;
      if (stringSize <= 0 || stringSize > buffer$$1.length - index || buffer$$1[index + stringSize - 1] !== 0)
        throw new Error("bad string length in bson");
      if (!validateUtf8$12(buffer$$1, index, index + stringSize - 1)) {
        throw new Error("Invalid UTF-8 string in BSON document");
      }
      var s = buffer$$1.toString("utf8", index, index + stringSize - 1);
      object2[name] = s;
      index = index + stringSize;
    } else if (elementType === constants2.BSON_DATA_OID) {
      var oid = Buffer$42.alloc(12);
      buffer$$1.copy(oid, 0, index, index + 12);
      object2[name] = new objectid2(oid);
      index = index + 12;
    } else if (elementType === constants2.BSON_DATA_INT && promoteValues === false) {
      object2[name] = new int_322(buffer$$1[index++] | buffer$$1[index++] << 8 | buffer$$1[index++] << 16 | buffer$$1[index++] << 24);
    } else if (elementType === constants2.BSON_DATA_INT) {
      object2[name] = buffer$$1[index++] | buffer$$1[index++] << 8 | buffer$$1[index++] << 16 | buffer$$1[index++] << 24;
    } else if (elementType === constants2.BSON_DATA_NUMBER && promoteValues === false) {
      object2[name] = new double_12(buffer$$1.readDoubleLE(index));
      index = index + 8;
    } else if (elementType === constants2.BSON_DATA_NUMBER) {
      object2[name] = buffer$$1.readDoubleLE(index);
      index = index + 8;
    } else if (elementType === constants2.BSON_DATA_DATE) {
      var lowBits = buffer$$1[index++] | buffer$$1[index++] << 8 | buffer$$1[index++] << 16 | buffer$$1[index++] << 24;
      var highBits = buffer$$1[index++] | buffer$$1[index++] << 8 | buffer$$1[index++] << 16 | buffer$$1[index++] << 24;
      object2[name] = new Date(new long_12(lowBits, highBits).toNumber());
    } else if (elementType === constants2.BSON_DATA_BOOLEAN) {
      if (buffer$$1[index] !== 0 && buffer$$1[index] !== 1)
        throw new Error("illegal boolean type value");
      object2[name] = buffer$$1[index++] === 1;
    } else if (elementType === constants2.BSON_DATA_OBJECT) {
      var _index = index;
      var objectSize = buffer$$1[index] | buffer$$1[index + 1] << 8 | buffer$$1[index + 2] << 16 | buffer$$1[index + 3] << 24;
      if (objectSize <= 0 || objectSize > buffer$$1.length - index)
        throw new Error("bad embedded document length in bson");
      if (raw) {
        object2[name] = buffer$$1.slice(index, index + objectSize);
      } else {
        object2[name] = deserializeObject2(buffer$$1, _index, options, false);
      }
      index = index + objectSize;
    } else if (elementType === constants2.BSON_DATA_ARRAY) {
      var _index2 = index;
      var _objectSize = buffer$$1[index] | buffer$$1[index + 1] << 8 | buffer$$1[index + 2] << 16 | buffer$$1[index + 3] << 24;
      var arrayOptions = options;
      var stopIndex = index + _objectSize;
      if (fieldsAsRaw && fieldsAsRaw[name]) {
        arrayOptions = {};
        for (var n in options) {
          arrayOptions[n] = options[n];
        }
        arrayOptions["raw"] = true;
      }
      object2[name] = deserializeObject2(buffer$$1, _index2, arrayOptions, true);
      index = index + _objectSize;
      if (buffer$$1[index - 1] !== 0)
        throw new Error("invalid array terminator byte");
      if (index !== stopIndex)
        throw new Error("corrupted array bson");
    } else if (elementType === constants2.BSON_DATA_UNDEFINED) {
      object2[name] = void 0;
    } else if (elementType === constants2.BSON_DATA_NULL) {
      object2[name] = null;
    } else if (elementType === constants2.BSON_DATA_LONG) {
      var _lowBits = buffer$$1[index++] | buffer$$1[index++] << 8 | buffer$$1[index++] << 16 | buffer$$1[index++] << 24;
      var _highBits = buffer$$1[index++] | buffer$$1[index++] << 8 | buffer$$1[index++] << 16 | buffer$$1[index++] << 24;
      var long$$1 = new long_12(_lowBits, _highBits);
      if (promoteLongs && promoteValues === true) {
        object2[name] = long$$1.lessThanOrEqual(JS_INT_MAX_LONG2) && long$$1.greaterThanOrEqual(JS_INT_MIN_LONG2) ? long$$1.toNumber() : long$$1;
      } else {
        object2[name] = long$$1;
      }
    } else if (elementType === constants2.BSON_DATA_DECIMAL128) {
      var bytes = Buffer$42.alloc(16);
      buffer$$1.copy(bytes, 0, index, index + 16);
      index = index + 16;
      var decimal128$$1 = new decimal1282(bytes);
      object2[name] = decimal128$$1.toObject ? decimal128$$1.toObject() : decimal128$$1;
    } else if (elementType === constants2.BSON_DATA_BINARY) {
      var binarySize = buffer$$1[index++] | buffer$$1[index++] << 8 | buffer$$1[index++] << 16 | buffer$$1[index++] << 24;
      var totalBinarySize = binarySize;
      var subType = buffer$$1[index++];
      if (binarySize < 0)
        throw new Error("Negative binary type element size found");
      if (binarySize > Buffer$42.byteLength(buffer$$1))
        throw new Error("Binary type size larger than document size");
      if (buffer$$1["slice"] != null) {
        if (subType === binary2.SUBTYPE_BYTE_ARRAY) {
          binarySize = buffer$$1[index++] | buffer$$1[index++] << 8 | buffer$$1[index++] << 16 | buffer$$1[index++] << 24;
          if (binarySize < 0)
            throw new Error("Negative binary type element size found for subtype 0x02");
          if (binarySize > totalBinarySize - 4)
            throw new Error("Binary type with subtype 0x02 contains to long binary size");
          if (binarySize < totalBinarySize - 4)
            throw new Error("Binary type with subtype 0x02 contains to short binary size");
        }
        if (promoteBuffers && promoteValues) {
          object2[name] = buffer$$1.slice(index, index + binarySize);
        } else {
          object2[name] = new binary2(buffer$$1.slice(index, index + binarySize), subType);
        }
      } else {
        var _buffer = typeof Uint8Array !== "undefined" ? new Uint8Array(new ArrayBuffer(binarySize)) : new Array(binarySize);
        if (subType === binary2.SUBTYPE_BYTE_ARRAY) {
          binarySize = buffer$$1[index++] | buffer$$1[index++] << 8 | buffer$$1[index++] << 16 | buffer$$1[index++] << 24;
          if (binarySize < 0)
            throw new Error("Negative binary type element size found for subtype 0x02");
          if (binarySize > totalBinarySize - 4)
            throw new Error("Binary type with subtype 0x02 contains to long binary size");
          if (binarySize < totalBinarySize - 4)
            throw new Error("Binary type with subtype 0x02 contains to short binary size");
        }
        for (i3 = 0; i3 < binarySize; i3++) {
          _buffer[i3] = buffer$$1[index + i3];
        }
        if (promoteBuffers && promoteValues) {
          object2[name] = _buffer;
        } else {
          object2[name] = new binary2(_buffer, subType);
        }
      }
      index = index + binarySize;
    } else if (elementType === constants2.BSON_DATA_REGEXP && bsonRegExp === false) {
      i3 = index;
      while (buffer$$1[i3] !== 0 && i3 < buffer$$1.length) {
        i3++;
      }
      if (i3 >= buffer$$1.length)
        throw new Error("Bad BSON Document: illegal CString");
      var source = buffer$$1.toString("utf8", index, i3);
      index = i3 + 1;
      i3 = index;
      while (buffer$$1[i3] !== 0 && i3 < buffer$$1.length) {
        i3++;
      }
      if (i3 >= buffer$$1.length)
        throw new Error("Bad BSON Document: illegal CString");
      var regExpOptions = buffer$$1.toString("utf8", index, i3);
      index = i3 + 1;
      var optionsArray = new Array(regExpOptions.length);
      for (i3 = 0; i3 < regExpOptions.length; i3++) {
        switch (regExpOptions[i3]) {
          case "m":
            optionsArray[i3] = "m";
            break;
          case "s":
            optionsArray[i3] = "g";
            break;
          case "i":
            optionsArray[i3] = "i";
            break;
        }
      }
      object2[name] = new RegExp(source, optionsArray.join(""));
    } else if (elementType === constants2.BSON_DATA_REGEXP && bsonRegExp === true) {
      i3 = index;
      while (buffer$$1[i3] !== 0 && i3 < buffer$$1.length) {
        i3++;
      }
      if (i3 >= buffer$$1.length)
        throw new Error("Bad BSON Document: illegal CString");
      var _source = buffer$$1.toString("utf8", index, i3);
      index = i3 + 1;
      i3 = index;
      while (buffer$$1[i3] !== 0 && i3 < buffer$$1.length) {
        i3++;
      }
      if (i3 >= buffer$$1.length)
        throw new Error("Bad BSON Document: illegal CString");
      var _regExpOptions = buffer$$1.toString("utf8", index, i3);
      index = i3 + 1;
      object2[name] = new regexp2(_source, _regExpOptions);
    } else if (elementType === constants2.BSON_DATA_SYMBOL) {
      var _stringSize = buffer$$1[index++] | buffer$$1[index++] << 8 | buffer$$1[index++] << 16 | buffer$$1[index++] << 24;
      if (_stringSize <= 0 || _stringSize > buffer$$1.length - index || buffer$$1[index + _stringSize - 1] !== 0)
        throw new Error("bad string length in bson");
      object2[name] = buffer$$1.toString("utf8", index, index + _stringSize - 1);
      index = index + _stringSize;
    } else if (elementType === constants2.BSON_DATA_TIMESTAMP) {
      var _lowBits2 = buffer$$1[index++] | buffer$$1[index++] << 8 | buffer$$1[index++] << 16 | buffer$$1[index++] << 24;
      var _highBits2 = buffer$$1[index++] | buffer$$1[index++] << 8 | buffer$$1[index++] << 16 | buffer$$1[index++] << 24;
      object2[name] = new timestamp2(_lowBits2, _highBits2);
    } else if (elementType === constants2.BSON_DATA_MIN_KEY) {
      object2[name] = new min_key2();
    } else if (elementType === constants2.BSON_DATA_MAX_KEY) {
      object2[name] = new max_key2();
    } else if (elementType === constants2.BSON_DATA_CODE) {
      var _stringSize2 = buffer$$1[index++] | buffer$$1[index++] << 8 | buffer$$1[index++] << 16 | buffer$$1[index++] << 24;
      if (_stringSize2 <= 0 || _stringSize2 > buffer$$1.length - index || buffer$$1[index + _stringSize2 - 1] !== 0)
        throw new Error("bad string length in bson");
      var functionString2 = buffer$$1.toString("utf8", index, index + _stringSize2 - 1);
      if (evalFunctions) {
        if (cacheFunctions) {
          var hash2 = cacheFunctionsCrc32 ? crc32(functionString2) : functionString2;
          object2[name] = isolateEvalWithHash2(functionCache3, hash2, functionString2, object2);
        } else {
          object2[name] = isolateEval2(functionString2);
        }
      } else {
        object2[name] = new code2(functionString2);
      }
      index = index + _stringSize2;
    } else if (elementType === constants2.BSON_DATA_CODE_W_SCOPE) {
      var totalSize = buffer$$1[index++] | buffer$$1[index++] << 8 | buffer$$1[index++] << 16 | buffer$$1[index++] << 24;
      if (totalSize < 4 + 4 + 4 + 1) {
        throw new Error("code_w_scope total size shorter minimum expected length");
      }
      var _stringSize3 = buffer$$1[index++] | buffer$$1[index++] << 8 | buffer$$1[index++] << 16 | buffer$$1[index++] << 24;
      if (_stringSize3 <= 0 || _stringSize3 > buffer$$1.length - index || buffer$$1[index + _stringSize3 - 1] !== 0)
        throw new Error("bad string length in bson");
      var _functionString = buffer$$1.toString("utf8", index, index + _stringSize3 - 1);
      index = index + _stringSize3;
      var _index3 = index;
      var _objectSize2 = buffer$$1[index] | buffer$$1[index + 1] << 8 | buffer$$1[index + 2] << 16 | buffer$$1[index + 3] << 24;
      var scopeObject = deserializeObject2(buffer$$1, _index3, options, false);
      index = index + _objectSize2;
      if (totalSize < 4 + 4 + _objectSize2 + _stringSize3) {
        throw new Error("code_w_scope total size is to short, truncating scope");
      }
      if (totalSize > 4 + 4 + _objectSize2 + _stringSize3) {
        throw new Error("code_w_scope total size is to long, clips outer document");
      }
      if (evalFunctions) {
        if (cacheFunctions) {
          var _hash = cacheFunctionsCrc32 ? crc32(_functionString) : _functionString;
          object2[name] = isolateEvalWithHash2(functionCache3, _hash, _functionString, object2);
        } else {
          object2[name] = isolateEval2(_functionString);
        }
        object2[name].scope = scopeObject;
      } else {
        object2[name] = new code2(_functionString, scopeObject);
      }
    } else if (elementType === constants2.BSON_DATA_DBPOINTER) {
      var _stringSize4 = buffer$$1[index++] | buffer$$1[index++] << 8 | buffer$$1[index++] << 16 | buffer$$1[index++] << 24;
      if (_stringSize4 <= 0 || _stringSize4 > buffer$$1.length - index || buffer$$1[index + _stringSize4 - 1] !== 0)
        throw new Error("bad string length in bson");
      if (!validateUtf8$12(buffer$$1, index, index + _stringSize4 - 1)) {
        throw new Error("Invalid UTF-8 string in BSON document");
      }
      var namespace = buffer$$1.toString("utf8", index, index + _stringSize4 - 1);
      index = index + _stringSize4;
      var oidBuffer = Buffer$42.alloc(12);
      buffer$$1.copy(oidBuffer, 0, index, index + 12);
      var _oid = new objectid2(oidBuffer);
      index = index + 12;
      object2[name] = new db_ref2(namespace, _oid);
    } else {
      throw new Error("Detected unknown BSON type " + elementType.toString(16) + ' for fieldname "' + name + '", are you using the latest BSON parser?');
    }
  }
  if (size !== index - startIndex) {
    if (isArray3)
      throw new Error("corrupt array bson");
    throw new Error("corrupt object bson");
  }
  var dollarKeys = Object.keys(object2).filter(function(k) {
    return k.startsWith("$");
  });
  var valid = true;
  dollarKeys.forEach(function(k) {
    if (["$ref", "$id", "$db"].indexOf(k) === -1)
      valid = false;
  });
  if (!valid)
    return object2;
  if (object2["$id"] != null && object2["$ref"] != null) {
    var copy = Object.assign({}, object2);
    delete copy.$ref;
    delete copy.$id;
    delete copy.$db;
    return new db_ref2(object2.$ref, object2.$id, object2.$db || null, copy);
  }
  return object2;
}
function isolateEvalWithHash2(functionCache, hash, functionString, object) {
  var value = null;
  if (functionCache[hash] == null) {
    eval("value = " + functionString);
    functionCache[hash] = value;
  }
  return functionCache[hash].bind(object);
}
function isolateEval2(functionString) {
  var value = null;
  eval("value = " + functionString);
  return value;
}
var deserializer2 = deserialize$12;
function readIEEE7542(buffer$$1, offset, endian, mLen, nBytes) {
  var e, m, bBE = endian === "big", eLen = nBytes * 8 - mLen - 1, eMax = (1 << eLen) - 1, eBias = eMax >> 1, nBits = -7, i3 = bBE ? 0 : nBytes - 1, d = bBE ? 1 : -1, s = buffer$$1[offset + i3];
  i3 += d;
  e = s & (1 << -nBits) - 1;
  s >>= -nBits;
  nBits += eLen;
  for (; nBits > 0; e = e * 256 + buffer$$1[offset + i3], i3 += d, nBits -= 8) {
  }
  m = e & (1 << -nBits) - 1;
  e >>= -nBits;
  nBits += mLen;
  for (; nBits > 0; m = m * 256 + buffer$$1[offset + i3], i3 += d, nBits -= 8) {
  }
  if (e === 0) {
    e = 1 - eBias;
  } else if (e === eMax) {
    return m ? NaN : (s ? -1 : 1) * Infinity;
  } else {
    m = m + Math.pow(2, mLen);
    e = e - eBias;
  }
  return (s ? -1 : 1) * m * Math.pow(2, e - mLen);
}
function writeIEEE7542(buffer$$1, value2, offset, endian, mLen, nBytes) {
  var e, m, c, bBE = endian === "big", eLen = nBytes * 8 - mLen - 1, eMax = (1 << eLen) - 1, eBias = eMax >> 1, rt = mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0, i3 = bBE ? nBytes - 1 : 0, d = bBE ? -1 : 1, s = value2 < 0 || value2 === 0 && 1 / value2 < 0 ? 1 : 0;
  value2 = Math.abs(value2);
  if (isNaN(value2) || value2 === Infinity) {
    m = isNaN(value2) ? 1 : 0;
    e = eMax;
  } else {
    e = Math.floor(Math.log(value2) / Math.LN2);
    if (value2 * (c = Math.pow(2, -e)) < 1) {
      e--;
      c *= 2;
    }
    if (e + eBias >= 1) {
      value2 += rt / c;
    } else {
      value2 += rt * Math.pow(2, 1 - eBias);
    }
    if (value2 * c >= 2) {
      e++;
      c /= 2;
    }
    if (e + eBias >= eMax) {
      m = 0;
      e = eMax;
    } else if (e + eBias >= 1) {
      m = (value2 * c - 1) * Math.pow(2, mLen);
      e = e + eBias;
    } else {
      m = value2 * Math.pow(2, eBias - 1) * Math.pow(2, mLen);
      e = 0;
    }
  }
  if (isNaN(value2))
    m = 0;
  while (mLen >= 8) {
    buffer$$1[offset + i3] = m & 255;
    i3 += d;
    m /= 256;
    mLen -= 8;
  }
  e = e << mLen | m;
  if (isNaN(value2))
    e += 8;
  eLen += mLen;
  while (eLen > 0) {
    buffer$$1[offset + i3] = e & 255;
    i3 += d;
    e /= 256;
    eLen -= 8;
  }
  buffer$$1[offset + i3 - d] |= s * 128;
}
var float_parser2 = {
  readIEEE754: readIEEE7542,
  writeIEEE754: writeIEEE7542
};
function _typeof$32(obj) {
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof$32 = function _typeof3(obj2) {
      return typeof obj2;
    };
  } else {
    _typeof$32 = function _typeof3(obj2) {
      return obj2 && typeof Symbol === "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
    };
  }
  return _typeof$32(obj);
}
var Buffer$52 = import_buffer2.default.Buffer;
var writeIEEE754$12 = float_parser2.writeIEEE754;
var normalizedFunctionString$12 = utils2.normalizedFunctionString;
var regexp$12 = /\x00/;
var ignoreKeys2 = /* @__PURE__ */ new Set(["$db", "$ref", "$id", "$clusterTime"]);
var isDate$12 = function isDate4(d) {
  return _typeof$32(d) === "object" && Object.prototype.toString.call(d) === "[object Date]";
};
var isRegExp$12 = function isRegExp4(d) {
  return Object.prototype.toString.call(d) === "[object RegExp]";
};
function serializeString2(buffer$$1, key, value2, index, isArray3) {
  buffer$$1[index++] = constants2.BSON_DATA_STRING;
  var numberOfWrittenBytes = !isArray3 ? buffer$$1.write(key, index, "utf8") : buffer$$1.write(key, index, "ascii");
  index = index + numberOfWrittenBytes + 1;
  buffer$$1[index - 1] = 0;
  var size = buffer$$1.write(value2, index + 4, "utf8");
  buffer$$1[index + 3] = size + 1 >> 24 & 255;
  buffer$$1[index + 2] = size + 1 >> 16 & 255;
  buffer$$1[index + 1] = size + 1 >> 8 & 255;
  buffer$$1[index] = size + 1 & 255;
  index = index + 4 + size;
  buffer$$1[index++] = 0;
  return index;
}
function serializeNumber2(buffer$$1, key, value2, index, isArray3) {
  if (Math.floor(value2) === value2 && value2 >= constants2.JS_INT_MIN && value2 <= constants2.JS_INT_MAX) {
    if (value2 >= constants2.BSON_INT32_MIN && value2 <= constants2.BSON_INT32_MAX) {
      buffer$$1[index++] = constants2.BSON_DATA_INT;
      var numberOfWrittenBytes = !isArray3 ? buffer$$1.write(key, index, "utf8") : buffer$$1.write(key, index, "ascii");
      index = index + numberOfWrittenBytes;
      buffer$$1[index++] = 0;
      buffer$$1[index++] = value2 & 255;
      buffer$$1[index++] = value2 >> 8 & 255;
      buffer$$1[index++] = value2 >> 16 & 255;
      buffer$$1[index++] = value2 >> 24 & 255;
    } else if (value2 >= constants2.JS_INT_MIN && value2 <= constants2.JS_INT_MAX) {
      buffer$$1[index++] = constants2.BSON_DATA_NUMBER;
      var _numberOfWrittenBytes = !isArray3 ? buffer$$1.write(key, index, "utf8") : buffer$$1.write(key, index, "ascii");
      index = index + _numberOfWrittenBytes;
      buffer$$1[index++] = 0;
      writeIEEE754$12(buffer$$1, value2, index, "little", 52, 8);
      index = index + 8;
    } else {
      buffer$$1[index++] = constants2.BSON_DATA_LONG;
      var _numberOfWrittenBytes2 = !isArray3 ? buffer$$1.write(key, index, "utf8") : buffer$$1.write(key, index, "ascii");
      index = index + _numberOfWrittenBytes2;
      buffer$$1[index++] = 0;
      var longVal = long_12.fromNumber(value2);
      var lowBits = longVal.getLowBits();
      var highBits = longVal.getHighBits();
      buffer$$1[index++] = lowBits & 255;
      buffer$$1[index++] = lowBits >> 8 & 255;
      buffer$$1[index++] = lowBits >> 16 & 255;
      buffer$$1[index++] = lowBits >> 24 & 255;
      buffer$$1[index++] = highBits & 255;
      buffer$$1[index++] = highBits >> 8 & 255;
      buffer$$1[index++] = highBits >> 16 & 255;
      buffer$$1[index++] = highBits >> 24 & 255;
    }
  } else {
    buffer$$1[index++] = constants2.BSON_DATA_NUMBER;
    var _numberOfWrittenBytes3 = !isArray3 ? buffer$$1.write(key, index, "utf8") : buffer$$1.write(key, index, "ascii");
    index = index + _numberOfWrittenBytes3;
    buffer$$1[index++] = 0;
    writeIEEE754$12(buffer$$1, value2, index, "little", 52, 8);
    index = index + 8;
  }
  return index;
}
function serializeNull2(buffer$$1, key, value2, index, isArray3) {
  buffer$$1[index++] = constants2.BSON_DATA_NULL;
  var numberOfWrittenBytes = !isArray3 ? buffer$$1.write(key, index, "utf8") : buffer$$1.write(key, index, "ascii");
  index = index + numberOfWrittenBytes;
  buffer$$1[index++] = 0;
  return index;
}
function serializeBoolean2(buffer$$1, key, value2, index, isArray3) {
  buffer$$1[index++] = constants2.BSON_DATA_BOOLEAN;
  var numberOfWrittenBytes = !isArray3 ? buffer$$1.write(key, index, "utf8") : buffer$$1.write(key, index, "ascii");
  index = index + numberOfWrittenBytes;
  buffer$$1[index++] = 0;
  buffer$$1[index++] = value2 ? 1 : 0;
  return index;
}
function serializeDate2(buffer$$1, key, value2, index, isArray3) {
  buffer$$1[index++] = constants2.BSON_DATA_DATE;
  var numberOfWrittenBytes = !isArray3 ? buffer$$1.write(key, index, "utf8") : buffer$$1.write(key, index, "ascii");
  index = index + numberOfWrittenBytes;
  buffer$$1[index++] = 0;
  var dateInMilis = long_12.fromNumber(value2.getTime());
  var lowBits = dateInMilis.getLowBits();
  var highBits = dateInMilis.getHighBits();
  buffer$$1[index++] = lowBits & 255;
  buffer$$1[index++] = lowBits >> 8 & 255;
  buffer$$1[index++] = lowBits >> 16 & 255;
  buffer$$1[index++] = lowBits >> 24 & 255;
  buffer$$1[index++] = highBits & 255;
  buffer$$1[index++] = highBits >> 8 & 255;
  buffer$$1[index++] = highBits >> 16 & 255;
  buffer$$1[index++] = highBits >> 24 & 255;
  return index;
}
function serializeRegExp2(buffer$$1, key, value2, index, isArray3) {
  buffer$$1[index++] = constants2.BSON_DATA_REGEXP;
  var numberOfWrittenBytes = !isArray3 ? buffer$$1.write(key, index, "utf8") : buffer$$1.write(key, index, "ascii");
  index = index + numberOfWrittenBytes;
  buffer$$1[index++] = 0;
  if (value2.source && value2.source.match(regexp$12) != null) {
    throw Error("value " + value2.source + " must not contain null bytes");
  }
  index = index + buffer$$1.write(value2.source, index, "utf8");
  buffer$$1[index++] = 0;
  if (value2.ignoreCase)
    buffer$$1[index++] = 105;
  if (value2.global)
    buffer$$1[index++] = 115;
  if (value2.multiline)
    buffer$$1[index++] = 109;
  buffer$$1[index++] = 0;
  return index;
}
function serializeBSONRegExp2(buffer$$1, key, value2, index, isArray3) {
  buffer$$1[index++] = constants2.BSON_DATA_REGEXP;
  var numberOfWrittenBytes = !isArray3 ? buffer$$1.write(key, index, "utf8") : buffer$$1.write(key, index, "ascii");
  index = index + numberOfWrittenBytes;
  buffer$$1[index++] = 0;
  if (value2.pattern.match(regexp$12) != null) {
    throw Error("pattern " + value2.pattern + " must not contain null bytes");
  }
  index = index + buffer$$1.write(value2.pattern, index, "utf8");
  buffer$$1[index++] = 0;
  index = index + buffer$$1.write(value2.options.split("").sort().join(""), index, "utf8");
  buffer$$1[index++] = 0;
  return index;
}
function serializeMinMax2(buffer$$1, key, value2, index, isArray3) {
  if (value2 === null) {
    buffer$$1[index++] = constants2.BSON_DATA_NULL;
  } else if (value2._bsontype === "MinKey") {
    buffer$$1[index++] = constants2.BSON_DATA_MIN_KEY;
  } else {
    buffer$$1[index++] = constants2.BSON_DATA_MAX_KEY;
  }
  var numberOfWrittenBytes = !isArray3 ? buffer$$1.write(key, index, "utf8") : buffer$$1.write(key, index, "ascii");
  index = index + numberOfWrittenBytes;
  buffer$$1[index++] = 0;
  return index;
}
function serializeObjectId2(buffer$$1, key, value2, index, isArray3) {
  buffer$$1[index++] = constants2.BSON_DATA_OID;
  var numberOfWrittenBytes = !isArray3 ? buffer$$1.write(key, index, "utf8") : buffer$$1.write(key, index, "ascii");
  index = index + numberOfWrittenBytes;
  buffer$$1[index++] = 0;
  if (typeof value2.id === "string") {
    buffer$$1.write(value2.id, index, "binary");
  } else if (value2.id && value2.id.copy) {
    value2.id.copy(buffer$$1, index, 0, 12);
  } else {
    throw new TypeError("object [" + JSON.stringify(value2) + "] is not a valid ObjectId");
  }
  return index + 12;
}
function serializeBuffer2(buffer$$1, key, value2, index, isArray3) {
  buffer$$1[index++] = constants2.BSON_DATA_BINARY;
  var numberOfWrittenBytes = !isArray3 ? buffer$$1.write(key, index, "utf8") : buffer$$1.write(key, index, "ascii");
  index = index + numberOfWrittenBytes;
  buffer$$1[index++] = 0;
  var size = value2.length;
  buffer$$1[index++] = size & 255;
  buffer$$1[index++] = size >> 8 & 255;
  buffer$$1[index++] = size >> 16 & 255;
  buffer$$1[index++] = size >> 24 & 255;
  buffer$$1[index++] = constants2.BSON_BINARY_SUBTYPE_DEFAULT;
  value2.copy(buffer$$1, index, 0, size);
  index = index + size;
  return index;
}
function serializeObject2(buffer$$1, key, value2, index, checkKeys, depth, serializeFunctions, ignoreUndefined, isArray3, path) {
  for (var i3 = 0; i3 < path.length; i3++) {
    if (path[i3] === value2)
      throw new Error("cyclic dependency detected");
  }
  path.push(value2);
  buffer$$1[index++] = Array.isArray(value2) ? constants2.BSON_DATA_ARRAY : constants2.BSON_DATA_OBJECT;
  var numberOfWrittenBytes = !isArray3 ? buffer$$1.write(key, index, "utf8") : buffer$$1.write(key, index, "ascii");
  index = index + numberOfWrittenBytes;
  buffer$$1[index++] = 0;
  var endIndex = serializeInto2(buffer$$1, value2, checkKeys, index, depth + 1, serializeFunctions, ignoreUndefined, path);
  path.pop();
  return endIndex;
}
function serializeDecimal1282(buffer$$1, key, value2, index, isArray3) {
  buffer$$1[index++] = constants2.BSON_DATA_DECIMAL128;
  var numberOfWrittenBytes = !isArray3 ? buffer$$1.write(key, index, "utf8") : buffer$$1.write(key, index, "ascii");
  index = index + numberOfWrittenBytes;
  buffer$$1[index++] = 0;
  value2.bytes.copy(buffer$$1, index, 0, 16);
  return index + 16;
}
function serializeLong2(buffer$$1, key, value2, index, isArray3) {
  buffer$$1[index++] = value2._bsontype === "Long" ? constants2.BSON_DATA_LONG : constants2.BSON_DATA_TIMESTAMP;
  var numberOfWrittenBytes = !isArray3 ? buffer$$1.write(key, index, "utf8") : buffer$$1.write(key, index, "ascii");
  index = index + numberOfWrittenBytes;
  buffer$$1[index++] = 0;
  var lowBits = value2.getLowBits();
  var highBits = value2.getHighBits();
  buffer$$1[index++] = lowBits & 255;
  buffer$$1[index++] = lowBits >> 8 & 255;
  buffer$$1[index++] = lowBits >> 16 & 255;
  buffer$$1[index++] = lowBits >> 24 & 255;
  buffer$$1[index++] = highBits & 255;
  buffer$$1[index++] = highBits >> 8 & 255;
  buffer$$1[index++] = highBits >> 16 & 255;
  buffer$$1[index++] = highBits >> 24 & 255;
  return index;
}
function serializeInt322(buffer$$1, key, value2, index, isArray3) {
  buffer$$1[index++] = constants2.BSON_DATA_INT;
  var numberOfWrittenBytes = !isArray3 ? buffer$$1.write(key, index, "utf8") : buffer$$1.write(key, index, "ascii");
  index = index + numberOfWrittenBytes;
  buffer$$1[index++] = 0;
  buffer$$1[index++] = value2 & 255;
  buffer$$1[index++] = value2 >> 8 & 255;
  buffer$$1[index++] = value2 >> 16 & 255;
  buffer$$1[index++] = value2 >> 24 & 255;
  return index;
}
function serializeDouble2(buffer$$1, key, value2, index, isArray3) {
  buffer$$1[index++] = constants2.BSON_DATA_NUMBER;
  var numberOfWrittenBytes = !isArray3 ? buffer$$1.write(key, index, "utf8") : buffer$$1.write(key, index, "ascii");
  index = index + numberOfWrittenBytes;
  buffer$$1[index++] = 0;
  writeIEEE754$12(buffer$$1, value2.value, index, "little", 52, 8);
  index = index + 8;
  return index;
}
function serializeFunction2(buffer$$1, key, value2, index, checkKeys, depth, isArray3) {
  buffer$$1[index++] = constants2.BSON_DATA_CODE;
  var numberOfWrittenBytes = !isArray3 ? buffer$$1.write(key, index, "utf8") : buffer$$1.write(key, index, "ascii");
  index = index + numberOfWrittenBytes;
  buffer$$1[index++] = 0;
  var functionString2 = normalizedFunctionString$12(value2);
  var size = buffer$$1.write(functionString2, index + 4, "utf8") + 1;
  buffer$$1[index] = size & 255;
  buffer$$1[index + 1] = size >> 8 & 255;
  buffer$$1[index + 2] = size >> 16 & 255;
  buffer$$1[index + 3] = size >> 24 & 255;
  index = index + 4 + size - 1;
  buffer$$1[index++] = 0;
  return index;
}
function serializeCode2(buffer$$1, key, value2, index, checkKeys, depth, serializeFunctions, ignoreUndefined, isArray3) {
  if (value2.scope && _typeof$32(value2.scope) === "object") {
    buffer$$1[index++] = constants2.BSON_DATA_CODE_W_SCOPE;
    var numberOfWrittenBytes = !isArray3 ? buffer$$1.write(key, index, "utf8") : buffer$$1.write(key, index, "ascii");
    index = index + numberOfWrittenBytes;
    buffer$$1[index++] = 0;
    var startIndex = index;
    var functionString2 = typeof value2.code === "string" ? value2.code : value2.code.toString();
    index = index + 4;
    var codeSize = buffer$$1.write(functionString2, index + 4, "utf8") + 1;
    buffer$$1[index] = codeSize & 255;
    buffer$$1[index + 1] = codeSize >> 8 & 255;
    buffer$$1[index + 2] = codeSize >> 16 & 255;
    buffer$$1[index + 3] = codeSize >> 24 & 255;
    buffer$$1[index + 4 + codeSize - 1] = 0;
    index = index + codeSize + 4;
    var endIndex = serializeInto2(buffer$$1, value2.scope, checkKeys, index, depth + 1, serializeFunctions, ignoreUndefined);
    index = endIndex - 1;
    var totalSize = endIndex - startIndex;
    buffer$$1[startIndex++] = totalSize & 255;
    buffer$$1[startIndex++] = totalSize >> 8 & 255;
    buffer$$1[startIndex++] = totalSize >> 16 & 255;
    buffer$$1[startIndex++] = totalSize >> 24 & 255;
    buffer$$1[index++] = 0;
  } else {
    buffer$$1[index++] = constants2.BSON_DATA_CODE;
    var _numberOfWrittenBytes4 = !isArray3 ? buffer$$1.write(key, index, "utf8") : buffer$$1.write(key, index, "ascii");
    index = index + _numberOfWrittenBytes4;
    buffer$$1[index++] = 0;
    var _functionString = value2.code.toString();
    var size = buffer$$1.write(_functionString, index + 4, "utf8") + 1;
    buffer$$1[index] = size & 255;
    buffer$$1[index + 1] = size >> 8 & 255;
    buffer$$1[index + 2] = size >> 16 & 255;
    buffer$$1[index + 3] = size >> 24 & 255;
    index = index + 4 + size - 1;
    buffer$$1[index++] = 0;
  }
  return index;
}
function serializeBinary2(buffer$$1, key, value2, index, isArray3) {
  buffer$$1[index++] = constants2.BSON_DATA_BINARY;
  var numberOfWrittenBytes = !isArray3 ? buffer$$1.write(key, index, "utf8") : buffer$$1.write(key, index, "ascii");
  index = index + numberOfWrittenBytes;
  buffer$$1[index++] = 0;
  var data = value2.value(true);
  var size = value2.position;
  if (value2.sub_type === binary2.SUBTYPE_BYTE_ARRAY)
    size = size + 4;
  buffer$$1[index++] = size & 255;
  buffer$$1[index++] = size >> 8 & 255;
  buffer$$1[index++] = size >> 16 & 255;
  buffer$$1[index++] = size >> 24 & 255;
  buffer$$1[index++] = value2.sub_type;
  if (value2.sub_type === binary2.SUBTYPE_BYTE_ARRAY) {
    size = size - 4;
    buffer$$1[index++] = size & 255;
    buffer$$1[index++] = size >> 8 & 255;
    buffer$$1[index++] = size >> 16 & 255;
    buffer$$1[index++] = size >> 24 & 255;
  }
  data.copy(buffer$$1, index, 0, value2.position);
  index = index + value2.position;
  return index;
}
function serializeSymbol2(buffer$$1, key, value2, index, isArray3) {
  buffer$$1[index++] = constants2.BSON_DATA_SYMBOL;
  var numberOfWrittenBytes = !isArray3 ? buffer$$1.write(key, index, "utf8") : buffer$$1.write(key, index, "ascii");
  index = index + numberOfWrittenBytes;
  buffer$$1[index++] = 0;
  var size = buffer$$1.write(value2.value, index + 4, "utf8") + 1;
  buffer$$1[index] = size & 255;
  buffer$$1[index + 1] = size >> 8 & 255;
  buffer$$1[index + 2] = size >> 16 & 255;
  buffer$$1[index + 3] = size >> 24 & 255;
  index = index + 4 + size - 1;
  buffer$$1[index++] = 0;
  return index;
}
function serializeDBRef2(buffer$$1, key, value2, index, depth, serializeFunctions, isArray3) {
  buffer$$1[index++] = constants2.BSON_DATA_OBJECT;
  var numberOfWrittenBytes = !isArray3 ? buffer$$1.write(key, index, "utf8") : buffer$$1.write(key, index, "ascii");
  index = index + numberOfWrittenBytes;
  buffer$$1[index++] = 0;
  var startIndex = index;
  var endIndex;
  var output = {
    $ref: value2.collection || value2.namespace,
    // "namespace" was what library 1.x called "collection"
    $id: value2.oid
  };
  if (value2.db != null)
    output.$db = value2.db;
  output = Object.assign(output, value2.fields);
  endIndex = serializeInto2(buffer$$1, output, false, index, depth + 1, serializeFunctions);
  var size = endIndex - startIndex;
  buffer$$1[startIndex++] = size & 255;
  buffer$$1[startIndex++] = size >> 8 & 255;
  buffer$$1[startIndex++] = size >> 16 & 255;
  buffer$$1[startIndex++] = size >> 24 & 255;
  return endIndex;
}
function serializeInto2(buffer$$1, object2, checkKeys, startingIndex, depth, serializeFunctions, ignoreUndefined, path) {
  startingIndex = startingIndex || 0;
  path = path || [];
  path.push(object2);
  var index = startingIndex + 4;
  if (Array.isArray(object2)) {
    for (var i3 = 0; i3 < object2.length; i3++) {
      var key = "" + i3;
      var value2 = object2[i3];
      if (value2 && value2.toBSON) {
        if (typeof value2.toBSON !== "function")
          throw new TypeError("toBSON is not a function");
        value2 = value2.toBSON();
      }
      var type = _typeof$32(value2);
      if (type === "string") {
        index = serializeString2(buffer$$1, key, value2, index, true);
      } else if (type === "number") {
        index = serializeNumber2(buffer$$1, key, value2, index, true);
      } else if (type === "boolean") {
        index = serializeBoolean2(buffer$$1, key, value2, index, true);
      } else if (value2 instanceof Date || isDate$12(value2)) {
        index = serializeDate2(buffer$$1, key, value2, index, true);
      } else if (value2 === void 0) {
        index = serializeNull2(buffer$$1, key, value2, index, true);
      } else if (value2 === null) {
        index = serializeNull2(buffer$$1, key, value2, index, true);
      } else if (value2["_bsontype"] === "ObjectId" || value2["_bsontype"] === "ObjectID") {
        index = serializeObjectId2(buffer$$1, key, value2, index, true);
      } else if (Buffer$52.isBuffer(value2)) {
        index = serializeBuffer2(buffer$$1, key, value2, index, true);
      } else if (value2 instanceof RegExp || isRegExp$12(value2)) {
        index = serializeRegExp2(buffer$$1, key, value2, index, true);
      } else if (type === "object" && value2["_bsontype"] == null) {
        index = serializeObject2(buffer$$1, key, value2, index, checkKeys, depth, serializeFunctions, ignoreUndefined, true, path);
      } else if (type === "object" && value2["_bsontype"] === "Decimal128") {
        index = serializeDecimal1282(buffer$$1, key, value2, index, true);
      } else if (value2["_bsontype"] === "Long" || value2["_bsontype"] === "Timestamp") {
        index = serializeLong2(buffer$$1, key, value2, index, true);
      } else if (value2["_bsontype"] === "Double") {
        index = serializeDouble2(buffer$$1, key, value2, index, true);
      } else if (typeof value2 === "function" && serializeFunctions) {
        index = serializeFunction2(buffer$$1, key, value2, index, checkKeys, depth, serializeFunctions, true);
      } else if (value2["_bsontype"] === "Code") {
        index = serializeCode2(buffer$$1, key, value2, index, checkKeys, depth, serializeFunctions, ignoreUndefined, true);
      } else if (value2["_bsontype"] === "Binary") {
        index = serializeBinary2(buffer$$1, key, value2, index, true);
      } else if (value2["_bsontype"] === "Symbol") {
        index = serializeSymbol2(buffer$$1, key, value2, index, true);
      } else if (value2["_bsontype"] === "DBRef") {
        index = serializeDBRef2(buffer$$1, key, value2, index, depth, serializeFunctions, true);
      } else if (value2["_bsontype"] === "BSONRegExp") {
        index = serializeBSONRegExp2(buffer$$1, key, value2, index, true);
      } else if (value2["_bsontype"] === "Int32") {
        index = serializeInt322(buffer$$1, key, value2, index, true);
      } else if (value2["_bsontype"] === "MinKey" || value2["_bsontype"] === "MaxKey") {
        index = serializeMinMax2(buffer$$1, key, value2, index, true);
      } else if (typeof value2["_bsontype"] !== "undefined") {
        throw new TypeError("Unrecognized or invalid _bsontype: " + value2["_bsontype"]);
      }
    }
  } else if (object2 instanceof map2) {
    var iterator = object2.entries();
    var done = false;
    while (!done) {
      var entry = iterator.next();
      done = entry.done;
      if (done)
        continue;
      var _key = entry.value[0];
      var _value = entry.value[1];
      var _type = _typeof$32(_value);
      if (typeof _key === "string" && !ignoreKeys2.has(_key)) {
        if (_key.match(regexp$12) != null) {
          throw Error("key " + _key + " must not contain null bytes");
        }
        if (checkKeys) {
          if ("$" === _key[0]) {
            throw Error("key " + _key + " must not start with '$'");
          } else if (~_key.indexOf(".")) {
            throw Error("key " + _key + " must not contain '.'");
          }
        }
      }
      if (_type === "string") {
        index = serializeString2(buffer$$1, _key, _value, index);
      } else if (_type === "number") {
        index = serializeNumber2(buffer$$1, _key, _value, index);
      } else if (_type === "boolean") {
        index = serializeBoolean2(buffer$$1, _key, _value, index);
      } else if (_value instanceof Date || isDate$12(_value)) {
        index = serializeDate2(buffer$$1, _key, _value, index);
      } else if (_value === null || _value === void 0 && ignoreUndefined === false) {
        index = serializeNull2(buffer$$1, _key, _value, index);
      } else if (_value["_bsontype"] === "ObjectId" || _value["_bsontype"] === "ObjectID") {
        index = serializeObjectId2(buffer$$1, _key, _value, index);
      } else if (Buffer$52.isBuffer(_value)) {
        index = serializeBuffer2(buffer$$1, _key, _value, index);
      } else if (_value instanceof RegExp || isRegExp$12(_value)) {
        index = serializeRegExp2(buffer$$1, _key, _value, index);
      } else if (_type === "object" && _value["_bsontype"] == null) {
        index = serializeObject2(buffer$$1, _key, _value, index, checkKeys, depth, serializeFunctions, ignoreUndefined, false, path);
      } else if (_type === "object" && _value["_bsontype"] === "Decimal128") {
        index = serializeDecimal1282(buffer$$1, _key, _value, index);
      } else if (_value["_bsontype"] === "Long" || _value["_bsontype"] === "Timestamp") {
        index = serializeLong2(buffer$$1, _key, _value, index);
      } else if (_value["_bsontype"] === "Double") {
        index = serializeDouble2(buffer$$1, _key, _value, index);
      } else if (_value["_bsontype"] === "Code") {
        index = serializeCode2(buffer$$1, _key, _value, index, checkKeys, depth, serializeFunctions, ignoreUndefined);
      } else if (typeof _value === "function" && serializeFunctions) {
        index = serializeFunction2(buffer$$1, _key, _value, index, checkKeys, depth, serializeFunctions);
      } else if (_value["_bsontype"] === "Binary") {
        index = serializeBinary2(buffer$$1, _key, _value, index);
      } else if (_value["_bsontype"] === "Symbol") {
        index = serializeSymbol2(buffer$$1, _key, _value, index);
      } else if (_value["_bsontype"] === "DBRef") {
        index = serializeDBRef2(buffer$$1, _key, _value, index, depth, serializeFunctions);
      } else if (_value["_bsontype"] === "BSONRegExp") {
        index = serializeBSONRegExp2(buffer$$1, _key, _value, index);
      } else if (_value["_bsontype"] === "Int32") {
        index = serializeInt322(buffer$$1, _key, _value, index);
      } else if (_value["_bsontype"] === "MinKey" || _value["_bsontype"] === "MaxKey") {
        index = serializeMinMax2(buffer$$1, _key, _value, index);
      } else if (typeof _value["_bsontype"] !== "undefined") {
        throw new TypeError("Unrecognized or invalid _bsontype: " + _value["_bsontype"]);
      }
    }
  } else {
    if (object2.toBSON) {
      if (typeof object2.toBSON !== "function")
        throw new TypeError("toBSON is not a function");
      object2 = object2.toBSON();
      if (object2 != null && _typeof$32(object2) !== "object")
        throw new TypeError("toBSON function did not return an object");
    }
    for (var _key2 in object2) {
      var _value2 = object2[_key2];
      if (_value2 && _value2.toBSON) {
        if (typeof _value2.toBSON !== "function")
          throw new TypeError("toBSON is not a function");
        _value2 = _value2.toBSON();
      }
      var _type2 = _typeof$32(_value2);
      if (typeof _key2 === "string" && !ignoreKeys2.has(_key2)) {
        if (_key2.match(regexp$12) != null) {
          throw Error("key " + _key2 + " must not contain null bytes");
        }
        if (checkKeys) {
          if ("$" === _key2[0]) {
            throw Error("key " + _key2 + " must not start with '$'");
          } else if (~_key2.indexOf(".")) {
            throw Error("key " + _key2 + " must not contain '.'");
          }
        }
      }
      if (_type2 === "string") {
        index = serializeString2(buffer$$1, _key2, _value2, index);
      } else if (_type2 === "number") {
        index = serializeNumber2(buffer$$1, _key2, _value2, index);
      } else if (_type2 === "boolean") {
        index = serializeBoolean2(buffer$$1, _key2, _value2, index);
      } else if (_value2 instanceof Date || isDate$12(_value2)) {
        index = serializeDate2(buffer$$1, _key2, _value2, index);
      } else if (_value2 === void 0) {
        if (ignoreUndefined === false)
          index = serializeNull2(buffer$$1, _key2, _value2, index);
      } else if (_value2 === null) {
        index = serializeNull2(buffer$$1, _key2, _value2, index);
      } else if (_value2["_bsontype"] === "ObjectId" || _value2["_bsontype"] === "ObjectID") {
        index = serializeObjectId2(buffer$$1, _key2, _value2, index);
      } else if (Buffer$52.isBuffer(_value2)) {
        index = serializeBuffer2(buffer$$1, _key2, _value2, index);
      } else if (_value2 instanceof RegExp || isRegExp$12(_value2)) {
        index = serializeRegExp2(buffer$$1, _key2, _value2, index);
      } else if (_type2 === "object" && _value2["_bsontype"] == null) {
        index = serializeObject2(buffer$$1, _key2, _value2, index, checkKeys, depth, serializeFunctions, ignoreUndefined, false, path);
      } else if (_type2 === "object" && _value2["_bsontype"] === "Decimal128") {
        index = serializeDecimal1282(buffer$$1, _key2, _value2, index);
      } else if (_value2["_bsontype"] === "Long" || _value2["_bsontype"] === "Timestamp") {
        index = serializeLong2(buffer$$1, _key2, _value2, index);
      } else if (_value2["_bsontype"] === "Double") {
        index = serializeDouble2(buffer$$1, _key2, _value2, index);
      } else if (_value2["_bsontype"] === "Code") {
        index = serializeCode2(buffer$$1, _key2, _value2, index, checkKeys, depth, serializeFunctions, ignoreUndefined);
      } else if (typeof _value2 === "function" && serializeFunctions) {
        index = serializeFunction2(buffer$$1, _key2, _value2, index, checkKeys, depth, serializeFunctions);
      } else if (_value2["_bsontype"] === "Binary") {
        index = serializeBinary2(buffer$$1, _key2, _value2, index);
      } else if (_value2["_bsontype"] === "Symbol") {
        index = serializeSymbol2(buffer$$1, _key2, _value2, index);
      } else if (_value2["_bsontype"] === "DBRef") {
        index = serializeDBRef2(buffer$$1, _key2, _value2, index, depth, serializeFunctions);
      } else if (_value2["_bsontype"] === "BSONRegExp") {
        index = serializeBSONRegExp2(buffer$$1, _key2, _value2, index);
      } else if (_value2["_bsontype"] === "Int32") {
        index = serializeInt322(buffer$$1, _key2, _value2, index);
      } else if (_value2["_bsontype"] === "MinKey" || _value2["_bsontype"] === "MaxKey") {
        index = serializeMinMax2(buffer$$1, _key2, _value2, index);
      } else if (typeof _value2["_bsontype"] !== "undefined") {
        throw new TypeError("Unrecognized or invalid _bsontype: " + _value2["_bsontype"]);
      }
    }
  }
  path.pop();
  buffer$$1[index++] = 0;
  var size = index - startingIndex;
  buffer$$1[startingIndex++] = size & 255;
  buffer$$1[startingIndex++] = size >> 8 & 255;
  buffer$$1[startingIndex++] = size >> 16 & 255;
  buffer$$1[startingIndex++] = size >> 24 & 255;
  return index;
}
var serializer2 = serializeInto2;
function _typeof$42(obj) {
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof$42 = function _typeof3(obj2) {
      return typeof obj2;
    };
  } else {
    _typeof$42 = function _typeof3(obj2) {
      return obj2 && typeof Symbol === "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
    };
  }
  return _typeof$42(obj);
}
var Buffer$62 = import_buffer2.default.Buffer;
var normalizedFunctionString$22 = utils2.normalizedFunctionString;
function isDate$22(d) {
  return _typeof$42(d) === "object" && Object.prototype.toString.call(d) === "[object Date]";
}
function calculateObjectSize2(object2, serializeFunctions, ignoreUndefined) {
  var totalLength = 4 + 1;
  if (Array.isArray(object2)) {
    for (var i3 = 0; i3 < object2.length; i3++) {
      totalLength += calculateElement2(i3.toString(), object2[i3], serializeFunctions, true, ignoreUndefined);
    }
  } else {
    if (object2.toBSON) {
      object2 = object2.toBSON();
    }
    for (var key in object2) {
      totalLength += calculateElement2(key, object2[key], serializeFunctions, false, ignoreUndefined);
    }
  }
  return totalLength;
}
function calculateElement2(name, value2, serializeFunctions, isArray3, ignoreUndefined) {
  if (value2 && value2.toBSON) {
    value2 = value2.toBSON();
  }
  switch (_typeof$42(value2)) {
    case "string":
      return 1 + Buffer$62.byteLength(name, "utf8") + 1 + 4 + Buffer$62.byteLength(value2, "utf8") + 1;
    case "number":
      if (Math.floor(value2) === value2 && value2 >= constants2.JS_INT_MIN && value2 <= constants2.JS_INT_MAX) {
        if (value2 >= constants2.BSON_INT32_MIN && value2 <= constants2.BSON_INT32_MAX) {
          return (name != null ? Buffer$62.byteLength(name, "utf8") + 1 : 0) + (4 + 1);
        } else {
          return (name != null ? Buffer$62.byteLength(name, "utf8") + 1 : 0) + (8 + 1);
        }
      } else {
        return (name != null ? Buffer$62.byteLength(name, "utf8") + 1 : 0) + (8 + 1);
      }
    case "undefined":
      if (isArray3 || !ignoreUndefined)
        return (name != null ? Buffer$62.byteLength(name, "utf8") + 1 : 0) + 1;
      return 0;
    case "boolean":
      return (name != null ? Buffer$62.byteLength(name, "utf8") + 1 : 0) + (1 + 1);
    case "object":
      if (value2 == null || value2["_bsontype"] === "MinKey" || value2["_bsontype"] === "MaxKey") {
        return (name != null ? Buffer$62.byteLength(name, "utf8") + 1 : 0) + 1;
      } else if (value2["_bsontype"] === "ObjectId" || value2["_bsontype"] === "ObjectID") {
        return (name != null ? Buffer$62.byteLength(name, "utf8") + 1 : 0) + (12 + 1);
      } else if (value2 instanceof Date || isDate$22(value2)) {
        return (name != null ? Buffer$62.byteLength(name, "utf8") + 1 : 0) + (8 + 1);
      } else if (typeof Buffer$62 !== "undefined" && Buffer$62.isBuffer(value2)) {
        return (name != null ? Buffer$62.byteLength(name, "utf8") + 1 : 0) + (1 + 4 + 1) + value2.length;
      } else if (value2["_bsontype"] === "Long" || value2["_bsontype"] === "Double" || value2["_bsontype"] === "Timestamp") {
        return (name != null ? Buffer$62.byteLength(name, "utf8") + 1 : 0) + (8 + 1);
      } else if (value2["_bsontype"] === "Decimal128") {
        return (name != null ? Buffer$62.byteLength(name, "utf8") + 1 : 0) + (16 + 1);
      } else if (value2["_bsontype"] === "Code") {
        if (value2.scope != null && Object.keys(value2.scope).length > 0) {
          return (name != null ? Buffer$62.byteLength(name, "utf8") + 1 : 0) + 1 + 4 + 4 + Buffer$62.byteLength(value2.code.toString(), "utf8") + 1 + calculateObjectSize2(value2.scope, serializeFunctions, ignoreUndefined);
        } else {
          return (name != null ? Buffer$62.byteLength(name, "utf8") + 1 : 0) + 1 + 4 + Buffer$62.byteLength(value2.code.toString(), "utf8") + 1;
        }
      } else if (value2["_bsontype"] === "Binary") {
        if (value2.sub_type === binary2.SUBTYPE_BYTE_ARRAY) {
          return (name != null ? Buffer$62.byteLength(name, "utf8") + 1 : 0) + (value2.position + 1 + 4 + 1 + 4);
        } else {
          return (name != null ? Buffer$62.byteLength(name, "utf8") + 1 : 0) + (value2.position + 1 + 4 + 1);
        }
      } else if (value2["_bsontype"] === "Symbol") {
        return (name != null ? Buffer$62.byteLength(name, "utf8") + 1 : 0) + Buffer$62.byteLength(value2.value, "utf8") + 4 + 1 + 1;
      } else if (value2["_bsontype"] === "DBRef") {
        var ordered_values = Object.assign({
          $ref: value2.collection,
          $id: value2.oid
        }, value2.fields);
        if (value2.db != null) {
          ordered_values["$db"] = value2.db;
        }
        return (name != null ? Buffer$62.byteLength(name, "utf8") + 1 : 0) + 1 + calculateObjectSize2(ordered_values, serializeFunctions, ignoreUndefined);
      } else if (value2 instanceof RegExp || Object.prototype.toString.call(value2) === "[object RegExp]") {
        return (name != null ? Buffer$62.byteLength(name, "utf8") + 1 : 0) + 1 + Buffer$62.byteLength(value2.source, "utf8") + 1 + (value2.global ? 1 : 0) + (value2.ignoreCase ? 1 : 0) + (value2.multiline ? 1 : 0) + 1;
      } else if (value2["_bsontype"] === "BSONRegExp") {
        return (name != null ? Buffer$62.byteLength(name, "utf8") + 1 : 0) + 1 + Buffer$62.byteLength(value2.pattern, "utf8") + 1 + Buffer$62.byteLength(value2.options, "utf8") + 1;
      } else {
        return (name != null ? Buffer$62.byteLength(name, "utf8") + 1 : 0) + calculateObjectSize2(value2, serializeFunctions, ignoreUndefined) + 1;
      }
    case "function":
      if (value2 instanceof RegExp || Object.prototype.toString.call(value2) === "[object RegExp]" || String.call(value2) === "[object RegExp]") {
        return (name != null ? Buffer$62.byteLength(name, "utf8") + 1 : 0) + 1 + Buffer$62.byteLength(value2.source, "utf8") + 1 + (value2.global ? 1 : 0) + (value2.ignoreCase ? 1 : 0) + (value2.multiline ? 1 : 0) + 1;
      } else {
        if (serializeFunctions && value2.scope != null && Object.keys(value2.scope).length > 0) {
          return (name != null ? Buffer$62.byteLength(name, "utf8") + 1 : 0) + 1 + 4 + 4 + Buffer$62.byteLength(normalizedFunctionString$22(value2), "utf8") + 1 + calculateObjectSize2(value2.scope, serializeFunctions, ignoreUndefined);
        } else if (serializeFunctions) {
          return (name != null ? Buffer$62.byteLength(name, "utf8") + 1 : 0) + 1 + 4 + Buffer$62.byteLength(normalizedFunctionString$22(value2), "utf8") + 1;
        }
      }
  }
  return 0;
}
var calculate_size2 = calculateObjectSize2;
var Buffer$72 = import_buffer2.default.Buffer;
var ensure_buffer2 = function ensureBuffer2(potentialBuffer) {
  if (potentialBuffer instanceof Buffer$72) {
    return potentialBuffer;
  }
  if (potentialBuffer instanceof Uint8Array) {
    return Buffer$72.from(potentialBuffer.buffer);
  }
  throw new TypeError("Must use either Buffer or Uint8Array");
};
var Buffer$82 = import_buffer2.default.Buffer;
var MAXSIZE2 = 1024 * 1024 * 17;
var buffer$12 = Buffer$82.alloc(MAXSIZE2);
function setInternalBufferSize2(size) {
  if (buffer$12.length < size) {
    buffer$12 = Buffer$82.alloc(size);
  }
}
function serialize$12(object2, options) {
  options = options || {};
  var checkKeys = typeof options.checkKeys === "boolean" ? options.checkKeys : false;
  var serializeFunctions = typeof options.serializeFunctions === "boolean" ? options.serializeFunctions : false;
  var ignoreUndefined = typeof options.ignoreUndefined === "boolean" ? options.ignoreUndefined : true;
  var minInternalBufferSize = typeof options.minInternalBufferSize === "number" ? options.minInternalBufferSize : MAXSIZE2;
  if (buffer$12.length < minInternalBufferSize) {
    buffer$12 = Buffer$82.alloc(minInternalBufferSize);
  }
  var serializationIndex = serializer2(buffer$12, object2, checkKeys, 0, 0, serializeFunctions, ignoreUndefined, []);
  var finishedBuffer = Buffer$82.alloc(serializationIndex);
  buffer$12.copy(finishedBuffer, 0, 0, finishedBuffer.length);
  return finishedBuffer;
}
function serializeWithBufferAndIndex2(object2, finalBuffer, options) {
  options = options || {};
  var checkKeys = typeof options.checkKeys === "boolean" ? options.checkKeys : false;
  var serializeFunctions = typeof options.serializeFunctions === "boolean" ? options.serializeFunctions : false;
  var ignoreUndefined = typeof options.ignoreUndefined === "boolean" ? options.ignoreUndefined : true;
  var startIndex = typeof options.index === "number" ? options.index : 0;
  var serializationIndex = serializer2(buffer$12, object2, checkKeys, 0, 0, serializeFunctions, ignoreUndefined);
  buffer$12.copy(finalBuffer, startIndex, 0, serializationIndex);
  return startIndex + serializationIndex - 1;
}
function deserialize$22(buffer$$1, options) {
  buffer$$1 = ensure_buffer2(buffer$$1);
  return deserializer2(buffer$$1, options);
}
function calculateObjectSize$12(object2, options) {
  options = options || {};
  var serializeFunctions = typeof options.serializeFunctions === "boolean" ? options.serializeFunctions : false;
  var ignoreUndefined = typeof options.ignoreUndefined === "boolean" ? options.ignoreUndefined : true;
  return calculate_size2(object2, serializeFunctions, ignoreUndefined);
}
function deserializeStream2(data, startIndex, numberOfDocuments, documents, docStartIndex, options) {
  options = Object.assign({
    allowObjectSmallerThanBufferSize: true
  }, options);
  data = ensure_buffer2(data);
  var index = startIndex;
  for (var i3 = 0; i3 < numberOfDocuments; i3++) {
    var size = data[index] | data[index + 1] << 8 | data[index + 2] << 16 | data[index + 3] << 24;
    options.index = index;
    documents[docStartIndex + i3] = deserializer2(data, options);
    index = index + size;
  }
  return index;
}
var bson2 = {
  // constants
  // NOTE: this is done this way because rollup can't resolve an `Object.assign`ed export
  BSON_INT32_MAX: constants2.BSON_INT32_MAX,
  BSON_INT32_MIN: constants2.BSON_INT32_MIN,
  BSON_INT64_MAX: constants2.BSON_INT64_MAX,
  BSON_INT64_MIN: constants2.BSON_INT64_MIN,
  JS_INT_MAX: constants2.JS_INT_MAX,
  JS_INT_MIN: constants2.JS_INT_MIN,
  BSON_DATA_NUMBER: constants2.BSON_DATA_NUMBER,
  BSON_DATA_STRING: constants2.BSON_DATA_STRING,
  BSON_DATA_OBJECT: constants2.BSON_DATA_OBJECT,
  BSON_DATA_ARRAY: constants2.BSON_DATA_ARRAY,
  BSON_DATA_BINARY: constants2.BSON_DATA_BINARY,
  BSON_DATA_UNDEFINED: constants2.BSON_DATA_UNDEFINED,
  BSON_DATA_OID: constants2.BSON_DATA_OID,
  BSON_DATA_BOOLEAN: constants2.BSON_DATA_BOOLEAN,
  BSON_DATA_DATE: constants2.BSON_DATA_DATE,
  BSON_DATA_NULL: constants2.BSON_DATA_NULL,
  BSON_DATA_REGEXP: constants2.BSON_DATA_REGEXP,
  BSON_DATA_DBPOINTER: constants2.BSON_DATA_DBPOINTER,
  BSON_DATA_CODE: constants2.BSON_DATA_CODE,
  BSON_DATA_SYMBOL: constants2.BSON_DATA_SYMBOL,
  BSON_DATA_CODE_W_SCOPE: constants2.BSON_DATA_CODE_W_SCOPE,
  BSON_DATA_INT: constants2.BSON_DATA_INT,
  BSON_DATA_TIMESTAMP: constants2.BSON_DATA_TIMESTAMP,
  BSON_DATA_LONG: constants2.BSON_DATA_LONG,
  BSON_DATA_DECIMAL128: constants2.BSON_DATA_DECIMAL128,
  BSON_DATA_MIN_KEY: constants2.BSON_DATA_MIN_KEY,
  BSON_DATA_MAX_KEY: constants2.BSON_DATA_MAX_KEY,
  BSON_BINARY_SUBTYPE_DEFAULT: constants2.BSON_BINARY_SUBTYPE_DEFAULT,
  BSON_BINARY_SUBTYPE_FUNCTION: constants2.BSON_BINARY_SUBTYPE_FUNCTION,
  BSON_BINARY_SUBTYPE_BYTE_ARRAY: constants2.BSON_BINARY_SUBTYPE_BYTE_ARRAY,
  BSON_BINARY_SUBTYPE_UUID: constants2.BSON_BINARY_SUBTYPE_UUID,
  BSON_BINARY_SUBTYPE_MD5: constants2.BSON_BINARY_SUBTYPE_MD5,
  BSON_BINARY_SUBTYPE_USER_DEFINED: constants2.BSON_BINARY_SUBTYPE_USER_DEFINED,
  // wrapped types
  Code: code2,
  Map: map2,
  BSONSymbol: symbol2,
  DBRef: db_ref2,
  Binary: binary2,
  ObjectId: objectid2,
  Long: long_12,
  Timestamp: timestamp2,
  Double: double_12,
  Int32: int_322,
  MinKey: min_key2,
  MaxKey: max_key2,
  BSONRegExp: regexp2,
  Decimal128: decimal1282,
  // methods
  serialize: serialize$12,
  serializeWithBufferAndIndex: serializeWithBufferAndIndex2,
  deserialize: deserialize$22,
  calculateObjectSize: calculateObjectSize$12,
  deserializeStream: deserializeStream2,
  setInternalBufferSize: setInternalBufferSize2,
  // legacy support
  ObjectID: objectid2,
  // Extended JSON
  EJSON: extended_json2
};
var bson_110 = bson2.BSON_INT32_MAX;
var bson_210 = bson2.BSON_INT32_MIN;
var bson_310 = bson2.BSON_INT64_MAX;
var bson_410 = bson2.BSON_INT64_MIN;
var bson_55 = bson2.JS_INT_MAX;
var bson_62 = bson2.JS_INT_MIN;
var bson_72 = bson2.BSON_DATA_NUMBER;
var bson_82 = bson2.BSON_DATA_STRING;
var bson_92 = bson2.BSON_DATA_OBJECT;
var bson_102 = bson2.BSON_DATA_ARRAY;
var bson_112 = bson2.BSON_DATA_BINARY;
var bson_122 = bson2.BSON_DATA_UNDEFINED;
var bson_132 = bson2.BSON_DATA_OID;
var bson_142 = bson2.BSON_DATA_BOOLEAN;
var bson_152 = bson2.BSON_DATA_DATE;
var bson_162 = bson2.BSON_DATA_NULL;
var bson_172 = bson2.BSON_DATA_REGEXP;
var bson_182 = bson2.BSON_DATA_DBPOINTER;
var bson_192 = bson2.BSON_DATA_CODE;
var bson_202 = bson2.BSON_DATA_SYMBOL;
var bson_212 = bson2.BSON_DATA_CODE_W_SCOPE;
var bson_222 = bson2.BSON_DATA_INT;
var bson_232 = bson2.BSON_DATA_TIMESTAMP;
var bson_242 = bson2.BSON_DATA_LONG;
var bson_252 = bson2.BSON_DATA_DECIMAL128;
var bson_262 = bson2.BSON_DATA_MIN_KEY;
var bson_272 = bson2.BSON_DATA_MAX_KEY;
var bson_282 = bson2.BSON_BINARY_SUBTYPE_DEFAULT;
var bson_292 = bson2.BSON_BINARY_SUBTYPE_FUNCTION;
var bson_302 = bson2.BSON_BINARY_SUBTYPE_BYTE_ARRAY;
var bson_312 = bson2.BSON_BINARY_SUBTYPE_UUID;
var bson_322 = bson2.BSON_BINARY_SUBTYPE_MD5;
var bson_332 = bson2.BSON_BINARY_SUBTYPE_USER_DEFINED;
var bson_342 = bson2.Code;
var bson_352 = bson2.BSONSymbol;
var bson_362 = bson2.DBRef;
var bson_372 = bson2.Binary;
var bson_382 = bson2.ObjectId;
var bson_392 = bson2.Long;
var bson_402 = bson2.Timestamp;
var bson_412 = bson2.Double;
var bson_422 = bson2.Int32;
var bson_432 = bson2.MinKey;
var bson_442 = bson2.MaxKey;
var bson_452 = bson2.BSONRegExp;
var bson_462 = bson2.Decimal128;
var bson_472 = bson2.serialize;
var bson_482 = bson2.serializeWithBufferAndIndex;
var bson_492 = bson2.deserialize;
var bson_502 = bson2.calculateObjectSize;
var bson_512 = bson2.deserializeStream;
var bson_522 = bson2.setInternalBufferSize;
var bson_532 = bson2.ObjectID;
var bson_542 = bson2.EJSON;
var bson_browser_esm_default2 = bson2;

// node_modules/mongodb-stitch-core-services-mongodb-remote/dist/esm/internal/CoreRemoteMongoReadOperation.js
var CoreRemoteMongoReadOperation = function() {
  function CoreRemoteMongoReadOperation2(command, args, service, decoder) {
    this.command = command;
    this.args = args;
    this.service = service;
    if (decoder) {
      this.collectionDecoder = new (function() {
        function class_1() {
        }
        class_1.prototype.decode = function(from) {
          if (from instanceof Array) {
            return from.map(function(t) {
              return decoder.decode(t);
            });
          }
          return [decoder.decode(from)];
        };
        return class_1;
      }())();
    }
  }
  CoreRemoteMongoReadOperation2.prototype.iterator = function() {
    return this.executeRead().then(function(res) {
      return res[Symbol.iterator]();
    });
  };
  CoreRemoteMongoReadOperation2.prototype.first = function() {
    return this.executeRead().then(function(res) {
      return res[0];
    });
  };
  CoreRemoteMongoReadOperation2.prototype.toArray = function() {
    return this.executeRead();
  };
  CoreRemoteMongoReadOperation2.prototype.asArray = function() {
    return this.toArray();
  };
  CoreRemoteMongoReadOperation2.prototype.executeRead = function() {
    return this.service.callFunction(this.command, [this.args], this.collectionDecoder);
  };
  return CoreRemoteMongoReadOperation2;
}();
var CoreRemoteMongoReadOperation_default = CoreRemoteMongoReadOperation;

// node_modules/mongodb-stitch-core-services-mongodb-remote/dist/esm/OperationType.js
var OperationType;
(function(OperationType2) {
  OperationType2["Insert"] = "insert";
  OperationType2["Delete"] = "delete";
  OperationType2["Replace"] = "replace";
  OperationType2["Update"] = "update";
  OperationType2["Unknown"] = "unknown";
})(OperationType || (OperationType = {}));
function operationTypeFromRemote(type) {
  switch (type) {
    case "insert":
      return OperationType.Insert;
    case "delete":
      return OperationType.Delete;
    case "replace":
      return OperationType.Replace;
    case "update":
      return OperationType.Update;
    default:
      return OperationType.Unknown;
  }
}

// node_modules/mongodb-stitch-core-services-mongodb-remote/dist/esm/RemoteInsertManyResult.js
var RemoteInsertManyResult = function() {
  function RemoteInsertManyResult2(arr) {
    var inserted = {};
    arr.forEach(function(value2, index) {
      inserted[index] = value2;
    });
    this.insertedIds = inserted;
  }
  return RemoteInsertManyResult2;
}();
var RemoteInsertManyResult_default = RemoteInsertManyResult;

// node_modules/mongodb-stitch-core-services-mongodb-remote/dist/esm/internal/ResultDecoders.js
var RemoteInsertManyResultFields;
(function(RemoteInsertManyResultFields2) {
  RemoteInsertManyResultFields2["InsertedIds"] = "insertedIds";
})(RemoteInsertManyResultFields || (RemoteInsertManyResultFields = {}));
var RemoteInsertOneResultFields;
(function(RemoteInsertOneResultFields2) {
  RemoteInsertOneResultFields2["InsertedId"] = "insertedId";
})(RemoteInsertOneResultFields || (RemoteInsertOneResultFields = {}));
var RemoteUpdateResultFields;
(function(RemoteUpdateResultFields2) {
  RemoteUpdateResultFields2["MatchedCount"] = "matchedCount";
  RemoteUpdateResultFields2["ModifiedCount"] = "modifiedCount";
  RemoteUpdateResultFields2["UpsertedId"] = "upsertedId";
})(RemoteUpdateResultFields || (RemoteUpdateResultFields = {}));
var RemoteDeleteResultFields;
(function(RemoteDeleteResultFields2) {
  RemoteDeleteResultFields2["DeletedCount"] = "deletedCount";
})(RemoteDeleteResultFields || (RemoteDeleteResultFields = {}));
var UpdateDescriptionFields;
(function(UpdateDescriptionFields2) {
  UpdateDescriptionFields2["UpdatedFields"] = "updatedFields";
  UpdateDescriptionFields2["RemovedFields"] = "removedFields";
})(UpdateDescriptionFields || (UpdateDescriptionFields = {}));
var ChangeEventFields;
(function(ChangeEventFields2) {
  ChangeEventFields2["Id"] = "_id";
  ChangeEventFields2["OperationType"] = "operationType";
  ChangeEventFields2["FullDocument"] = "fullDocument";
  ChangeEventFields2["DocumentKey"] = "documentKey";
  ChangeEventFields2["Namespace"] = "ns";
  ChangeEventFields2["NamespaceDb"] = "db";
  ChangeEventFields2["NamespaceColl"] = "coll";
  ChangeEventFields2["UpdateDescription"] = "updateDescription";
})(ChangeEventFields || (ChangeEventFields = {}));
var CompactChangeEventFields;
(function(CompactChangeEventFields2) {
  CompactChangeEventFields2["OperationType"] = "ot";
  CompactChangeEventFields2["FullDocument"] = "fd";
  CompactChangeEventFields2["DocumentKey"] = "dk";
  CompactChangeEventFields2["UpdateDescription"] = "ud";
  CompactChangeEventFields2["StitchDocumentVersion"] = "sdv";
  CompactChangeEventFields2["StitchDocumentHash"] = "sdh";
})(CompactChangeEventFields || (CompactChangeEventFields = {}));
var RemoteInsertManyResultDecoder = function() {
  function RemoteInsertManyResultDecoder2() {
  }
  RemoteInsertManyResultDecoder2.prototype.decode = function(from) {
    return new RemoteInsertManyResult_default(from[RemoteInsertManyResultFields.InsertedIds]);
  };
  return RemoteInsertManyResultDecoder2;
}();
var RemoteInsertOneResultDecoder = function() {
  function RemoteInsertOneResultDecoder2() {
  }
  RemoteInsertOneResultDecoder2.prototype.decode = function(from) {
    return {
      insertedId: from[RemoteInsertOneResultFields.InsertedId]
    };
  };
  return RemoteInsertOneResultDecoder2;
}();
var RemoteUpdateResultDecoder = function() {
  function RemoteUpdateResultDecoder2() {
  }
  RemoteUpdateResultDecoder2.prototype.decode = function(from) {
    return {
      matchedCount: from[RemoteUpdateResultFields.MatchedCount],
      modifiedCount: from[RemoteUpdateResultFields.ModifiedCount],
      upsertedId: from[RemoteUpdateResultFields.UpsertedId]
    };
  };
  return RemoteUpdateResultDecoder2;
}();
var RemoteDeleteResultDecoder = function() {
  function RemoteDeleteResultDecoder2() {
  }
  RemoteDeleteResultDecoder2.prototype.decode = function(from) {
    return {
      deletedCount: from[RemoteDeleteResultFields.DeletedCount]
    };
  };
  return RemoteDeleteResultDecoder2;
}();
var UpdateDescriptionDecoder = function() {
  function UpdateDescriptionDecoder2() {
  }
  UpdateDescriptionDecoder2.prototype.decode = function(from) {
    Assertions_default.keyPresent(UpdateDescriptionFields.UpdatedFields, from);
    Assertions_default.keyPresent(UpdateDescriptionFields.RemovedFields, from);
    return {
      removedFields: from[UpdateDescriptionFields.RemovedFields],
      updatedFields: from[UpdateDescriptionFields.UpdatedFields]
    };
  };
  return UpdateDescriptionDecoder2;
}();
function decodeBaseChangeEventFields(from, updateDescriptionField, fullDocumentField, decoder) {
  var updateDescription;
  if (updateDescriptionField in from) {
    updateDescription = ResultDecoders.updateDescriptionDecoder.decode(from[updateDescriptionField]);
  } else {
    updateDescription = void 0;
  }
  var fullDocument;
  if (fullDocumentField in from) {
    fullDocument = from[fullDocumentField];
    if (decoder) {
      fullDocument = decoder.decode(fullDocument);
    }
  } else {
    fullDocument = void 0;
  }
  return { updateDescription, fullDocument };
}
var ChangeEventDecoder = function() {
  function ChangeEventDecoder2(decoder) {
    this.decoder = decoder;
  }
  ChangeEventDecoder2.prototype.decode = function(from) {
    Assertions_default.keyPresent(ChangeEventFields.Id, from);
    Assertions_default.keyPresent(ChangeEventFields.OperationType, from);
    Assertions_default.keyPresent(ChangeEventFields.Namespace, from);
    Assertions_default.keyPresent(ChangeEventFields.DocumentKey, from);
    var nsDoc = from[ChangeEventFields.Namespace];
    var _a3 = decodeBaseChangeEventFields(from, ChangeEventFields.UpdateDescription, ChangeEventFields.FullDocument, this.decoder), updateDescription = _a3.updateDescription, fullDocument = _a3.fullDocument;
    return {
      documentKey: from[ChangeEventFields.DocumentKey],
      fullDocument,
      id: from[ChangeEventFields.Id],
      namespace: {
        collection: nsDoc[ChangeEventFields.NamespaceColl],
        database: nsDoc[ChangeEventFields.NamespaceDb]
      },
      operationType: operationTypeFromRemote(from[ChangeEventFields.OperationType]),
      updateDescription
    };
  };
  return ChangeEventDecoder2;
}();
var CompactChangeEventDecoder = function() {
  function CompactChangeEventDecoder2(decoder) {
    this.decoder = decoder;
  }
  CompactChangeEventDecoder2.prototype.decode = function(from) {
    Assertions_default.keyPresent(CompactChangeEventFields.OperationType, from);
    Assertions_default.keyPresent(CompactChangeEventFields.DocumentKey, from);
    var _a3 = decodeBaseChangeEventFields(from, CompactChangeEventFields.UpdateDescription, CompactChangeEventFields.FullDocument, this.decoder), updateDescription = _a3.updateDescription, fullDocument = _a3.fullDocument;
    var stitchDocumentVersion;
    if (CompactChangeEventFields.StitchDocumentVersion in from) {
      stitchDocumentVersion = from[CompactChangeEventFields.StitchDocumentVersion];
    } else {
      stitchDocumentVersion = void 0;
    }
    var stitchDocumentHash;
    if (CompactChangeEventFields.StitchDocumentHash in from) {
      stitchDocumentHash = from[CompactChangeEventFields.StitchDocumentHash];
    } else {
      stitchDocumentHash = void 0;
    }
    return {
      documentKey: from[CompactChangeEventFields.DocumentKey],
      fullDocument,
      operationType: operationTypeFromRemote(from[CompactChangeEventFields.OperationType]),
      stitchDocumentHash,
      stitchDocumentVersion,
      updateDescription
    };
  };
  return CompactChangeEventDecoder2;
}();
var ResultDecoders = function() {
  function ResultDecoders2() {
  }
  ResultDecoders2.remoteInsertManyResultDecoder = new RemoteInsertManyResultDecoder();
  ResultDecoders2.remoteInsertOneResultDecoder = new RemoteInsertOneResultDecoder();
  ResultDecoders2.remoteUpdateResultDecoder = new RemoteUpdateResultDecoder();
  ResultDecoders2.remoteDeleteResultDecoder = new RemoteDeleteResultDecoder();
  ResultDecoders2.updateDescriptionDecoder = new UpdateDescriptionDecoder();
  ResultDecoders2.ChangeEventDecoder = ChangeEventDecoder;
  ResultDecoders2.CompactChangeEventDecoder = CompactChangeEventDecoder;
  return ResultDecoders2;
}();
var ResultDecoders_default = ResultDecoders;

// node_modules/mongodb-stitch-core-services-mongodb-remote/dist/esm/internal/CoreRemoteMongoCollectionImpl.js
var __assign2 = Object.assign || function(t) {
  for (var s, i3 = 1, n = arguments.length; i3 < n; i3++) {
    s = arguments[i3];
    for (var p in s)
      if (Object.prototype.hasOwnProperty.call(s, p))
        t[p] = s[p];
  }
  return t;
};
var CoreRemoteMongoCollectionImpl = function() {
  function CoreRemoteMongoCollectionImpl2(name, databaseName, service, codec) {
    var _this = this;
    this.name = name;
    this.databaseName = databaseName;
    this.service = service;
    this.codec = codec;
    this.namespace = this.databaseName + "." + this.name;
    this.baseOperationArgs = function() {
      return {
        collection: _this.name,
        database: _this.databaseName
      };
    }();
  }
  CoreRemoteMongoCollectionImpl2.prototype.withCollectionType = function(codec) {
    return new CoreRemoteMongoCollectionImpl2(this.name, this.databaseName, this.service, codec);
  };
  CoreRemoteMongoCollectionImpl2.prototype.find = function(filter, options) {
    if (filter === void 0) {
      filter = {};
    }
    var args = __assign2({}, this.baseOperationArgs);
    args.query = filter;
    if (options) {
      if (options.limit) {
        args.limit = options.limit;
      }
      if (options.projection) {
        args.project = options.projection;
      }
      if (options.sort) {
        args.sort = options.sort;
      }
    }
    return new CoreRemoteMongoReadOperation_default("find", args, this.service, this.codec);
  };
  CoreRemoteMongoCollectionImpl2.prototype.findOne = function(filter, options) {
    if (filter === void 0) {
      filter = {};
    }
    var args = __assign2({}, this.baseOperationArgs);
    args.query = filter;
    if (options) {
      if (options.projection) {
        args.project = options.projection;
      }
      if (options.sort) {
        args.sort = options.sort;
      }
    }
    return this.service.callFunction("findOne", [args], this.codec);
  };
  CoreRemoteMongoCollectionImpl2.prototype.findOneAndUpdate = function(filter, update, options) {
    var args = __assign2({}, this.baseOperationArgs);
    args.filter = filter;
    args.update = update;
    if (options) {
      if (options.projection) {
        args.projection = options.projection;
      }
      if (options.sort) {
        args.sort = options.sort;
      }
      if (options.upsert) {
        args.upsert = true;
      }
      if (options.returnNewDocument) {
        args.returnNewDocument = true;
      }
    }
    return this.service.callFunction("findOneAndUpdate", [args], this.codec);
  };
  CoreRemoteMongoCollectionImpl2.prototype.findOneAndReplace = function(filter, replacement, options) {
    var args = __assign2({}, this.baseOperationArgs);
    args.filter = filter;
    args.update = replacement;
    if (options) {
      if (options.projection) {
        args.projection = options.projection;
      }
      if (options.sort) {
        args.sort = options.sort;
      }
      if (options.upsert) {
        args.upsert = true;
      }
      if (options.returnNewDocument) {
        args.returnNewDocument = true;
      }
    }
    return this.service.callFunction("findOneAndReplace", [args], this.codec);
  };
  CoreRemoteMongoCollectionImpl2.prototype.findOneAndDelete = function(filter, options) {
    var args = __assign2({}, this.baseOperationArgs);
    args.filter = filter;
    if (options) {
      if (options.projection) {
        args.projection = options.projection;
      }
      if (options.sort) {
        args.sort = options.sort;
      }
    }
    return this.service.callFunction("findOneAndDelete", [args], this.codec);
  };
  CoreRemoteMongoCollectionImpl2.prototype.aggregate = function(pipeline) {
    var args = __assign2({}, this.baseOperationArgs);
    args.pipeline = pipeline;
    return new CoreRemoteMongoReadOperation_default("aggregate", args, this.service, this.codec);
  };
  CoreRemoteMongoCollectionImpl2.prototype.count = function(query, options) {
    if (query === void 0) {
      query = {};
    }
    var args = __assign2({}, this.baseOperationArgs);
    args.query = query;
    if (options && options.limit) {
      args.limit = options.limit;
    }
    return this.service.callFunction("count", [args]);
  };
  CoreRemoteMongoCollectionImpl2.prototype.insertOne = function(value2) {
    var args = __assign2({}, this.baseOperationArgs);
    args.document = this.generateObjectIdIfMissing(this.codec ? this.codec.encode(value2) : value2);
    return this.service.callFunction("insertOne", [args], ResultDecoders_default.remoteInsertOneResultDecoder);
  };
  CoreRemoteMongoCollectionImpl2.prototype.insertMany = function(docs) {
    var _this = this;
    var args = __assign2({}, this.baseOperationArgs);
    args.documents = docs.map(function(doc) {
      return _this.generateObjectIdIfMissing(_this.codec ? _this.codec.encode(doc) : doc);
    });
    return this.service.callFunction("insertMany", [args], ResultDecoders_default.remoteInsertManyResultDecoder);
  };
  CoreRemoteMongoCollectionImpl2.prototype.deleteOne = function(query) {
    return this.executeDelete(query, false);
  };
  CoreRemoteMongoCollectionImpl2.prototype.deleteMany = function(query) {
    return this.executeDelete(query, true);
  };
  CoreRemoteMongoCollectionImpl2.prototype.updateOne = function(query, update, options) {
    return this.executeUpdate(query, update, options, false);
  };
  CoreRemoteMongoCollectionImpl2.prototype.updateMany = function(query, update, options) {
    return this.executeUpdate(query, update, options, true);
  };
  CoreRemoteMongoCollectionImpl2.prototype.watch = function(arg) {
    var args = __assign2({}, this.baseOperationArgs);
    if (arg !== void 0) {
      if (arg instanceof Array) {
        if (arg.length !== 0) {
          args.ids = arg;
        }
      } else if (arg instanceof Object) {
        args.filter = arg;
      }
    }
    args.useCompactEvents = false;
    return this.service.streamFunction("watch", [args], new ResultDecoders_default.ChangeEventDecoder(this.codec));
  };
  CoreRemoteMongoCollectionImpl2.prototype.watchCompact = function(ids) {
    var args = __assign2({}, this.baseOperationArgs);
    args.ids = ids;
    args.useCompactEvents = true;
    return this.service.streamFunction("watch", [args], new ResultDecoders_default.CompactChangeEventDecoder(this.codec));
  };
  CoreRemoteMongoCollectionImpl2.prototype.executeDelete = function(query, multi) {
    var args = __assign2({}, this.baseOperationArgs);
    args.query = query;
    return this.service.callFunction(multi ? "deleteMany" : "deleteOne", [args], ResultDecoders_default.remoteDeleteResultDecoder);
  };
  CoreRemoteMongoCollectionImpl2.prototype.executeUpdate = function(query, update, options, multi) {
    if (multi === void 0) {
      multi = false;
    }
    var args = __assign2({}, this.baseOperationArgs);
    args.query = query;
    args.update = update;
    if (options && options.upsert) {
      args.upsert = options.upsert;
    }
    return this.service.callFunction(multi ? "updateMany" : "updateOne", [args], ResultDecoders_default.remoteUpdateResultDecoder);
  };
  CoreRemoteMongoCollectionImpl2.prototype.generateObjectIdIfMissing = function(doc) {
    if (!doc._id) {
      var newDoc = doc;
      newDoc._id = new bson_browser_esm_default2.ObjectID();
      return newDoc;
    }
    return doc;
  };
  return CoreRemoteMongoCollectionImpl2;
}();
var CoreRemoteMongoCollectionImpl_default = CoreRemoteMongoCollectionImpl;

// node_modules/mongodb-stitch-core-services-mongodb-remote/dist/esm/internal/CoreRemoteMongoDatabaseImpl.js
var CoreRemoteMongoDatabaseImpl = function() {
  function CoreRemoteMongoDatabaseImpl2(name, service) {
    this.name = name;
    this.service = service;
  }
  CoreRemoteMongoDatabaseImpl2.prototype.collection = function(name, codec) {
    return new CoreRemoteMongoCollectionImpl_default(name, this.name, this.service, codec);
  };
  return CoreRemoteMongoDatabaseImpl2;
}();
var CoreRemoteMongoDatabaseImpl_default = CoreRemoteMongoDatabaseImpl;

// node_modules/mongodb-stitch-core-services-mongodb-remote/dist/esm/internal/CoreRemoteMongoClientImpl.js
var CoreRemoteMongoClientImpl = function() {
  function CoreRemoteMongoClientImpl2(service) {
    this.service = service;
  }
  CoreRemoteMongoClientImpl2.prototype.db = function(name) {
    return new CoreRemoteMongoDatabaseImpl_default(name, this.service);
  };
  return CoreRemoteMongoClientImpl2;
}();
var CoreRemoteMongoClientImpl_default = CoreRemoteMongoClientImpl;

// node_modules/mongodb-stitch-browser-services-mongodb-remote/dist/esm/RemoteMongoCursor.js
var RemoteMongoCursor = function() {
  function RemoteMongoCursor2(proxy) {
    this.proxy = proxy;
  }
  RemoteMongoCursor2.prototype.next = function() {
    return Promise.resolve(this.proxy.next().value);
  };
  return RemoteMongoCursor2;
}();
var RemoteMongoCursor_default = RemoteMongoCursor;

// node_modules/mongodb-stitch-browser-services-mongodb-remote/dist/esm/RemoteMongoReadOperation.js
var RemoteMongoReadOperation = function() {
  function RemoteMongoReadOperation2(proxy) {
    this.proxy = proxy;
  }
  RemoteMongoReadOperation2.prototype.first = function() {
    return this.proxy.first();
  };
  RemoteMongoReadOperation2.prototype.toArray = function() {
    return this.proxy.toArray();
  };
  RemoteMongoReadOperation2.prototype.asArray = function() {
    return this.toArray();
  };
  RemoteMongoReadOperation2.prototype.iterator = function() {
    return this.proxy.iterator().then(function(res) {
      return new RemoteMongoCursor_default(res);
    });
  };
  return RemoteMongoReadOperation2;
}();
var RemoteMongoReadOperation_default = RemoteMongoReadOperation;

// node_modules/mongodb-stitch-browser-services-mongodb-remote/dist/esm/internal/RemoteMongoCollectionImpl.js
var RemoteMongoCollectionImpl = function() {
  function RemoteMongoCollectionImpl2(proxy) {
    this.proxy = proxy;
    this.namespace = this.proxy.namespace;
  }
  RemoteMongoCollectionImpl2.prototype.withCollectionType = function(codec) {
    return new RemoteMongoCollectionImpl2(this.proxy.withCollectionType(codec));
  };
  RemoteMongoCollectionImpl2.prototype.count = function(query, options) {
    return this.proxy.count(query, options);
  };
  RemoteMongoCollectionImpl2.prototype.find = function(query, options) {
    return new RemoteMongoReadOperation_default(this.proxy.find(query, options));
  };
  RemoteMongoCollectionImpl2.prototype.findOne = function(query, options) {
    return this.proxy.findOne(query, options);
  };
  RemoteMongoCollectionImpl2.prototype.findOneAndUpdate = function(query, update, options) {
    return this.proxy.findOneAndUpdate(query, update, options);
  };
  RemoteMongoCollectionImpl2.prototype.findOneAndReplace = function(query, replacement, options) {
    return this.proxy.findOneAndReplace(query, replacement, options);
  };
  RemoteMongoCollectionImpl2.prototype.findOneAndDelete = function(query, options) {
    return this.proxy.findOneAndDelete(query, options);
  };
  RemoteMongoCollectionImpl2.prototype.aggregate = function(pipeline) {
    return new RemoteMongoReadOperation_default(this.proxy.aggregate(pipeline));
  };
  RemoteMongoCollectionImpl2.prototype.insertOne = function(doc) {
    return this.proxy.insertOne(doc);
  };
  RemoteMongoCollectionImpl2.prototype.insertMany = function(docs) {
    return this.proxy.insertMany(docs);
  };
  RemoteMongoCollectionImpl2.prototype.deleteOne = function(query) {
    return this.proxy.deleteOne(query);
  };
  RemoteMongoCollectionImpl2.prototype.deleteMany = function(query) {
    return this.proxy.deleteMany(query);
  };
  RemoteMongoCollectionImpl2.prototype.updateOne = function(query, update, updateOptions) {
    return this.proxy.updateOne(query, update, updateOptions);
  };
  RemoteMongoCollectionImpl2.prototype.updateMany = function(query, update, updateOptions) {
    return this.proxy.updateMany(query, update, updateOptions);
  };
  RemoteMongoCollectionImpl2.prototype.watch = function(arg) {
    return this.proxy.watch(arg);
  };
  RemoteMongoCollectionImpl2.prototype.watchCompact = function(ids) {
    return this.proxy.watchCompact(ids);
  };
  return RemoteMongoCollectionImpl2;
}();
var RemoteMongoCollectionImpl_default = RemoteMongoCollectionImpl;

// node_modules/mongodb-stitch-browser-services-mongodb-remote/dist/esm/internal/RemoteMongoDatabaseImpl.js
var RemoteMongoDatabaseImpl = function() {
  function RemoteMongoDatabaseImpl2(proxy) {
    this.proxy = proxy;
    this.name = this.proxy.name;
  }
  RemoteMongoDatabaseImpl2.prototype.collection = function(name, codec) {
    return new RemoteMongoCollectionImpl_default(this.proxy.collection(name, codec));
  };
  return RemoteMongoDatabaseImpl2;
}();
var RemoteMongoDatabaseImpl_default = RemoteMongoDatabaseImpl;

// node_modules/mongodb-stitch-browser-services-mongodb-remote/dist/esm/internal/RemoteMongoClientImpl.js
var RemoteMongoClientImpl = function() {
  function RemoteMongoClientImpl2(proxy) {
    this.proxy = proxy;
  }
  RemoteMongoClientImpl2.prototype.db = function(name) {
    return new RemoteMongoDatabaseImpl_default(this.proxy.db(name));
  };
  return RemoteMongoClientImpl2;
}();
var RemoteMongoClientImpl_default = RemoteMongoClientImpl;

// node_modules/mongodb-stitch-browser-services-mongodb-remote/dist/esm/RemoteMongoClient.js
var RemoteMongoClient;
(function(RemoteMongoClient2) {
  RemoteMongoClient2.factory = new (function() {
    function class_1() {
    }
    class_1.prototype.getNamedClient = function(service, client) {
      return new RemoteMongoClientImpl_default(new CoreRemoteMongoClientImpl_default(service));
    };
    return class_1;
  }())();
})(RemoteMongoClient || (RemoteMongoClient = {}));
export {
  AnonymousAuthProvider_default as AnonymousAuthProvider,
  AnonymousCredential_default as AnonymousCredential,
  bson_browser_esm_default as BSON,
  BrowserFetchTransport_default as BrowserFetchTransport,
  CustomAuthProvider_default as CustomAuthProvider,
  CustomCredential_default as CustomCredential,
  FacebookAuthProvider_default as FacebookAuthProvider,
  FacebookCredential_default as FacebookCredential,
  FacebookRedirectCredential_default as FacebookRedirectCredential,
  FunctionAuthProvider_default as FunctionAuthProvider,
  FunctionCredential_default as FunctionCredential,
  GoogleAuthProvider_default as GoogleAuthProvider,
  GoogleCredential_default as GoogleCredential,
  GoogleRedirectCredential_default as GoogleRedirectCredential,
  MemoryStorage,
  RemoteInsertManyResult_default as RemoteInsertManyResult,
  RemoteMongoClient,
  RemoteMongoReadOperation_default as RemoteMongoReadOperation,
  ServerApiKeyAuthProvider_default as ServerApiKeyAuthProvider,
  ServerApiKeyCredential_default as ServerApiKeyCredential,
  Stitch_default as Stitch,
  StitchAppClientConfiguration,
  StitchAppClientInfo_default as StitchAppClientInfo,
  StitchClientError_default as StitchClientError,
  StitchClientErrorCode,
  StitchRequestError_default as StitchRequestError,
  StitchRequestErrorCode,
  StitchServiceError_default as StitchServiceError,
  StitchServiceErrorCode,
  StitchUserIdentity_default as StitchUserIdentity,
  Stream_default as Stream,
  UserApiKey_default as UserApiKey,
  UserApiKeyAuthProvider_default as UserApiKeyAuthProvider,
  UserApiKeyAuthProviderClient,
  UserApiKeyCredential_default as UserApiKeyCredential,
  UserPasswordAuthProvider_default as UserPasswordAuthProvider,
  UserPasswordAuthProviderClient,
  UserPasswordCredential_default as UserPasswordCredential,
  UserType_default as UserType
};
/*! Bundled license information:

ieee754/index.js:
  (*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> *)

buffer/index.js:
  (*!
   * The buffer module from node.js, for the browser.
   *
   * @author   Feross Aboukhadijeh <https://feross.org>
   * @license  MIT
   *)
*/
//# sourceMappingURL=mongodb-stitch-browser-sdk.js.map
