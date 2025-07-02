Here's a comprehensive Bash scripting cheat sheet, designed to take you from beginner to advanced concepts, line by line with examples, in Markdown format.

-----

# Bash Scripting Cheat Sheet

This cheat sheet covers essential Bash scripting concepts, from basic commands to advanced techniques, with clear explanations and examples.

-----

## 1\. Getting Started: The Basics

### 1.1 Shebang Line

The very first line of your script, telling the system which interpreter to use.

```bash
#!/bin/bash
# Example: Using bash to execute the script
```

### 1.2 Comments

Use `#` for single-line comments.

```bash
# This is a comment
echo "Hello World!" # This is also a comment
```

### 1.3 Basic Output

`echo` is used to display text on the terminal.

```bash
echo "Hello, Bash Scripting!"
```

### 1.4 Running a Script

Make the script executable and then run it.

```bash
chmod +x your_script.sh
./your_script.sh
```

-----

## 2\. Variables

### 2.1 Defining Variables

No spaces around the `=` sign. Variable names are case-sensitive.

```bash
name="John Doe"
age=30
```

### 2.2 Accessing Variables

Use `$` before the variable name.

```bash
echo "My name is $name and I am $age years old."
```

### 2.3 Read-only Variables

Use `readonly` to prevent modification.

```bash
readonly PI=3.14159
# PI=3.14  # This would result in an error
```

### 2.4 Unsetting Variables

Use `unset` to remove a variable.

```bash
message="Hello!"
unset message
# echo $message # This would output an empty line
```

-----

## 3\. User Input

### 3.1 Reading Input

`read` command is used to get input from the user.

```bash
echo "Enter your name:"
read username
echo "Hello, $username!"
```

### 3.2 Reading Multiple Inputs

```bash
read -p "Enter your first and last name: " first_name last_name
echo "Welcome, $first_name $last_name."
```

### 3.3 Silent Input (for Passwords)

Use `-s` for silent input.

```bash
read -sp "Enter your password: " password
echo
echo "Password entered."
```

-----

## 4\. Arithmetic Operations

### 4.1 Basic Arithmetic

Use `expr` or `(( ))` for arithmetic. `(( ))` is generally preferred.

```bash
# Using expr (older, less flexible)
result=$(expr 10 + 5)
echo "Result (expr): $result"

# Using (( )) (recommended)
num1=10
num2=5
sum=$((num1 + num2))
difference=$((num1 - num2))
product=$((num1 * num2))
quotient=$((num1 / num2))
remainder=$((num1 % num2))

echo "Sum: $sum"
echo "Difference: $difference"
echo "Product: $product"
echo "Quotient: $quotient"
echo "Remainder: $remainder"
```

### 4.2 Increment/Decrement

```bash
count=0
((count++)) # Increment
echo "Count: $count" # Output: 1
((count--)) # Decrement
echo "Count: $count" # Output: 0
```

-----

## 5\. Conditional Statements (if/elif/else)

### 5.1 Basic if

```bash
age=18
if [ "$age" -ge 18 ]; then
    echo "You are an adult."
fi
```

### 5.2 if-else

```bash
score=75
if [ "$score" -ge 60 ]; then
    echo "You passed."
else
    echo "You failed."
fi
```

### 5.3 if-elif-else

```bash
grade=85
if [ "$grade" -ge 90 ]; then
    echo "Excellent!"
elif [ "$grade" -ge 80 ]; then
    echo "Very Good!"
else
    echo "Keep practicing."
fi
```

### 5.4 Conditional Operators

| Operator | Description                                         |
| :------- | :-------------------------------------------------- |
| `-eq`    | Equal to                                            |
| `-ne`    | Not equal to                                        |
| `-gt`    | Greater than                                        |
| `-ge`    | Greater than or equal to                            |
| `-lt`    | Less than                                           |
| `-le`    | Less than or equal to                               |
| `==`     | String equality                                     |
| `!=`     | String inequality                                   |
| `-z`     | String is null (empty)                              |
| `-n`     | String is not null                                  |
| `-a`     | Logical AND (for `[[ ]]`)                           |
| `-o`     | Logical OR (for `[[ ]]`)                            |
| `&&`     | Logical AND (for `[[ ]]` or `command1 && command2`) |
| `        |                                                     | ` | Logical OR (for `[[ ]]` or `command1 |  | command2`) |

