#!/usr/bin/env node

import welcom from '../src/cli.js';
import isEven from '../src/isEven.js';

const name = welcom();
isEven(name);
