// the \b remove charecters from the start of the string so \b\b removes the oe{space}
const completionSpec: Fig.Spec = {
  name: "oe",
  description: "OE Team Completions",
  subcommands: [
  {
    name: "postgres",
    description: "Start Postgres. Usage: oe postgres",
    insertValue: "\b\b\bcd ~/projects/local-postgres && make up"
  },
  {
    name: "prometheus",
    description: "Start Prometheus. Usage oe prometheus",
    insertValue: "\b\b\bcd ~/projects/local-prometheus && make up"
  },
  {
    name: "grafana",
    description: "Start Grafana. Usage: oe grafana",
    insertValue: "\b\b\bcd ~/projects/local-grafana && make up"
  },
  { 
    name: "poet",
    description: "Start Poet. Usage: oe poet",
    insertValue: "\b\b\bcd ~/projects/oe-poet && make up"
  },
  {
    name: "discoe",
    description: "Start Discoe. Usage: oe discoe subcommand",
    subcommands: [
      {
        name: "npm_ci",
        description: "Run npm ci. Usage: oe discoe npm_ci",
        insertValue: "\b\b\b\b\b\b\b\b\b\bcd ~/projects/discoe/apps/poet/frontend && npm ci"
      },
      {
        name: "ng_serve",
        description: "Run ng serve. Usage: oe discoe ng_serve",
        insertValue: "\b\b\b\b\b\b\b\b\b\bcd ~/projects/discoe/apps/poet/frontend && npx ng serve --proect=poet"
      }
    ] 
  }
],
  options: [{
    name: ["--help", "-h"],
    description: "Show help for oe",
  }],
  // Only uncomment if oe takes an argument
  // args: {}
};
export default completionSpec;