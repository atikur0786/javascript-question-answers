/**
 * | ----------------------
 * | Print Below Patterns
 * | 1 2 3 4
 * | 1 2 3 4
 * | 1 2 3 4
 * | 1 2 3 4
 * | -----------------------
 */

// Function to print the above pattern
function squarePattern(n) {
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n; j++) {
      process.stdout.write(j + " "); // Add space after each number
    }
    process.stdout.write("\n"); // Add new line after each row
  }
}

squarePattern(4);

/**
 * | ----------------------
 * | Print Below Patterns
 * | * * * *
 * | * * * *
 * | * * * *
 * | * * * *
 * | -----------------------
 */

// Function to print the above pattern
function squareStarPattern(n) {
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n; j++) {
      process.stdout.write("*" + " "); // Add space after each number
    }
    process.stdout.write("\n"); // Add new line after each row
  }
}

squareStarPattern(4);

/**
 * | ----------------------
 * | Print Below Patterns
 * | 1 2 3 4
 * | 5 6 7 8
 * | 9 10  11 12
 * | 13 14 15 16
 * | -----------------------
 */

// Function to print the above pattern
function squarePatterns2(n) {
  let count = 1;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      process.stdout.write(count + " ");
      count++;
    }
    process.stdout.write("\n");
  }
}

squarePatterns2(3);
