
# FSD

FSD Provides good defenition of how project structure should look like, so based on that this project template is made to work together with FSD. Even though FSD has good overall conventions few things could be customised and any methodology can bump into some limitations when you apply it on actual projects.

Since we're using NextJS there are few things different
1) /src/app/layouts contain layouts composition ( instead of having thos in widgets/layouts )
2) /pages used for routing configuration and composition of app pages together with nextjs GSP/GSSP/GIP


## STM

For the STM we use effectorjs which provides amazing functionality out of the box, no third party async solutions like it is for redux needed, everything is flexible and configurable, effector-react bindings for react + effector-react/scope that enables data serialization and context for the react app tree.


## Entity/Feature/Widget sturcture

All 3 layers has similar file structure, so we can standartize them.
Over all recommendations for file structure are:

index.ts - public export file, should export only things that are supposed to used outside of layer
model.namespace.ts  
    1) namespace - name of the layer's (for example user.model.ts )
    2) there could be few models so in that case you can create folder model and name files accordingly to what they represent
    3) model should export public api from itself (at least for out of layer public api) for example 
        ```ts
            const $$user = {
                user: $user,

                userUpdated,

                getUserFx,

                getUsersFx,

                saveUserFx

                // and so on
            }
        ```
    4) if you cannot really split model into 2 files grouping them logically (for example user.model, profile.model) but it starts to grow, you can make a separate folder where you gonna have index, events, effects, store, bindings, lib files.
ui

## Refs
https://feature-sliced.design/en/docs/get-started
https://effector.dev/