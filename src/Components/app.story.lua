local TS = require(game:GetService("ReplicatedStorage"):WaitForChild("include"):WaitForChild("RuntimeLib"));
local Roact = TS.import(script, TS.getModule(script, "roact").roact.src);

return function(target)
    local App = require(script.Parent.app)

    local element = Roact.createElement(App.default, {},{})
    local mount = Roact.mount(element, target)

    return function()
        Roact.unmount(mount)
    end
end