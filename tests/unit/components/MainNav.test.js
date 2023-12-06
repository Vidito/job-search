import { render, screen } from '@testing-library/vue'
import userEvent from '@testing-library/user-event'
import MainNav from '@/components/MainNav.vue'
import { describe, expect } from 'vitest'

describe('MainNav', () => {
  it('displays company Name', () => {
    render(MainNav)
    const companyName = screen.getByText('Pythonology')
    expect(companyName).toBeInTheDocument()
  })
  it('displays menu items for navigation', () => {
    render(MainNav)
    // We grab the aria role of the items
    const navigationMenuItems = screen.getAllByRole('listitem')
    const navigationMenuText = navigationMenuItems.map((item) => {
      return item.textContent
    })
    // we use toEqual instead of toBe because toBe checks the references is the same
    expect(navigationMenuText).toEqual([
      'Teams',
      'Locations',
      'Life at Pythonology',
      'How we hire',
      'Students',
      'Jobs'
    ])
  })
  describe('When the user logs in', () => {
    it('displays user profile picture', async () => {
      render(MainNav)
      let profileImage = screen.queryByRole('img', {
        // the following is the image alt in slashes as regex and i indicating case insensitive
        name: /user profile image/i
      })
      expect(profileImage).not.toBeInTheDocument()

      const loginButton = screen.getByRole('button', {
        name: /log in/i
      })
      await userEvent.click(loginButton)
      profileImage = screen.getByRole('img', {
        name: /user profile image/i
      })
      expect(profileImage).toBeInTheDocument()
    })
  })
})
