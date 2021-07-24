import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import ListSubheader from '@material-ui/core/ListSubheader'
import TwitterIcon from '@material-ui/icons/Twitter'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import IconButton from '@material-ui/core/IconButton'
import GitHubIcon from '@material-ui/icons/GitHub'

const useStyles = makeStyles((theme) => ({
    socialMediaLinks: {
        paddingTop: 10,
    },
}))

export default function SocialNetworkSites(props) {
    const classes = useStyles()

    const handleSocialMediaLinkClick = (event) => {
        window.open(event.currentTarget.value)
    }

    return (
        <ListSubheader className={classes.socialMediaLinks}>
            <IconButton
                value="https://github.com/selcukguvel"
                onClick={handleSocialMediaLinkClick}
                aria-label="Open GitHub page"
            >
                <GitHubIcon style={{ color: 'white', fontSize: 32 }} />
            </IconButton>
            <IconButton
                value="https://www.linkedin.com/in/selcukguvel/"
                onClick={handleSocialMediaLinkClick}
                aria-label="Open Linkedin page"
            >
                <LinkedInIcon
                    style={{
                        color: '#0077B5',
                        fontSize: 40,
                    }}
                />
            </IconButton>
            <IconButton
                value="https://twitter.com/selcukguvel"
                onClick={handleSocialMediaLinkClick}
                aria-label="Open Twitter page"
            >
                <TwitterIcon style={{ color: '#0077B5', fontSize: 40 }} />
            </IconButton>
        </ListSubheader>
    )
}
