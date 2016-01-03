var React = require("react");

var Docker = React.createClass({
    render: function(){
        return (
            <div className="dock">
                <ul>
                    <li>
                        <em><span>Gmail</span></em>
                        <a href="mailto:afahocci@gmail.com" title="Gmail"><img src="../images/Google.png" /></a>
                    </li>
                    <li>
                        <em><span>Facebook</span></em>
                        <a href="https://facebook.com/afahocci8" title="Facebook"><img src="../images/Facebook.png" /></a>
                    </li>
                    <li>
                        <em><span>Twitter</span></em>
                        <a href="https://twitter.com" title="Twitter"><img src="../images/Twitter.png" /></a>
                    </li>
                    <li>
                        <em><span>Github</span></em>
                        <a href="https://github.com/sushilshrestha" title="Github"><img src="../images/Github.png" /></a>
                    </li>
                    <li>
                        <em><span>Linkedin</span></em>
                        <a href="https://linkedin.com" title="Linkedin"><img src="../images/LinkedIn.png" /></a>
                    </li>
                    <li>
                        <em><span>Blog</span></em>
                        <a href="http://blog.shresthasushil.com.np" title="Blog"><img src="../images/Blogger.png" /></a>
                    </li>
                </ul>
            </div>
        );
    }
});

module.exports = Docker;