**Note on `[` vs `[[`:**

  * `[` is a synonym for `test`. It's POSIX compliant but has limitations (e.g., no `&&`/`||` directly for combining conditions, requires quotes around variables).
  * `[[` is a Bash-specific extension. It's more powerful, allows `&&`/`||` for combining conditions, and performs word splitting and pathname expansion on unquoted variables within `[[ ]]`. Generally preferred in Bash scripts.

<!-- end list -->

```bash
# Example with [[ ]]
name="Alice"
if [[ "$name" == "Alice" && $age -ge 18 ]]; then
    echo "Alice is an adult."
fi
```

-----

## 6\. Case Statements

For multiple choice scenarios, cleaner than nested if-elif.

```bash
read -p "Enter a fruit: " fruit
case "$fruit" in
    "apple")
        echo "It's a red fruit."
        ;;
    "banana")
        echo "It's a yellow fruit."
        ;;
    "orange")
        echo "It's a citrus fruit."
        ;;
    *) # Default case
        echo "I don't know that fruit."
        ;;
esac
```

-----

## 7\. Loops

### 7.1 For Loop (List)

Iterating over a list of items.

```bash
for item in apple banana orange; do
    echo "I like $item."
done
```

### 7.2 For Loop (Range)

Iterating a specific number of times.

```bash
for i in {1..5}; do
    echo "Count: $i"
done

# With step (Bash 4+)
for i in {0..10..2}; do
    echo "Even number: $i"
done
```

### 7.3 C-style For Loop

Similar to C/Java loops.

```bash
for (( i=1; i<=5; i++ )); do
    echo "C-style count: $i"
done
```

### 7.4 While Loop

Continues as long as a condition is true.

```bash
counter=1
while [ "$counter" -le 5 ]; do
    echo "While count: $counter"
    ((counter++))
done
```

### 7.5 Until Loop

Continues as long as a condition is false.

```bash
counter=1
until [ "$counter" -gt 5 ]; do
    echo "Until count: $counter"
    ((counter++))
done
```

### 7.6 Loop Control: `break` and `continue`

  * `break`: Exits the loop entirely.
  * `continue`: Skips the rest of the current iteration and goes to the next.

<!-- end list -->

```bash
for i in {1..10}; do
    if [ "$i" -eq 5 ]; then
        break # Exit loop when i is 5
    fi
    echo "Break example: $i"
done

echo "---"

for i in {1..5}; do
    if [ "$i" -eq 3 ]; then
        continue # Skip 3
    fi
    echo "Continue example: $i"
done
```

-----

## 8\. Functions

### 8.1 Defining a Function

```bash
greet_user() {
    echo "Hello there!"
}

# Or (older style, but still common)
function say_hello {
    echo "Hello from function!"
}
```

### 8.2 Calling a Function

```bash
greet_user
say_hello
```

### 8.3 Function Arguments

Arguments are accessed using `$1`, `$2`, etc. `$#` is the number of arguments, `$@` or `$*` represents all arguments.

```bash
add_numbers() {
    sum=$(( $1 + $2 ))
    echo "The sum of $1 and $2 is: $sum"
}

add_numbers 10 20
```

### 8.4 Return Values

Functions typically return an exit status (0 for success, non-zero for failure). To return a value, print it to stdout and capture it using command substitution.

```bash
calculate_square() {
    local num=$1 # 'local' creates a local variable
    echo $((num * num))
}

result=$(calculate_square 7)
echo "The square is: $result"
```

-----

## 9\. Script Arguments

### 9.1 Accessing Script Arguments

  * `$0`: Name of the script itself.
  * `$1`, `$2`, ...: Positional arguments.
  * `$#`: Number of arguments.
  * `$@`: All arguments as separate strings (best for loops).
  * `$*`: All arguments as a single string.

<!-- end list -->

```bash
# my_script.sh arg1 arg2
echo "Script name: $0"
echo "First argument: $1"
echo "Second argument: $2"
echo "Total arguments: $#"

echo "All arguments (using $@):"
for arg in "$@"; do
    echo "- $arg"
done
```

-----

## 10\. File Operations

### 10.1 Creating Files/Directories

```bash
touch new_file.txt          # Create an empty file
mkdir new_directory         # Create a new directory
mkdir -p parent/child/grandchild # Create nested directories
```

### 10.2 Checking File/Directory Existence

| Operator | Description                               |
| :------- | :---------------------------------------- |
| `-f`     | True if file exists and is a regular file |
| `-d`     | True if file exists and is a directory    |
| `-e`     | True if file exists (any type)            |
| `-r`     | True if file is readable                  |
| `-w`     | True if file is writable                  |
| `-x`     | True if file is executable                |
| `-s`     | True if file has a size greater than zero |

