module.exports = {
  apps : [{
    name: 'server-side-production',
    script: './build/server/server.bundle.js',
    node_args: "--max_old_space_size=60000",
    instances: 1,
    autorestart: false,
    watch: false,
    exec_mode: 'cluster',
    // max_memory_restart: '13G'
  }]
}
