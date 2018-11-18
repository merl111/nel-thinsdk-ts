export enum OpCode {
  // Constants
  PUSH0 = 0x00, // An empty array of bytes is pushed onto the stack.
  PUSHF = PUSH0,
  PUSHBYTES1 = 0x01, // 0x01-0x4B The next opcode bytes is data to be pushed onto the stack
  PUSHBYTES75 = 0x4b,
  PUSHDATA1 = 0x4c, // The next byte contains the number of bytes to be pushed onto the stack.
  PUSHDATA2 = 0x4d, // The next two bytes contain the number of bytes to be pushed onto the stack.
  PUSHDATA4 = 0x4e, // The next four bytes contain the number of bytes to be pushed onto the stack.
  PUSHM1 = 0x4f, // The number -1 is pushed onto the stack.
  PUSH1 = 0x51, // The number 1 is pushed onto the stack.
  PUSHT = PUSH1,
  PUSH2 = 0x52, // The number 2 is pushed onto the stack.
  PUSH3 = 0x53, // The number 3 is pushed onto the stack.
  PUSH4 = 0x54, // The number 4 is pushed onto the stack.
  PUSH5 = 0x55, // The number 5 is pushed onto the stack.
  PUSH6 = 0x56, // The number 6 is pushed onto the stack.
  PUSH7 = 0x57, // The number 7 is pushed onto the stack.
  PUSH8 = 0x58, // The number 8 is pushed onto the stack.
  PUSH9 = 0x59, // The number 9 is pushed onto the stack.
  PUSH10 = 0x5a, // The number 10 is pushed onto the stack.
  PUSH11 = 0x5b, // The number 11 is pushed onto the stack.
  PUSH12 = 0x5c, // The number 12 is pushed onto the stack.
  PUSH13 = 0x5d, // The number 13 is pushed onto the stack.
  PUSH14 = 0x5e, // The number 14 is pushed onto the stack.
  PUSH15 = 0x5f, // The number 15 is pushed onto the stack.
  PUSH16 = 0x60, // The number 16 is pushed onto the stack.

  // Flow control
  NOP = 0x61, // Does nothing.
  JMP = 0x62,
  JMPIF = 0x63,
  JMPIFNOT = 0x64,
  CALL = 0x65,
  RET = 0x66,
  APPCALL = 0x67,
  SYSCALL = 0x68,
  TAILCALL = 0x69,

  // Stack
  DUPFROMALTSTACK = 0x6a,
  TOALTSTACK = 0x6b, // Puts the input onto the top of the alt stack. Removes it from the main stack.
  FROMALTSTACK = 0x6c, // Puts the input onto the top of the main stack. Removes it from the alt stack.
  XDROP = 0x6d,
  XSWAP = 0x72,
  XTUCK = 0x73,
  DEPTH = 0x74, // Puts the number of stack items onto the stack.
  DROP = 0x75, // Removes the top stack item.
  DUP = 0x76, // Duplicates the top stack item.
  NIP = 0x77, // Removes the second-to-top stack item.
  OVER = 0x78, // Copies the second-to-top stack item to the top.
  PICK = 0x79, // The item n back in the stack is copied to the top.
  ROLL = 0x7a, // The item n back in the stack is moved to the top.
  ROT = 0x7b, // The top three items on the stack are rotated to the left.
  SWAP = 0x7c, // The top two items on the stack are swapped.
  TUCK = 0x7d, // The item at the top of the stack is copied and inserted before the second-to-top item.

  // Splice
  CAT = 0x7e, // Concatenates two strings.
  SUBSTR = 0x7f, // Returns a section of a string.
  LEFT = 0x80, // Keeps only characters left of the specified point in a string.
  RIGHT = 0x81, // Keeps only characters right of the specified point in a string.
  SIZE = 0x82, // Returns the length of the input string.

  // Bitwise logic
  INVERT = 0x83, // Flips all of the bits in the input.
  AND = 0x84, // Boolean and between each bit in the inputs.
  OR = 0x85, // Boolean or between each bit in the inputs.
  XOR = 0x86, // Boolean exclusive or between each bit in the inputs.
  EQUAL = 0x87, // Returns 1 if the inputs are exactly equal, 0 otherwise.
  //OP_EQUALVERIFY = 0x88, // Same as OP_EQUAL, but runs OP_VERIFY afterward.
  //OP_RESERVED1 = 0x89, // Transaction is invalid unless occuring in an unexecuted OP_IF branch
  //OP_RESERVED2 = 0x8A, // Transaction is invalid unless occuring in an unexecuted OP_IF branch

  // Arithmetic
  // Note: Arithmetic inputs are limited to signed 32-bit integers, but may overflow their output.
  INC = 0x8b, // 1 is added to the input.
  DEC = 0x8c, // 1 is subtracted from the input.
  SIGN = 0x8d,
  NEGATE = 0x8f, // The sign of the input is flipped.
  ABS = 0x90, // The input is made positive.
  NOT = 0x91, // If the input is 0 or 1, it is flipped. Otherwise the output will be 0.
  NZ = 0x92, // Returns 0 if the input is 0. 1 otherwise.
  ADD = 0x93, // a is added to b.
  SUB = 0x94, // b is subtracted from a.
  MUL = 0x95, // a is multiplied by b.
  DIV = 0x96, // a is divided by b.
  MOD = 0x97, // Returns the remainder after dividing a by b.
  SHL = 0x98, // Shifts a left b bits, preserving sign.
  SHR = 0x99, // Shifts a right b bits, preserving sign.
  BOOLAND = 0x9a, // If both a and b are not 0, the output is 1. Otherwise 0.
  BOOLOR = 0x9b, // If a or b is not 0, the output is 1. Otherwise 0.
  NUMEQUAL = 0x9c, // Returns 1 if the numbers are equal, 0 otherwise.
  NUMNOTEQUAL = 0x9e, // Returns 1 if the numbers are not equal, 0 otherwise.
  LT = 0x9f, // Returns 1 if a is less than b, 0 otherwise.
  GT = 0xa0, // Returns 1 if a is greater than b, 0 otherwise.
  LTE = 0xa1, // Returns 1 if a is less than or equal to b, 0 otherwise.
  GTE = 0xa2, // Returns 1 if a is greater than or equal to b, 0 otherwise.
  MIN = 0xa3, // Returns the smaller of a and b.
  MAX = 0xa4, // Returns the larger of a and b.
  WITHIN = 0xa5, // Returns 1 if x is within the specified range (left-inclusive), 0 otherwise.

  // Crypto
  //RIPEMD160 = 0xA6, // The input is hashed using RIPEMD-160.
  SHA1 = 0xa7, // The input is hashed using SHA-1.
  SHA256 = 0xa8, // The input is hashed using SHA-256.
  HASH160 = 0xa9,
  HASH256 = 0xaa,
  //因为这个hash函数可能仅仅是csharp 编译时专用的
  CSHARPSTRHASH32 = 0xab,
  //这个是JAVA专用的
  JAVAHASH32 = 0xad,

  CHECKSIG = 0xac,
  CHECKMULTISIG = 0xae,

  // Array
  ARRAYSIZE = 0xc0,
  PACK = 0xc1,
  UNPACK = 0xc2,
  PICKITEM = 0xc3,
  SETITEM = 0xc4,
  NEWARRAY = 0xc5, //用作引用類型
  NEWSTRUCT = 0xc6, //用作值類型

  SWITCH = 0xd0,

  // Exceptions
  THROW = 0xf0,
  THROWIFNOT = 0xf1
}