```bash
if [ -f "my_file.txt" ]; then
    echo "my_file.txt exists and is a regular file."
fi

if [ -d "my_directory" ]; then
    echo "my_directory exists and is a directory."
fi
```

### 10.3 Reading File Content

```bash
cat my_file.txt             # Display entire file
head -n 5 my_file.txt       # Display first 5 lines
tail -n 5 my_file.txt       # Display last 5 lines
```

### 10.4 Writing to Files

```bash
echo "Hello from script!" > output.txt    # Overwrite file
echo "Appending a new line." >> output.txt # Append to file
```

### 10.5 Deleting Files/Directories

```bash
rm old_file.txt             # Delete a file
rm -r old_directory         # Delete a directory and its contents
rm -rf force_delete         # Force delete without prompt
```

-----

## 11\. Command Substitution

Execute a command and use its output as a value.

```bash
current_date=$(date +%Y-%m-%d)
echo "Today's date is: $current_date"

# Older syntax with backticks (less recommended due to nesting issues)
# current_time=`date +%H:%M:%S`
# echo "Current time: $current_time"
```

-----

## 12\. Input/Output Redirection

### 12.1 Standard Output (`stdout`)

  * `>`: Redirect `stdout` to a file (overwrite).
  * `>>`: Redirect `stdout` to a file (append).

<!-- end list -->

```bash
ls > file_list.txt
echo "Additional item" >> file_list.txt
```

### 12.2 Standard Error (`stderr`)

  * `2>`: Redirect `stderr` to a file (overwrite).
  * `2>>`: Redirect `stderr` to a file (append).

<!-- end list -->

```bash
ls non_existent_dir 2> error.log
```

### 12.3 Redirecting Both (`stdout` and `stderr`)

  * `&>`: Redirect both `stdout` and `stderr` to a file (Bash specific).
  * `>&`: Redirect both `stdout` and `stderr` to a file (Bash specific).
  * `command > file 2>&1`: Redirect `stdout` to `file`, then redirect `stderr` to the same place as `stdout`. (More portable)

<!-- end list -->

```bash
find /etc -name "passwd" &> find_output.log # Both stdout and stderr
```

### 12.4 Input Redirection (`stdin`)

  * `<`: Redirect `stdin` from a file.

<!-- end list -->

```bash
wc -l < my_file.txt # Count lines in my_file.txt
```

-----

## 13\. Pipes (`|`)

Connect the `stdout` of one command to the `stdin` of another.

```bash
ls -l | grep ".txt"      # List .txt files
cat access.log | grep "ERROR" | sort -u # Find unique error messages
```

-----

## 14\. Exit Status

Every command and script returns an exit status (0 for success, non-zero for failure).

  * `$?`: Contains the exit status of the last executed command.

<!-- end list -->

```bash
ls non_existent_file
echo "Exit status: $?" # Will be non-zero

ls existing_file.txt
echo "Exit status: $?" # Will be 0
```

-----

## 15\. Debugging

### 15.1 Debugging Flags

  * `bash -x script.sh`: Prints commands and their arguments as they are executed.
  * `bash -v script.sh`: Prints shell input lines as they are read.
  * `set -x`: Turn on debugging for a part of the script.
  * `set +x`: Turn off debugging.

<!-- end list -->

```bash
#!/bin/bash

echo "Starting script..."
set -x # Turn on debugging
name="Alice"
echo "Hello, $name"
set +x # Turn off debugging
echo "Script finished."
```

-----

## 16\. Arrays

### 16.1 Defining Arrays

```bash
fruits=("apple" "banana" "cherry")
```

### 16.2 Accessing Array Elements

Use index (0-based).

```bash
echo "First fruit: ${fruits[0]}"
echo "Second fruit: ${fruits[1]}"
```

### 16.3 All Array Elements

```bash
echo "All fruits: ${fruits[@]}"
```

### 16.4 Number of Elements

```bash
echo "Number of fruits: ${#fruits[@]}"
```

### 16.5 Adding Elements

```bash
fruits+=("grape")
echo "${fruits[@]}"
```

### 16.6 Deleting Elements

```bash
unset fruits[1] # Deletes "banana"
echo "${fruits[@]}"
```

-----

## 17\. String Manipulation

### 17.1 String Length

```bash
name="Bash Scripting"
echo "Length of name: ${#name}"
```

### 17.2 Substring Extraction

`${string:start:length}`

```bash
message="Hello World"
sub=${message:6:5} # Extracts "World"
echo "Substring: $sub"
```

