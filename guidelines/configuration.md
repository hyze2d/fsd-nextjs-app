## Configuration

For a configuration you can use config.json file (should be in git ignore) at the root dir of project then import it into a next.config.js and pass all needed values into a runtimeconfigs for server and client. 

When project's being build on remote machine you can provide those env variables normally setting them as env variables.

Prefer mapping all variables you have from the envs into a single object (src/shared/config/environment for example) to make it clear what you have and what you need in your project
