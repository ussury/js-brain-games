#!/usr/bin/env node

import welcom from '../src/cli.js';
import isPrime from '../src/isPrime.js';

const name = welcom();
isPrime(name);