### 17.3 String Replacement

`${string/pattern/replacement}` (first occurrence)
`${string//pattern/replacement}` (all occurrences)

```bash
text="Hello, World! Hello, Bash!"
new_text=${text/Hello/Hi}
echo "Replaced first: $new_text"

new_text_all=${text//Hello/Hi}
echo "Replaced all: $new_text_all"
```

### 17.4 Removing Prefix/Suffix

  * `${string#pattern}`: Remove shortest matching prefix.
  * `${string##pattern}`: Remove longest matching prefix.
  * `${string%pattern}`: Remove shortest matching suffix.
  * `${string%%pattern}`: Remove longest matching suffix.

<!-- end list -->

```bash
filename="document.tar.gz"
echo "Without .gz: ${filename%.gz}"     # document.tar
echo "Without .tar.gz: ${filename%%.*}" # document

path="/home/user/documents/report.txt"
echo "Basename: ${path##*/}"            # report.txt
echo "Dirname: ${path%/*}"              # /home/user/documents
```

-----

## 18\. Regular Expressions (`grep`, `sed`, `awk`)

These are powerful tools for text processing and pattern matching.

### 18.1 `grep` (Global Regular Expression Print)

Used to search for patterns in files.

```bash
grep "error" /var/log/syslog     # Find lines containing "error"
grep -i "warning" /var/log/syslog # Case-insensitive search
grep -v "info" /var/log/syslog   # Show lines NOT containing "info"
grep -r "function" .             # Recursively search for "function" in current directory
```

### 18.2 `sed` (Stream Editor)

Used for filtering and transforming text.

```bash
sed 's/old_text/new_text/g' file.txt # Replace all "old_text" with "new_text"
sed '/pattern/d' file.txt            # Delete lines containing "pattern"
sed -n '5p' file.txt                 # Print only the 5th line
```

### 18.3 `awk` (Pattern Scanning and Processing Language)

Powerful for text processing, especially columnar data.

```bash
# Print the first and third columns of a CSV file
awk -F',' '{print $1, $3}' data.csv

# Sum the values in a column
awk '{sum += $2} END {print "Total: " sum}' numbers.txt

# Filter lines based on a condition
awk '$3 > 100 {print $0}' sales.log
```

-----

## 19\. Traps (Signal Handling)

Execute commands when a signal is received (e.g., script interruption).

```bash
cleanup() {
    echo "Cleaning up temporary files..."
    rm -f /tmp/my_temp_file.txt
    echo "Cleanup complete."
}

# Trap EXIT signal: execute cleanup function when script exits
trap cleanup EXIT

# Trap INT signal: execute cleanup function on Ctrl+C
trap cleanup INT

echo "Script running. Press Ctrl+C to test trap."
touch /tmp/my_temp_file.txt
sleep 10
echo "Script finished normally."
```

-----

## 20\. Advanced Concepts

### 20.1 Here Documents and Here Strings

Provide multi-line input to a command.

**Here Document (`<<EOF`)**

```bash
cat <<EOF
This is line 1.
This is line 2.
    This line is indented.
EOF
```

**Here String (`<<<`)**

```bash
read -r var <<< "Hello World"
echo $var # Output: Hello World
```

### 20.2 Subshells

A subshell runs commands in a separate process, so changes (like `cd`) don't affect the parent shell.

```bash
current_dir=$(pwd)
echo "Current directory: $current_dir"

(
    cd /tmp
    echo "Inside subshell, current directory: $(pwd)"
)

echo "Back in parent shell, current directory: $(pwd)" # Still original directory
```

### 20.3 Process Substitution (`<()`, `>()`)

Allows the output of a process to be treated as a file, or a file to be treated as input to a process.

```bash
# Compare two lists as if they were files using diff
diff <(ls /etc) <(ls /usr)

# Provide input to a command as if from a file
sort -u <(cat file1.txt file2.txt)
```

### 20.4 Globbing (Filename Expansion)

Wildcard characters for matching filenames.

  * `*`: Matches zero or more characters.
  * `?`: Matches exactly one character.
  * `[]`: Matches any one character within the brackets.
  * `[!...]`: Matches any one character NOT within the brackets.

<!-- end list -->

```bash
ls *.txt      # All files ending with .txt
ls data_?.csv # data_1.csv, data_A.csv etc.
ls [abc]*.log # Files starting with a, b, or c and ending with .log
```

### 20.5 Brace Expansion

Generate arbitrary strings.

