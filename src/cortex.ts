// This is the root of the package for the Cortex language.
// It include everything that's needed to parse, serialize and execute Cortex.

export * from './math-json/types';

// make any changes to the code that you want (like replacing the files that you sent to me)

// export { Expression } from './public';

//
// 1/ Compute Engine
//
export { ComputeEngine } from './compute-engine/compute-engine';

//
// 2/ The Cortex language
//
export { parseCortex } from './cortex/parse-cortex';
export { serializeCortex } from './cortex/serialize-cortex';

export const version = '{{SDK_VERSION}}';
