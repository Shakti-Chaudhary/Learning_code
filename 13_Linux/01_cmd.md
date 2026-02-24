# 🐧 Linux Command Line Mastery: Intermediate Guide (Expanded)

This guide builds upon the basics of Linux commands, offering a more extensive collection of utilities and concepts for intermediate users. We'll delve deeper into text manipulation, system management, and shell features, equipping you with the tools for more powerful command-line interactions.

-----

## 📚 Table of Contents

  * [1. 📂 Advanced File & Directory Management](https://www.google.com/search?q=%231--advanced-file--directory-management)
  * [2. ✍️ Powerful Text Processing & Stream Editing](https://www.google.com/search?q=%232-%EF%B8%8F-powerful-text-processing--stream-editing)
  * [3. 🖥️ Process Control & Job Management](https://www.google.com/search?q=%233-%EF%B8%8F-process-control--job-management)
  * [4. 🌐 Networking & Connectivity Utilities](https://www.google.com/search?q=%234--networking--connectivity-utilities)
  * [5. ⚙️ Comprehensive System Information & Administration](https://www.google.com/search?q=%235-%EF%B8%8F-comprehensive-system-information--administration)
  * [6. 🐚 Advanced Shell Features & Scripting Fundamentals](https://www.google.com/search?q=%236--advanced-shell-features--scripting-fundamentals)
  * [7. 💡 Intermediate Tips & Best Practices](https://www.google.com/search?q=%237--intermediate-tips--best-practices)

-----

## 1\. 📂 Advanced File & Directory Management

  * **`ln` (link)**: Create links (references) to files or directories.
      * `ln -s /path/to/original /path/to/symlink`: Create a *symbolic* (soft) link. This is a pointer to the original file. If the original is deleted, the symlink breaks. Can link across file systems.
      * `ln /path/to/original /path/to/hardlink`: Create a *hard* link. This is another name for the same file data on disk. If the original is deleted, the hard link still works. Cannot link across file systems or to directories.
  * **`df -h`**: Report file system disk space usage in human-readable format.
      * `df -hT`: Also shows file system type.
  * **`du -sh <path>`**: Estimate file space usage for a directory or file (summarized, human-readable).
      * `du -ah <path>`: Shows individual file sizes recursively.
      * `du -sch * | sort -rh`: Summarizes total size, then sorts and displays sizes of individual items in current directory in reverse human-readable order.
  * **`rsync`**: A powerful and versatile utility for efficient file copying and synchronization (local or remote).
      * `rsync -avz source/ dest/`: Archive mode (preserves permissions, timestamps), verbose, compress during transfer.
      * `rsync -avz --delete source/ dest/`: Syncs by deleting files in `dest` that are not in `source`.
  * **`tree`**: List contents of directories in a tree-like format (often needs installation: `sudo apt install tree`).
      * `tree -L 2`: Limit display to 2 levels deep.
      * `tree -d`: List directories only.
  * **`find`**: More advanced usage beyond simple name searches.
      * `find . -type f -name "*.log" -delete`: Find and delete all `.log` files in current dir and subdirs. **Use with caution\!**
      * `find /var/www -type d -perm 777`: Find directories with 777 permissions (often a security risk).
      * `find . -size +1G -print0 | xargs -0 du -h`: Find files larger than 1GB and show their human-readable size.
  * **`xargs`**: Build and execute command lines from standard input. Often used with `find`.
      * `find . -name "*.bak" -print0 | xargs -0 rm`: Safely delete files with spaces/special characters in names.

-----

## 2\. ✍️ Powerful Text Processing & Stream Editing

  * **`sed` (Stream Editor)**: A powerful tool for parsing and transforming text.
      * `sed 's/old_text/new_text/g' file.txt`: Replace *all* occurrences of `old_text` with `new_text` on each line.
      * `sed -i 's/foo/bar/g' file.txt`: In-place edit `file.txt` (modifies the file directly).
      * `sed '/^#/d' config.txt`: Delete lines starting with `#`.
      * `sed '2,5d' file.txt`: Delete lines from 2 to 5.
  * **`awk`**: A versatile programming language for pattern scanning and processing.
      * `awk '{print $1, $NF}' file.txt`: Print the first and last fields (columns) of each line.
      * `awk -F':' '{print $1, $3}' /etc/passwd`: Use `:` as field separator, print username and UID.
      * `awk '$3 > 1000 {print $1}' data.log`: Print first field where third field is greater than 1000.
  * **`sort`**: Sort lines of text files.
      * `sort -nrk2 file.txt`: Sort numerically (`-n`), in reverse (`-r`), based on the second field (`-k2`).
  * **`uniq`**: Report or omit repeated lines.
      * `sort file.txt | uniq -c`: Count occurrences of unique lines.
      * `sort file.txt | uniq -d`: Show only duplicate lines.
  * **`cut`**: Remove sections from each line of files.
      * `cut -d',' -f1,3 file.csv`: Extract fields 1 and 3 from a comma-separated file.
      * `cut -c 1-5 file.txt`: Extract characters from column 1 to 5.
  * **`head` / `tail`**: More advanced usage.
      * `tail -f /var/log/syslog`: Follow (watch) a file for new content in real-time (useful for logs).
      * `head -n 50 /var/log/apache2/access.log | tail -n 10`: Get lines 41-50 of a large log file.
  * **`tr` (Translate or Delete Characters)**:
      * `echo "hello world" | tr '[:lower:]' '[:upper:]'`: Convert to uppercase.
      * `cat file.txt | tr -d ' '`: Remove all spaces from a file.
  * **`nl` (Number Lines)**: Add line numbers to files.
      * `nl file.txt`: Number lines in `file.txt`.

-----

## 3\. 🖥️ Process Control & Job Management

  * **`ps aux | grep <process_name>`**: Find a specific process by name.
      * `ps -ef | grep [n]ginx`: A common trick to prevent `grep` itself from showing up in the results (by using character classes).
  * **`pgrep <process_name>`**: Filter processes by name directly, returning PIDs.
      * `pgrep firefox`: Returns PIDs of all Firefox processes.
      * `pkill -9 firefox`: Force kill all Firefox processes using `pkill`.
  * **`top` / `htop`**: Advanced real-time process monitoring.
      * **`top` commands**: `k` (kill), `M` (sort by memory), `P` (sort by CPU), `u` (filter by user), `z` (color/bold).
      * **`htop`**: Provides a more user-friendly interface with mouse support, tree view, and easy sorting/filtering. Highly recommended (`sudo apt install htop`).
  * **`nice` / `renice`**: Adjust process priority.
      * `nice -n 10 my_command`: Run `my_command` with lower priority.
      * `renice +5 -p <PID>`: Increase a running process's "niceness" (lower priority).
  * **`nohup <command> &`**: Run a command in the background, immune to hang-ups (e.g., terminal closing). Output goes to `nohup.out` by default.
  * **`screen` / `tmux`**: Terminal multiplexers. Allow you to run multiple terminal sessions within a single window, detach from sessions, and reattach later. Essential for long-running processes on remote servers.
      * `screen`: Start a new screen session.
      * `screen -ls`: List screen sessions.
      * `screen -r <session_ID>`: Reattach to a session.
      * `Ctrl+a d`: Detach from a screen session.

-----

## 4\. 🌐 Networking & Connectivity Utilities

  * **`ip a` (address)**: Display IP addresses and network interface information (preferred over deprecated `ifconfig`).
  * **`ip r` (route)**: Display the kernel routing table.
  * **`ss -tunlp`**: Display active network connections and listening sockets (preferred over deprecated `netstat`).
      * `ss -tunap | grep LISTEN`: Show all listening TCP/UDP ports with associated processes.
  * **`ping <host>`**: Test network connectivity and measure round-trip time.
      * `ping -c 5 google.com`: Send 5 packets then stop.
  * **`traceroute <host>`**: Display the route packets take to reach a host.
  * **`nslookup` / `dig`**: Query DNS servers. `dig` is more modern and feature-rich.
      * `dig google.com`: Get DNS information for Google.
      * `dig +short google.com`: Get only the IP address.
  * **`nmap`**: Network scanner for discovery and security auditing (often needs installation: `sudo apt install nmap`).
      * `nmap <target_ip>`: Scan common ports on a target.
      * `nmap -sP 192.168.1.0/24`: Ping scan (host discovery) for a subnet.
  * **`netcat` (`nc`)**: A versatile network utility for reading from and writing to network connections.
      * `nc -lvp 8080`: Listen on port 8080 for incoming connections.
      * `echo "Hello" | nc localhost 8080`: Send "Hello" to a listener on port 8080.
  * **`ssh-keygen`**: Generate SSH key pairs for secure, passwordless logins.
      * `ssh-keygen -t rsa -b 4096`: Generate an RSA key.
      * `ssh-copy-id user@remote_host`: Copy your public key to a remote host for passwordless access.
  * **`scp`**: Securely copy files between hosts.
      * `scp -r user@remote:/path/to/remote_folder .`: Recursively copy remote folder to current local directory.

-----

## 5\. ⚙️ Comprehensive System Information & Administration

  * **`systemctl`**: Control and query the `systemd` system and service manager.
      * `systemctl status nginx`: Check status of Nginx service.
      * `systemctl start sshd`: Start SSH daemon.
      * `systemctl enable apache2`: Enable Apache to start on boot.
      * `systemctl restart docker`: Restart Docker service.
      * `systemctl list-units --type=service`: List all services.
  * **`journalctl`**: Query the `systemd` journal (system logs).
      * `journalctl -f`: Follow log messages in real-time.
      * `journalctl -u sshd --since "2 hours ago"`: View SSH daemon logs from 2 hours ago.
      * `journalctl -p err -b`: Show only error messages from the current boot.
  * **`lsusb`**: List USB devices.
  * **`lspci`**: List PCI devices.
  * **`lshw`**: List detailed hardware information (`sudo lshw`).
  * **`id`**: Display user and group information.
      * `id -Gn`: List all groups a user belongs to.
  * **`w`**: Show who is logged on and what they are doing.
  * **`uptime`**: Show how long the system has been running, number of users, and load averages.
  * **`hostnamectl`**: Query and change system hostname and related settings.
  * **`timedatectl`**: Query and change system time and date settings.
  * **`df -i`**: Show inode usage (number of files) on file systems.
  * **`mount`**: List mounted file systems.
      * `sudo mount /dev/sdb1 /mnt/data`: Mount a partition.
  * **`umount /mnt/data`**: Unmount a mounted file system.

-----

## 6\. 🐚 Advanced Shell Features & Scripting Fundamentals

  * **Pipes (`|`)**: More complex chains.
      * `cat /var/log/syslog | grep "fail" | sort | uniq -c`: Count unique failure messages in syslog.
  * **Redirection (`>`, `>>`, `2>`, `&>`)**: Advanced stream redirection.
      * `command > /dev/null 2>&1`: Discard both stdout and stderr (run command silently).
  * **Here Strings (`<<<`) and Here Documents (`<<`)**: Provide multi-line input to commands.
      * `grep "pattern" <<< "single line text"`
      * `cat << EOF > my_script.sh`
        `#!/bin/bash`
        `echo "Hello from script"`
        `EOF`
  * **Command Substitution (`$(command)`)**: Nested usage.
      * `ls -l $(find . -name "*.txt")`: List long format for all `.txt` files.
  * **Process Substitution (`<(command)`)**: Treat output of a command as a temporary file.
      * `diff <(ls dir1) <(ls dir2)`: Compare contents of two directories.
  * **Shell Variables**:
      * `MY_VAR="Some Value"`: Assign a variable.
      * `echo $MY_VAR`: Access a variable.
      * `export MY_VAR`: Make a variable available to child processes.
      * `readonly MY_VAR`: Make a variable read-only.
  * **Aliases**: Create custom command shortcuts (add to `~/.bashrc` or `~/.zshrc` for persistence).
      * `alias up='sudo apt update && sudo apt upgrade -y'`
  * **Functions**: Define reusable blocks of commands in your shell.
      * `my_func() { echo "Hello $1"; }`
      * `my_func World`
  * **`cron` (Crontab)**: Schedule commands for automated execution.
      * `crontab -e`: Edit your user's crontab.
      * `* * * * * command_to_run`: Example: every minute. (Minute, Hour, Day of Month, Month, Day of Week)
  * **Bash Scripting Basics**: Learn conditional statements (`if`, `else`), loops (`for`, `while`), and basic arithmetic within scripts.
      * `#!/bin/bash` (shebang line)
      * `if [ -f "myfile.txt" ]; then echo "File exists."; fi`
      * `for i in {1..5}; do echo $i; done`

-----

## 7\. 💡 Intermediate Tips & Best Practices

  * **Read the `man` pages (fully\!)**: Don't just skim. Many commands have powerful options.
  * **Learn Regular Expressions (Regex)**: Essential for `grep`, `sed`, `awk`, `find`, and many other tools.
  * **Understand Exit Status**: Every command returns an exit status (0 for success, non-zero for failure). Use `echo $?` to check. This is crucial for scripting.
  * **Use `Ctrl+R` for History Search**: Far more efficient than arrow keys for finding past commands.
  * **Master Globbing**: Using wildcards like `*`, `?`, `[]` for pattern matching in filenames.
      * `rm *.txt`: Delete all `.txt` files.
      * `cp report_?.csv reports/`: Copy `report_1.csv`, `report_A.csv`, etc.
  * **Quotes Matter (`''` vs. `""`)**:
      * **Single quotes (`''`)**: Treat everything literally.
      * **Double quotes (`""`)**: Allow variable expansion (`$VAR`) and command substitution (`$()`).
  * **Backticks vs. `$(...)`**: Prefer `$(command)` over `` `command` `` for command substitution as it handles nesting better.
  * **Be Mindful of `sudo`**: Always consider the implications of running commands as root.
  * **Backup Regularly**: Especially before making major system changes or using destructive commands.
  * **Explore `/proc` and `/sys`**: These are virtual file systems that provide interfaces to kernel data and system hardware information.
      * `cat /proc/cpuinfo`: CPU information.
      * `cat /proc/meminfo`: Memory information.
  * **Contribute to Your `.bashrc` / `.zshrc`**: Customize your shell with aliases, functions, and environment variables to suit your workflow.

-----