```bash
echo {a,b,c}.txt      # a.txt b.txt c.txt
echo file_{1..3}.bak  # file_1.bak file_2.bak file_3.bak
echo {Mon,Tue,Wed}day # Monday Tuesday Wednesday
```

### 20.6 Parameter Expansion Modifiers

Powerful ways to manipulate variable values.

  * `${var:-word}`: If `var` is unset or null, use `word` as default. `var` is not changed.
  * `${var:=word}`: If `var` is unset or null, set `var` to `word` and use it.
  * `${var:+word}`: If `var` is set and not null, use `word`. Otherwise, null.
  * `${var:?message}`: If `var` is unset or null, print `message` and exit.

<!-- end list -->

```bash
# Example for :-
user="Guest"
echo "Hello, ${username:-$user}!" # If username is empty, use "Guest"

# Example for :=
unset default_val
echo "Value: ${default_val:=42}" # default_val is now 42
echo "New value: $default_val"
```

### 20.7 Associative Arrays (Bash 4+)

Key-value pairs.

```bash
declare -A colors
colors["red"]="#FF0000"
colors["blue"]="#0000FF"

echo "Red hex code: ${colors["red"]}"

for key in "${!colors[@]}"; do
    echo "Color: $key, Hex: ${colors[$key]}"
done
```

### 20.8 `getopts` for Command Line Options

For parsing short command-line options (`-a`, `-b value`).

```bash
#!/bin/bash

# Example: my_script.sh -f input.txt -v -o output.log

while getopts "f:vo:" opt; do
  case $opt in
    f)
      input_file=$OPTARG
      ;;
    v)
      verbose=true
      ;;
    o)
      output_file=$OPTARG
      ;;
    \?)
      echo "Invalid option: -$OPTARG" >&2
      exit 1
      ;;
    :)
      echo "Option -$OPTARG requires an argument." >&2
      exit 1
      ;;
  esac
done

shift $((OPTIND - 1)) # Shift positional parameters past options

echo "Input file: $input_file"
echo "Verbose mode: $verbose"
echo "Output file: $output_file"
echo "Remaining arguments: $@"
```

### 20.9 Select Loop (Menu Creation)

Creates an interactive menu.

```bash
PS3="Choose an animal: " # Prompt for select loop
select animal in "cat" "dog" "bird" "quit"; do
    case "$animal" in
        "cat")
            echo "Meow!"
            ;;
        "dog")
            echo "Woof!"
            ;;
        "bird")
            echo "Chirp!"
            ;;
        "quit")
            echo "Exiting."
            break
            ;;
        *)
            echo "Invalid choice. Please try again."
            ;;
    esac
done
```

-----

## 21\. Best Practices and Tips

  * **Always use `#!/bin/bash` (or appropriate interpreter) at the top.**
  * **Quote your variables:** `"$var"` to prevent word splitting and globbing, especially when dealing with filenames or user input.
  * **Use `local` for function variables:** Prevents unintended side effects and global variable clashes.
  * **Check exit status:** Use `if [ $? -ne 0 ]` or `command || handle_error` to ensure commands succeeded.
  * **Use meaningful variable names.**
  * **Keep scripts modular:** Break down complex tasks into functions.
  * **Add comments:** Explain complex logic or non-obvious parts.
  * **Handle errors gracefully:** Provide informative error messages and exit with non-zero status for failure.
  * **Test incrementally:** Don't write a huge script all at once. Test small parts as you go.
  * **Validate input:** Never trust user input; always validate it before using it.
  * **Use `set -e`:** Exits immediately if a command exits with a non-zero status. Useful for preventing cascading errors.
  * **Use `set -u`:** Treats unset variables as an error. Helps catch typos.
  * **Use `set -o pipefail`:** Ensures that a pipeline's return status is the rightmost non-zero exit status, or zero if all commands in the pipeline succeed.

<!-- end list -->

```bash
#!/bin/bash
set -euo pipefail # Good practice: exit on error, treat unset variables as error, propagate pipeline errors

echo "This script demonstrates best practices."

my_function() {
    local my_local_var="hello"
    echo "$my_local_var"
    # non_existent_command # This would cause the script to exit with set -e
}

my_function

# Example with quoted variable
filename="my file with spaces.txt"
touch "$filename"
echo "Created: '$filename'"

if [ -f "$filename" ]; then
    echo "File exists."
else
    echo "File not found."
fi

# Clean up
rm "$filename"
```

-----

This cheat sheet covers a wide range of Bash scripting functionalities. Practice each concept, experiment with the examples, and build small scripts to solidify your understanding. Happy scripting\!