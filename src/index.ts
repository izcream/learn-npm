function main() {
  if (process.argv.length < 3) {
    console.log('Usage: learn-npm <name>')
    process.exit(1)
  }
  const name = process.argv[2]

  console.log(`Hello, ${name}!`)
}
main()
