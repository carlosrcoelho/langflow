import os
from github import Github

def get_changelog(repo):
    releases = repo.get_releases()
    changelog = "# Changelog\n\n"
    for release in releases:
        changelog += f"## {release.tag_name} - {release.published_at.strftime('%Y-%m-%d')}\n\n"
        changelog += f"{release.body}\n\n"
    return changelog

def main():
    token = os.environ["GITHUB_TOKEN"]
    repo_name = os.environ["GITHUB_REPOSITORY"]
    g = Github(token)
    repo = g.get_repo(repo_name)
    changelog = get_changelog(repo)
    with open("CHANGELOG.md", "w") as f:
        f.write(changelog)

if __name__ == "__main__":
    main()
